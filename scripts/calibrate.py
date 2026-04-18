#!/usr/bin/env python3
"""
CHART CONTROL — divisor calibration pipeline.

Reads every week JSON under ./weeks/*.json, fits the 4 unknown divisors
(premium, ad-supported, programmed, airplay) against drill-in consumption
observations, holds sales=÷1 fixed, and writes ./divisors.json with the
current calibrated values + per-week fit quality.

Re-run this script every time a new week is added. The model learns
(tightens its divisors) as more data points accumulate.

Usage:
    python3 calibrate.py [--weeks-dir weeks] [--out divisors.json]

Dependencies: only the Python stdlib. No numpy required.
"""

from __future__ import annotations

import argparse
import json
import math
import os
import statistics
from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from glob import glob
from pathlib import Path
from typing import Dict, List, Optional, Tuple


# ------------------------------------------------------------------
# Prior (the 2024 Billboard PDF that kicked this project off)
# ------------------------------------------------------------------
PRIOR_DIVISORS = {
    "premium": 125.0,
    "adSupported": 375.0,
    "programmed": 500.0,
    "airplay": 800.0,
    "sales": 1.0,
}
# Sales is locked to /1 — the other four are fit from data with a soft
# pull back toward the prior.
LAMBDA_REG = 5e-5   # regularization weight — dialing this up pins the
                    # divisors closer to the 2024 PDF when we have few
                    # drill-ins; as N grows the data naturally dominates.

# Search bounds around the prior (+/- 30% for sanity).
BOUNDS = {
    "premium":     (80.0, 170.0),
    "adSupported": (250.0, 500.0),
    "programmed":  (300.0, 700.0),
    "airplay":     (550.0, 1100.0),
}


# ------------------------------------------------------------------
# Data loading
# ------------------------------------------------------------------
@dataclass
class DrillIn:
    week: str
    rank: int
    title: str
    artist: str
    actual: float
    premium: Optional[float]
    ad_supported: Optional[float]
    programmed: Optional[float]
    airplay: Optional[float]
    sales: Optional[float]


def load_weeks(weeks_dir: str) -> Tuple[List[Dict], List[DrillIn]]:
    week_files = sorted(glob(os.path.join(weeks_dir, "*.json")))
    weeks = []
    drillins = []
    for f in week_files:
        with open(f) as fh:
            data = json.load(fh)
        weeks.append(data)
        for rank_str, d in (data.get("drillins") or {}).items():
            c = d.get("consumption") or {}
            # Skip drill-ins that don't yet have the consumption
            # breakdown (early threshold-only weeks).
            # Require complete consumption data (all 5 fields) for calibration
            # Incomplete samples bias the optimizer. Programmed-only historical
            # drill-ins are preserved in week JSONs for future backfill.
            required = ["premiumStreams", "adSupportedStreams", "programmedStreams", "airplayAudience", "sales"]
            if not c or any(c.get(k) is None for k in required):
                continue
            drillins.append(DrillIn(
                week=data.get("weekEnding", Path(f).stem),
                rank=int(rank_str),
                title=d.get("title", ""),
                artist=d.get("artist", ""),
                actual=float(d.get("actualPts", 0)),
                premium=c.get("premiumStreams"),
                ad_supported=c.get("adSupportedStreams"),
                programmed=c.get("programmedStreams"),
                airplay=c.get("airplayAudience"),
                sales=c.get("sales"),
            ))
    return weeks, drillins


# ------------------------------------------------------------------
# Model + loss
# ------------------------------------------------------------------
def predict_points(d: DrillIn, div: Dict[str, float]) -> float:
    total = 0.0
    if d.premium:       total += d.premium      / div["premium"]
    if d.ad_supported:  total += d.ad_supported / div["adSupported"]
    if d.programmed:    total += d.programmed   / div["programmed"]
    if d.airplay:       total += d.airplay      / div["airplay"]
    if d.sales:         total += d.sales        / div["sales"]
    return total


