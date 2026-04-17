'use client';

import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import { week20260409, divisors } from '@/lib/data/week-2026-04-09';
import { calculatePoints, predictPosition, distanceToThreshold, pathToTarget } from '@/lib/calculator';

const thresholds = week20260409.thresholdPoints;
const chartRows = week20260409.rows;

const validationSamples = [
  {
    rank: 1,
    title: "Choosin' Texas",
    artist: "Ella Langley",
    actualPts: 299600,
    predictedPts: 298359,
    error: 1241,
    errorPct: 0.41,
  },
  {
    rank: 10,
    title: "Folded",
    artist: "Kehlani",
    actualPts: 146717,
    predictedPts: 145703,
    error: 1014,
    errorPct: 0.69,
  },
  {
    rank: 25,
    title: "Body",
    artist: "Don Toliver",
    actualPts: 88931,
    predictedPts: 78840,
    error: 10091,
    errorPct: 11.35,
  },
  {
    rank: 50,
    title: "Porch Light",
    artist: "Noah Kahan",
    actualPts: 55619,
    predictedPts: 46213,
    error: 9406,
    errorPct: 16.91,
  },
  {
    rank: 75,
    title: "DAÑO",
    artist: "Peso Pluma, Tito Double P",
    actualPts: 36298,
    predictedPts: 35573,
    error: 725,
    errorPct: 2.0,
  },
  {
    rank: 100,
    title: "Sweet Boy",
    artist: "Malcolm Todd",
    actualPts: 31079,
    predictedPts: 25328,
    error: 5751,
    errorPct: 18.5,
  },
];

const sectionDivider = (
  <div className="h-px bg-gradient-to-r from-transparent via-surface-200/60 to-transparent" />
);

