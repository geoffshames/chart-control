'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { calculatePoints, predictPosition } from '@/lib/calculator';
import { week20260423 } from '@/lib/data/week-2026-04-23';

interface CalculatorProps {
  id?: string;
}

/**
 * Top-level SliderRow so it's not re-created on every Calculator render,
 * which was remounting the <input> mid-drag and breaking the thumb.
 */
type SliderRowProps = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  max: number;
  step: number;
  hint: string;
  format: (v: number) => string;
};

function SliderRow({ label, value, onChange, max, step, hint, format }: SliderRowProps) {
  const percent = (value / max) * 100;
  return (
    <div className="py-6 border-b border-[#333]/30">
      <div className="flex items-center justify-between mb-4">
        <label className="text-[11px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium">
          {label}
        </label>
        <div className="font-mono text-xl md:text-2xl text-[#FD3737] font-bold tabular-nums">
          {format(value)}
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider"
        style={{ ['--val' as string]: percent + '%' } as React.CSSProperties}
      />
      <div className="text-[11px] text-[#B8B8C0] mt-3 tracking-wide">{hint}</div>
    </div>
  );
}

const fmtM = (v: number) => (v / 1_000_000).toFixed(1) + 'M';
const fmtK = (v: number) => v.toLocaleString();

const Calculator = ({ id }: CalculatorProps) => {
  const [premiumOnDemand, setPremiumOnDemand] = useState(18_000_000);
  const [adSupported, setAdSupported] = useState(5_000_000);
  const [programmed, setProgrammed] = useState(2_000_000);
  const [airplayAudience, setAirplayAudience] = useState(50_000_000);
  const [sales, setSales] = useState(25_000);
  const [targetRank, setTargetRank] = useState(50);

  const totalPoints = calculatePoints(
    premiumOnDemand,
    adSupported,
    programmed,
    airplayAudience,
    sales
  );

  const thresholds = week20260423.thresholdPoints;
  const predictedRank = Math.round(
    predictPosition(totalPoints, thresholds as Record<number, number>)
  );

  // Path to target: how much MORE of each lever to reach the target threshold
  const targetThreshold =
    thresholds[targetRank as keyof typeof thresholds] ??
    // linear interp if not an exact key
    (() => {
      const keys = Object.keys(thresholds).map(Number).sort((a, b) => a - b);
      const lower = keys.filter((k) => k <= targetRank).pop() ?? keys[0];
      const upper = keys.find((k) => k >= targetRank) ?? keys[keys.length - 1];
      if (lower === upper) return thresholds[lower as keyof typeof thresholds];
      const lv = thresholds[lower as keyof typeof thresholds];
      const uv = thresholds[upper as keyof typeof thresholds];
      const t = (targetRank - lower) / (upper - lower);
      return lv + (uv - lv) * t;
    })();
  const deficit = targetThreshold - totalPoints;
  const pathLines = deficit <= 0
    ? null
    : [
        { label: 'PREMIUM STREAMS', amount: (deficit * 125).toLocaleString() + ' more' },
        { label: 'PROGRAMMED STREAMS', amount: (deficit * 500).toLocaleString() + ' more' },
        { label: 'AIRPLAY IMPRESSIONS', amount: (deficit * 800).toLocaleString() + ' more' },
      ];

  return (
    <section id={id} className="w-full px-6 md:px-10 py-20 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-4">
            02 &middot; CALCULATOR
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight uppercase"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            Will Your Song Chart?
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            Input a consumption profile. Predicted Hot 100 position updates in real time.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {/* LEFT: Inputs — no card wrapper, dividers only */}
          <div>
            <SliderRow
              label="Premium On-Demand"
              value={premiumOnDemand}
              onChange={setPremiumOnDemand}
              max={30_000_000}
              step={100_000}
              hint="Top-10 avg: 18&ndash;28M premium streams/week"
              format={fmtM}
            />
            <SliderRow
              label="Ad-Supported"
              value={adSupported}
              onChange={setAdSupported}
              max={10_000_000}
              step={50_000}
              hint="Spotify Free &amp; ad-supported platforms (YouTube excluded)"
              format={fmtM}
            />
            <SliderRow
              label="Programmed"
              value={programmed}
              onChange={setProgrammed}
              max={10_000_000}
              step={50_000}
              hint="Pandora, iHeart programmed, SiriusXM streaming"
              format={fmtM}
            />
            <SliderRow
              label="Airplay Audience"
              value={airplayAudience}
              onChange={setAirplayAudience}
              max={100_000_000}
              step={500_000}
              hint="Impressions from Hot 100 Panel radio stations"
              format={fmtM}
            />
            <SliderRow
              label="Sales Units"
              value={sales}
              onChange={setSales}
              max={100_000}
              step={500}
              hint="Paid downloads &amp; physical singles (CD / vinyl)"
              format={fmtK}
            />
          </div>

          {/* RIGHT: Results (sticky on lg+) */}
          <motion.div
            className="lg:sticky lg:top-24 h-fit space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-3 font-medium">
                TOTAL POINTS
              </div>
              <div
                className="text-5xl md:text-6xl font-bold font-mono tabular-nums text-[#FAFAFA] leading-none"
                style={{ fontFamily: "'N27', sans-serif" }}
              >
                {totalPoints.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-3 font-medium">
                PREDICTED POSITION
              </div>
              <div
                className="text-6xl md:text-7xl font-bold text-[#FD3737] font-mono leading-none"
                style={{ fontFamily: "'N27', sans-serif" }}
              >
                #{predictedRank}
              </div>
              <div className="text-[11px] text-[#B8B8C0] mt-2 tracking-wide">&plusmn;3 position margin</div>
            </div>

            <div className="space-y-0 border-t border-[#333]/40 pt-6">
              {[1, 10, 25, 50, 75, 100].map((rank) => {
                const threshold = thresholds[rank as keyof typeof thresholds];
                const delta = totalPoints - threshold;
                const surplus = delta >= 0;
                return (
                  <div
                    key={rank}
                    className="grid grid-cols-[60px_1fr_auto] gap-4 py-3 border-b border-[#333]/30 items-center text-[13px] font-mono tabular-nums"
                  >
                    <div className="text-[#B8B8C0]">#{rank}</div>
                    <div className="text-[#B8B8C0]">{threshold.toLocaleString()} pts</div>
                    <div className={(surplus ? 'text-[#00E676]' : 'text-[#FF1744]') + ' font-bold'}>
                      {surplus ? '+' : ''}{Math.round(delta / 1000).toLocaleString()}K
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#141414] border border-[#333]/60 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium">
                  Target Rank
                </label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={targetRank}
                  onChange={(e) => setTargetRank(Math.max(1, Math.min(100, Number(e.target.value))))}
                  className="w-16 h-9 px-3 bg-[#1A1A1A] border border-[#333]/60 text-[#FAFAFA] font-mono text-sm tabular-nums rounded-sm"
                />
              </div>
              {pathLines ? (
                <div className="space-y-2">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#FFD600] font-medium mb-2">
                    Path to &#35;{targetRank} &middot; need {Math.round(deficit).toLocaleString()} more points
                  </div>
                  {pathLines.map((p) => (
                    <div key={p.label} className="flex items-center justify-between py-1.5 text-[12px] border-b border-[#333]/20 last:border-b-0">
                      <span className="text-[#B8B8C0] font-mono tracking-wide">{p.label}</span>
                      <span className="font-mono text-[#FAFAFA] tabular-nums">{p.amount}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-[12px] text-[#00E676] font-mono">
                  Already past #{targetRank}.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