def loss(div: Dict[str, float], samples: List[DrillIn]) -> float:
    """Mean squared relative error + prior-regularization term."""
    if not samples:
        return float("inf")
    sse = 0.0
    for s in samples:
        pred = predict_points(s, div)
        rel = (pred - s.actual) / max(1.0, s.actual)
        sse += rel * rel
    data_term = sse / len(samples)
    reg = 0.0
    for k, v in div.items():
        if k == "sales":
            continue
        prior = PRIOR_DIVISORS[k]
        reg += ((v - prior) / prior) ** 2
    return data_term + LAMBDA_REG * reg


# ------------------------------------------------------------------
# Coordinate-descent grid search (stdlib-only; good enough for ≤ 50
# samples × 4 dims).  Start at the prior and sweep each divisor
# independently, then tighten the grid; converges in ~5 passes.
# ------------------------------------------------------------------
def fit(samples: List[DrillIn], verbose: bool = False) -> Dict[str, float]:
    div = dict(PRIOR_DIVISORS)
    if not samples:
        return div

    for pass_idx, step_frac in enumerate([0.20, 0.10, 0.05, 0.02, 0.01]):
        for k in ("premium", "adSupported", "programmed", "airplay"):
            best = div[k]
            best_loss = loss(div, samples)
            lo, hi = BOUNDS[k]
            # +/- step_frac of current value, but clipped to bounds
            step = div[k] * step_frac
            n_steps = 12
            for i in range(-n_steps, n_steps + 1):
                candidate = div[k] + i * step
                if candidate < lo or candidate > hi:
                    continue
                trial = dict(div)
                trial[k] = candidate
                l = loss(trial, samples)
                if l < best_loss:
                    best_loss = l
                    best = candidate
            div[k] = best
        if verbose:
            print(f"pass {pass_idx+1}  loss={loss(div, samples):.6f}  "
                  f"divisors={ {k: round(v,1) for k,v in div.items()} }")
    return div


# ------------------------------------------------------------------
# Hold-one-week-out cross-validation → per-week fit quality.
# ------------------------------------------------------------------
def crossval(drillins: List[DrillIn]) -> Dict[str, Dict[str, float]]:
    weeks = sorted(set(d.week for d in drillins))
    out = {}
    for w in weeks:
        train = [d for d in drillins if d.week != w]
        test  = [d for d in drillins if d.week == w]
        if not train or not test:
            continue
        fit_div = fit(train)
        errs = []
        for s in test:
            pred = predict_points(s, fit_div)
            errs.append(abs(pred - s.actual) / max(1.0, s.actual))
        out[w] = {
            "heldOutMAPE": round(100 * statistics.mean(errs), 2),
            "maxRelErr":   round(100 * max(errs), 2),
            "nSamples":    len(test),
        }
    return out


# ------------------------------------------------------------------
# Walk-forward backtest: for each week N, fit on weeks 1..N-1 ONLY
# (no peeking at future), then predict week N's drill-ins.  Stricter
# than leave-one-out; matches how the model would actually be used
# in production.
# ------------------------------------------------------------------
def walk_forward(drillins: List[DrillIn]) -> Dict[str, Dict]:
    weeks_sorted = sorted(set(d.week for d in drillins))
    out = {}
    predictions = []  # per-drill-in predicted vs actual
    for idx, w in enumerate(weeks_sorted):
        # Need at least 2 prior weeks to avoid degenerate fits
        prior_weeks = weeks_sorted[:idx]
        if len(prior_weeks) < 2:
            out[w] = {"heldOutMAPE": None, "nSamples": 0,
                      "nPriorWeeks": len(prior_weeks), "skipped": True}
            continue
        train = [d for d in drillins if d.week in prior_weeks]
        test  = [d for d in drillins if d.week == w]
        fit_div = fit(train)
        errs = []
        for s in test:
            pred = predict_points(s, fit_div)
            rel = abs(pred - s.actual) / max(1.0, s.actual)
            errs.append(rel)
            predictions.append({
                "week": s.week, "rank": s.rank, "title": s.title,
                "actual": round(s.actual), "predicted": round(pred),
                "relErr": round(100 * (pred - s.actual) / max(1.0, s.actual), 2),
            })
        out[w] = {
            "heldOutMAPE": round(100 * statistics.mean(errs), 2),
            "maxRelErr":   round(100 * max(errs), 2),
            "nSamples":    len(test),
            "nPriorWeeks": len(prior_weeks),
            "skipped":     False,
        }
    return {"perWeek": out, "predictions": predictions}