export default function Home() {
  const [subStreams, setSubStreams] = useState(5000000);
  const [adStreams, setAdStreams] = useState(1500000);
  const [programmedStreams, setProgrammedStreams] = useState(1000000);
  const [airplayAudience, setAirplayAudience] = useState(20000000);
  const [sales, setSales] = useState(500);
  const [targetPosition, setTargetPosition] = useState(10);

  const currentPoints = useMemo(
    () =>
      calculatePoints(
        subStreams,
        adStreams,
        programmedStreams,
        airplayAudience,
        sales
      ),
    [subStreams, adStreams, programmedStreams, airplayAudience, sales]
  );

  const predictedRank = useMemo(() => predictPosition(currentPoints, thresholds), [currentPoints]);

  const targetThreshold = useMemo(() => {
    const pos = Math.min(Math.max(Math.round(targetPosition), 1), 100);
    return Object.entries(thresholds).find(([p]) => parseInt(p) === pos)?.[1] || thresholds[10];
  }, [targetPosition]);

  const pathToTargetData = useMemo(() => {
    return pathToTarget(currentPoints, targetThreshold, {
      subStreams,
      adStreams,
      programmedStreams,
      airplayAudience,
      sales,
    });
  }, [currentPoints, targetThreshold, subStreams, adStreams, programmedStreams, airplayAudience, sales]);

  const historicalData = [
    { week: 'Apr 9', rank10: 146717, rank25: 88931, rank50: 55619, rank75: 36298, rank100: 31079 },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-text-primary font-body">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 border-b border-surface-200/40 bg-bg/80 backdrop-blur-md h-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-6 w-6" />
          </div>
          <span className="font-heading font-bold text-xs md:text-sm tracking-[0.3em] uppercase">Chart Control</span>
        </div>
      </header>

      {/* Hero Section (Full-bleed) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-20 md:py-32"
        style={{
          background: 'radial-gradient(circle at top center, rgba(253, 55, 55, 0.08) 0%, transparent 70%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-8"
          >
            Crowd Control Digital · Hot 100 Reverse Engineer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading font-bold text-[clamp(3rem,12vw,9rem)] leading-[0.9] tracking-wide uppercase mb-6"
          >
            Chart Control
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto mb-12"
          >
            Back-solving the Billboard points formula from live Luminate data
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs text-text-muted tracking-[0.2em]"
          >
            <p>Week Ending Apr 9, 2026 · Published Apr 15 · Data From Luminate · v0.1</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="bg-[#0A0A0A]">
        {/* Section 01: Thresholds */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">01 · Thresholds</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wide leading-[0.95] mt-3 mb-4">
                What It Takes
              </h2>
              <p className="text-lg text-text-secondary">Points needed at each chart position this week</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 10, 25, 50, 75, 100].map((pos) => {
                const pts = thresholds[pos as keyof typeof thresholds];
                const isTopSpot = pos === 1;
                return (
                  <motion.div
                    key={pos}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 group"
                  >
                    <div className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-medium mb-3">
                      #{pos} Position
                    </div>
                    <div className={`text-4xl md:text-5xl font-heading font-bold mb-2 transition-colors duration-300 ${isTopSpot ? 'text-accent' : 'text-text-primary'}`}>
                      {(pts / 1000).toFixed(1)}K
                    </div>
                    <div className="text-xs text-text-muted">points</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 02: Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">02 · Calculator</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wide leading-[0.95] mt-3 mb-4">
                What-If
              </h2>
              <p className="text-lg text-text-secondary">Project a song's chart position from its consumption profile</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Input Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <h3 className="text-lg font-heading font-bold uppercase tracking-[0.15em] text-text-primary mb-8">Inputs</h3>

                <div className="space-y-8">
                  {[
                    {
                      label: 'Premium On-Demand Streams',
                      value: subStreams,
                      onChange: setSubStreams,
                      max: 30000000,
                      step: 100000,
                      divisor: divisors.subscription,
                    },
                    {
                      label: 'Ad-Supported On-Demand Streams',
                      value: adStreams,
                      onChange: setAdStreams,
                      max: 10000000,
                      step: 100000,
                      divisor: divisors.adSupported,
                    },
                    {
                      label: 'Programmed Streams',
                      value: programmedStreams,
                      onChange: setProgrammedStreams,
                      max: 10000000,
                      step: 100000,
                      divisor: divisors.programmed,
                    },
                    {
                      label: 'Airplay Audience',
                      value: airplayAudience,
                      onChange: setAirplayAudience,
                      max: 100000000,
                      step: 1000000,
                      divisor: divisors.airplay,
                    },
                    {
                      label: 'Digital & Physical Sales',
                      value: sales,
                      onChange: setSales,
                      max: 50000,
                      step: 100,
                      divisor: divisors.sales,
                    },
                  ].map((field) => (
                    <div key={field.label}>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-xs font-medium text-text-muted uppercase tracking-[0.2em]">
                          {field.label}
                        </label>
                        <div className="text-xl font-heading font-bold text-accent">
                          {(field.value / 1000000).toFixed(2)}M
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={field.max}
                        step={field.step}
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="w-full h-1 bg-surface-200 rounded-full appearance-none cursor-pointer accent-accent"
                      />
                      <div className="text-[10px] text-text-muted tracking-[0.2em] uppercase mt-2">
                        Divisor ÷{field.divisor}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full bg-surface border border-surface-200/60 rounded-lg py-3 text-sm font-medium text-text-secondary uppercase tracking-[0.2em] transition-all duration-300 hover:bg-surface-100 hover:border-accent/30">
                  Reset to Defaults
                </button>
              </motion.div>

              {/* Output Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 flex flex-col justify-between"
              >
                <h3 className="text-lg font-heading font-bold uppercase tracking-[0.15em] text-text-primary mb-8">Outputs</h3>

                <div className="space-y-6">
                  {/* Total Points */}
                  <div>
                    <div className="text-xs font-medium text-text-muted uppercase tracking-[0.2em] mb-2">Total Points</div>
                    <motion.div
                      key={Math.floor(currentPoints)}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl md:text-6xl font-heading font-bold text-text-primary"
                    >
                      {Math.floor(currentPoints).toLocaleString()}
                    </motion.div>
                  </div>

                  <div className="h-px bg-surface-200/40" />

                  {/* Predicted Position */}
                  <div>
                    <div className="text-xs font-medium text-text-muted uppercase tracking-[0.2em] mb-2">Predicted Position</div>
                    <motion.div
                      key={Math.round(predictedRank)}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl font-heading font-bold text-text-primary"
                    >
                      #{Math.round(predictedRank)}
                    </motion.div>
                  </div>

                  <div className="h-px bg-surface-200/40" />

                  {/* Distance to Thresholds */}
                  <div className="space-y-2">
                    {[10, 25, 50, 75, 100].map((pos) => {
                      const thresh = thresholds[pos as keyof typeof thresholds];
                      const dist = distanceToThreshold(currentPoints, thresh);
                      const isSurplus = dist.includes('+');
                      return (
                        <div key={pos} className="flex items-center justify-between text-xs">
                          <span className="text-text-muted">#{pos}:</span>
                          <span className={isSurplus ? 'text-tier-green font-medium' : 'text-tier-yellow font-medium'}>
                            {dist}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="h-px bg-surface-200/40" />

                  {/* Target Position */}
                  <div>
                    <label className="text-xs font-medium text-text-muted uppercase tracking-[0.2em] mb-2 block">Target Position</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={targetPosition}
                      onChange={(e) => setTargetPosition(Number(e.target.value))}
                      className="w-full bg-surface border border-surface-200/60 rounded-lg px-4 py-2 text-text-primary font-heading font-bold text-lg"
                    />
                    <div className="mt-4 p-3 bg-surface-50/30 rounded-lg space-y-1">
                      <p className="text-xs text-text-muted">Path to #{Math.round(targetPosition)}:</p>
                      <p className="text-xs text-accent font-medium">
                        +{(pathToTargetData.subStreamsNeeded / 1000000).toFixed(2)}M premium
                      </p>
                      <p className="text-xs text-accent font-medium">
                        +{(pathToTargetData.programmedStreamsNeeded / 1000000).toFixed(2)}M programmed
                      </p>
                      <p className="text-xs text-accent font-medium">
                        +{(pathToTargetData.airplayNeeded / 1000000).toFixed(0)}M airplay
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-xs text-text-muted text-center mt-8">
              Divisors from Billboard 2024 methodology, validated against week 1 Luminate data
            </p>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 03: Methodology */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">03 · Methodology</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wide leading-[0.95] mt-3 mb-4">
                The Formula
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-sm font-medium text-text-secondary mb-6">2024 Billboard Hot 100 divisors:</p>
                  <div className="space-y-3 font-body text-text-muted">
                    <p className="text-sm">Premium on-demand streams ÷ 125</p>
                    <p className="text-sm">Ad-supported on-demand streams ÷ 375</p>
                    <p className="text-sm">Programmed streams ÷ 500</p>
                    <p className="text-sm">Airplay audience (impressions) ÷ 800</p>
                    <p className="text-sm">Digital/physical sales ÷ 1</p>
                  </div>
                </div>

                <div className="text-sm text-text-secondary space-y-4">
                  <p>
                    Our Apr 2026 validation shows these divisors reproduce Luminate Song Equivalent values within 0.3–2% for songs with pure on-demand + airplay profiles.
                  </p>
                  <p>
                    Songs with significant programmed stream contribution show 10–20% underestimation when programmed is not captured — we'll refine over the 12-week stress test.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 04: Validation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">04 · Validation</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wide leading-[0.95] mt-3 mb-4">
                Single-Week Audit
              </h2>
              <p className="text-lg text-text-secondary">Predicted vs. actual points at six threshold positions</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-surface-100 border-b border-surface-200/40">
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Rank</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Title</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Artist</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Actual Pts</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Predicted Pts</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {validationSamples.map((row, idx) => {
                      let tierClass = '';
                      let tierColor = '';
                      if (row.errorPct < 2) {
                        tierClass = 'bg-tier-green/15';
                        tierColor = 'text-tier-green';
                      } else if (row.errorPct < 5) {
                        tierClass = 'bg-tier-yellow/15';
                        tierColor = 'text-tier-yellow';
                      } else if (row.errorPct < 10) {
                        tierClass = 'bg-tier-orange/15';
                        tierColor = 'text-tier-orange';
                      } else {
                        tierClass = 'bg-tier-red/15';
                        tierColor = 'text-tier-red';
                      }
                      return (
                        <motion.tr
                          key={row.rank}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="border-b border-surface-200/40 hover:bg-surface-50/50 transition-colors duration-200"
                        >
                          <td className="py-4 px-6">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-accent/20 border border-accent/40 rounded font-heading font-bold text-sm text-accent">
                              #{row.rank}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-text-primary">{row.title}</td>
                          <td className="py-4 px-6 text-sm text-text-secondary">{row.artist}</td>
                          <td className="py-4 px-6 text-sm text-right text-text-secondary">{(row.actualPts / 1000).toFixed(1)}K</td>
                          <td className="py-4 px-6 text-sm text-right text-text-secondary font-heading">{(row.predictedPts / 1000).toFixed(1)}K</td>
                          <td className={`py-4 px-6 text-sm text-right font-semibold ${tierClass} ${tierColor}`}>
                            {row.errorPct.toFixed(2)}%
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-6 md:p-8 border-t border-surface-200/40 bg-surface-50/30">
                <p className="text-xs text-text-muted">
                  10–20% underestimation on #25/#50/#100 tracks due to programmed streams not captured in v0.1 — closing this gap is the Week 2 priority.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 05: Historical Thresholds */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">05 · Trend</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wide leading-[0.95] mt-3 mb-4">
                Thresholds Over Time
              </h2>
              <p className="text-lg text-text-secondary">Weekly point requirements at each chart position</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="h-96 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
                    <XAxis dataKey="week" stroke="#B8B8C0" />
                    <YAxis stroke="#B8B8C0" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #333333',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: '#FAFAFA' }}
                    />
                    <Line type="monotone" dataKey="rank10" stroke="#FD3737" strokeWidth={2} name="#10" />
                    <Line type="monotone" dataKey="rank25" stroke="#E4E4E9" strokeWidth={2} name="#25" />
                    <Line type="monotone" dataKey="rank50" stroke="#B8B8C0" strokeWidth={2} name="#50" />
                    <Line type="monotone" dataKey="rank75" stroke="#909096" strokeWidth={2} name="#75" />
                    <Line type="monotone" dataKey="rank100" stroke="#6B6B72" strokeWidth={2} name="#100" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p className="text-xs text-text-muted">
                Week 1 of 12 · Chart populates as we accumulate weekly data
              </p>
            </motion.div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 06: Hot 100 Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">06 · Chart</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wide leading-[0.95] mt-3 mb-4">
                This Week's Hot 100
              </h2>
              <p className="text-lg text-text-secondary">Week ending Apr 9, 2026</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="max-h-96 overflow-y-auto scrollbar-hide">
                <table className="w-full">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-surface-100 border-b border-surface-200/40">
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Rank</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Title</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Artist</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chartRows.map((row) => {
                      let rankColor = 'text-text-secondary';
                      if (row.rank <= 10) rankColor = 'text-accent font-bold';
                      else if (row.rank <= 25) rankColor = 'text-text-primary font-medium';
                      else if (row.rank <= 75) rankColor = 'text-text-secondary';
                      else rankColor = 'text-text-muted';

                      return (
                        <tr
                          key={row.rank}
                          className="border-b border-surface-200/40 hover:bg-surface-50/50 transition-colors duration-200"
                        >
                          <td className="py-4 px-6">
                            <span className={`text-sm font-heading font-bold ${rankColor}`}>
                              #{row.rank}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-text-primary">{row.title}</td>
                          <td className="py-4 px-6 text-sm text-text-secondary">{row.artist}</td>
                          <td className="py-4 px-6 text-right text-sm font-heading font-bold text-text-primary">
                            {(row.songEquivalent / 1000).toFixed(1)}K
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-200/40 mt-20 py-10 md:py-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-4 w-4" />
            <span className="text-xs font-heading font-bold tracking-[0.2em] uppercase">Chart Control</span>
          </div>
          <p className="text-xs text-text-muted mb-1">Crowd Control Digital · info@crowdcontroldigital.com</p>
          <p className="text-xs text-text-muted">v0.1 · Data from Luminate</p>
        </div>
      </footer>
    </div>
  );
}