# ------------------------------------------------------------------
# Main
# ------------------------------------------------------------------
def main():
    p = argparse.ArgumentParser()
    p.add_argument("--weeks-dir", default="../data/weeks")
    p.add_argument("--out",       default="../src/lib/data/divisors.json")
    p.add_argument("--verbose",   action="store_true")
    args = p.parse_args()

    weeks, drillins = load_weeks(args.weeks_dir)
    n_with_drill = sum(1 for w in weeks if w.get("drillins"))
    n_usable = len(drillins)

    print(f"[calibrate] loaded {len(weeks)} weeks "
          f"({n_with_drill} with drill-ins, {n_usable} consumption samples usable)")

    if n_usable == 0:
        print("[calibrate] no consumption drill-ins yet — keeping prior divisors")
        fitted = dict(PRIOR_DIVISORS)
        cv = {}
        in_sample_mape = None
    else:
        fitted = fit(drillins, verbose=args.verbose)
        # In-sample MAPE
        errs = []
        for s in drillins:
            p_pred = predict_points(s, fitted)
            errs.append(abs(p_pred - s.actual) / max(1.0, s.actual))
        in_sample_mape = round(100 * statistics.mean(errs), 2)
        cv = crossval(drillins) if len(set(d.week for d in drillins)) >= 2 else {}

    # Threshold history — feeds the dashboard's historical-drift chart
    threshold_history = []
    for w in weeks:
        threshold_history.append({
            "weekEnding": w.get("weekEnding"),
            "weekStart":  w.get("weekStart"),
            "thresholds": w.get("thresholdPoints", {}),
        })
    threshold_history.sort(key=lambda x: x["weekEnding"])

    # Confidence — rises with N drill-ins (cap at 100%)
    confidence_pct = min(100, int(100 * (1 - math.exp(-n_usable / 20))))

    # Walk-forward backtest (only if we have >=3 weeks of data)
    if len(set(d.week for d in drillins)) >= 3:
        wf = walk_forward(drillins)
        # Compute aggregate walk-forward MAPE (excluding skipped weeks)
        wf_errs = [abs(p["relErr"]) / 100 for p in wf["predictions"]]
        wf_mape = round(100 * statistics.mean(wf_errs), 2) if wf_errs else None
    else:
        wf = {"perWeek": {}, "predictions": []}
        wf_mape = None

    out = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "model": {
            "priorDivisors": PRIOR_DIVISORS,
            "currentDivisors": fitted,
            "searchBounds":   BOUNDS,
            "lambdaReg":      LAMBDA_REG,
        },
        "training": {
            "weeksLoaded":         len(weeks),
            "weeksWithDrillins":   n_with_drill,
            "totalDrillinSamples": n_usable,
            "inSampleMAPE":        in_sample_mape,
            "heldOutWeek":         cv,
            "confidencePct":       confidence_pct,
            "walkForwardMAPE":     wf_mape,
            "walkForwardPerWeek":  wf["perWeek"],
            "walkForwardPredictions": wf["predictions"],
        },
        "thresholdHistory": threshold_history,
    }

    with open(args.out, "w") as f:
        json.dump(out, f, indent=2)
    print(f"[calibrate] wrote {args.out}")
    print(f"[calibrate] divisors: "
          f"premium÷{fitted['premium']:.1f}  "
          f"ad÷{fitted['adSupported']:.1f}  "
          f"programmed÷{fitted['programmed']:.1f}  "
          f"airplay÷{fitted['airplay']:.1f}  "
          f"sales÷1")
    if in_sample_mape is not None:
        print(f"[calibrate] in-sample MAPE: {in_sample_mape}%   confidence: {confidence_pct}%")


if __name__ == "__main__":
    main()
