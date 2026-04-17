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
      <header className="border-b border-surface-200/40 bg-[#0A0A0A]/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="w-8 h-8" />
            <span className="font-heading font-bold text-sm tracking-wide uppercase">CHART CONTROL</span>
          </div>
          <div className="text-xs text-text-muted">
            Week ending Apr 9, 2026 · Published Apr 15
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 uppercase tracking-wide">CHART CONTROL</h1>
            <p className="text-xl text-text-secondary mb-12">
              Hot 100 Reverse Engineer
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 md:grid-cols-6">
              {[
                { label: '#1', value: 299600 },
                { label: '#10', value: 146717 },
                { label: '#25', value: 88931 },
                { label: '#50', value: 55619 },
                { label: '#75', value: 36298 },
                { label: '#100', value: 31079 },
              ].map((t) => (
                <div key={t.label} className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-6 hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300">
                  <div className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-medium mb-2">{t.label}</div>
                  <div className="text-xl md:text-2xl font-heading font-bold text-text-primary">
                    {(t.value / 1000).toFixed(1)}K
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-muted">
              Source: Luminate Billboard Hot 100 chart
            </p>
          </motion.section>

          {/* What-If Calculator */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 uppercase tracking-[0.15em]">What-If Calculator</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                {[
                  {
                    label: 'Premium On-Demand Streams',
                    value: subStreams,
                    onChange: setSubStreams,
                    max: 30000000,
                    step: 100000,
                  },
                  {
                    label: 'Ad-Supported On-Demand Streams',
                    value: adStreams,
                    onChange: setAdStreams,
                    max: 10000000,
                    step: 100000,
                  },
                  {
                    label: 'Programmed Streams (÷500)',
                    value: programmedStreams,
                    onChange: setProgrammedStreams,
                    max: 10000000,
                    step: 100000,
                  },
                  {
                    label: 'Airplay Audience (impressions)',
                    value: airplayAudience,
                    onChange: setAirplayAudience,
                    max: 100000000,
                    step: 1000000,
                  },
                  {
                    label: 'Digital/Physical Sales',
                    value: sales,
                    onChange: setSales,
                    max: 50000,
                    step: 100,
                  },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-medium text-text-muted mb-2">
                      {field.label}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={field.max}
                      step={field.step}
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-sm text-text-muted mt-1">
                      {(field.value / 1000000).toFixed(2)}M
                    </div>
                  </div>
                ))}
              </div>

              {/* Outputs */}
              <div className="space-y-4">
                <div className="bg-surface border border-surface-200/60 rounded-xl p-6">
                  <div className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-medium mb-3">Total Points</div>
                  <div className="text-5xl md:text-6xl font-heading font-bold text-text-primary">
                    {Math.floor(currentPoints).toLocaleString()}
                  </div>
                </div>

                <div className="bg-surface border border-surface-200/60 rounded-xl p-6">
                  <div className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-medium mb-3">Predicted Position</div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-text-primary">#{Math.round(predictedRank)}</div>
                </div>

                <div className="space-y-2">
                  {[10, 25, 50, 75, 100].map((pos) => {
                    const thresh = thresholds[pos as keyof typeof thresholds];
                    const dist = distanceToThreshold(currentPoints, thresh);
                    return (
                      <div key={pos} className="bg-surface border border-surface-200/60 rounded-lg p-3 text-sm">
                        <span className="text-text-secondary">#{pos}: </span>
                        <span className={dist.includes('+') ? 'text-tier-green' : 'text-tier-yellow'}>
                          {dist}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Path to Target */}
                <div className="mt-6 pt-6 border-t border-surface-200/60">
                  <div className="mb-3">
                    <label className="text-sm text-text-muted">Target Position:</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={targetPosition}
                      onChange={(e) => setTargetPosition(Number(e.target.value))}
                      className="w-full bg-surface border border-surface-200/60 rounded px-3 py-2 mt-1 text-text-primary"
                    />
                  </div>
                  <div className="text-xs text-text-muted space-y-1">
                    <p>Smallest increase to reach #{Math.round(targetPosition)}:</p>
                    <p className="text-accent">
                      +{(pathToTargetData.subStreamsNeeded / 1000000).toFixed(2)}M premium OR
                    </p>
                    <p className="text-accent">
                      +{(pathToTargetData.programmedStreamsNeeded / 1000000).toFixed(2)}M programmed OR
                    </p>
                    <p className="text-accent">
                      +{(pathToTargetData.airplayNeeded / 1000000).toFixed(0)}M airplay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Methodology */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 uppercase tracking-[0.15em]">Methodology & Divisors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-text-secondary font-medium">2024 Billboard Hot 100 divisors:</p>
                <ul className="text-sm space-y-2 text-text-muted">
                  <li>Premium on-demand streams ÷ 125</li>
                  <li>Ad-supported on-demand streams ÷ 375</li>
                  <li>Programmed streams ÷ 500</li>
                  <li>Airplay audience (impressions) ÷ 800</li>
                  <li>Digital/physical sales ÷ 1</li>
                </ul>
              </div>
              <div className="text-sm text-text-muted">
                <p className="mb-2">
                  Our Apr 2026 validation shows these divisors reproduce Luminate Song Equivalent values
                  within 0.3–2% for songs with pure on-demand + airplay profiles.
                </p>
                <p>
                  Songs with significant programmed stream contribution show 10–20% underestimation
                  when programmed is not captured — we'll refine over the 12-week stress test.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Validation Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 overflow-x-auto hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 uppercase tracking-[0.15em]">Validation Results (6-Sample Audit)</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-200/60">
                  <th className="text-left py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Rank</th>
                  <th className="text-left py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Title</th>
                  <th className="text-left py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Artist</th>
                  <th className="text-right py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Actual Pts</th>
                  <th className="text-right py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Predicted Pts</th>
                  <th className="text-right py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {validationSamples.map((row) => {
                  let tierClass = '';
                  let tierColor = '';
                  if (row.errorPct < 2) {
                    tierClass = 'bg-tier-green/20';
                    tierColor = 'text-tier-green';
                  } else if (row.errorPct < 5) {
                    tierClass = 'bg-tier-yellow/20';
                    tierColor = 'text-tier-yellow';
                  } else if (row.errorPct < 10) {
                    tierClass = 'bg-tier-orange/20';
                    tierColor = 'text-tier-orange';
                  } else {
                    tierClass = 'bg-tier-red/20';
                    tierColor = 'text-tier-red';
                  }
                  return (
                    <tr key={row.rank} className="border-b border-surface-200/40 hover:bg-surface-100/30">
                      <td className="py-3 px-2 text-accent font-semibold">#{row.rank}</td>
                      <td className="py-3 px-2 text-text-primary font-medium">{row.title}</td>
                      <td className="py-3 px-2 text-text-secondary">{row.artist}</td>
                      <td className="py-3 px-2 text-right text-text-secondary">{(row.actualPts / 1000).toFixed(1)}K</td>
                      <td className="py-3 px-2 text-right text-text-secondary">{(row.predictedPts / 1000).toFixed(1)}K</td>
                      <td className={`py-3 px-2 text-right font-semibold ${tierClass} ${tierColor} rounded px-2`}>
                        {row.errorPct.toFixed(2)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.section>

          {/* Historical Thresholds */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 uppercase tracking-[0.15em]">Historical Thresholds</h2>
            <div className="bg-surface rounded-lg p-6 mb-6 h-64 flex items-center justify-center">
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
                  <Line
                    type="monotone"
                    dataKey="rank10"
                    stroke="#FD3737"
                    strokeWidth={2}
                    name="#10"
                  />
                  <Line
                    type="monotone"
                    dataKey="rank25"
                    stroke="#E4E4E9"
                    strokeWidth={2}
                    name="#25"
                  />
                  <Line
                    type="monotone"
                    dataKey="rank50"
                    stroke="#B8B8C0"
                    strokeWidth={2}
                    name="#50"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-text-muted">
              Historical threshold data accumulates weekly. First full 12-week stress test will populate
              this view. Data points so far: 1 week (2026-04-09).
            </p>
          </motion.section>

          {/* Full Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 overflow-x-auto hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 uppercase tracking-[0.15em]">Hot 100 Chart (Week of Apr 9)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-200/60">
                    <th className="text-left py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Rank</th>
                    <th className="text-left py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Title</th>
                    <th className="text-left py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Artist</th>
                    <th className="text-right py-3 px-2 text-text-muted font-semibold text-[10px] uppercase tracking-[0.25em]">Song Equivalent Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {chartRows.map((row) => (
                    <tr key={row.rank} className="border-b border-surface-200/40 hover:bg-surface-100/30">
                      <td className="py-3 px-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-surface rounded font-heading font-bold text-sm">
                          {row.rank}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-text-primary font-medium">{row.title}</td>
                      <td className="py-3 px-2 text-text-secondary">{row.artist}</td>
                      <td className="py-3 px-2 text-right font-semibold text-accent">
                        {(row.songEquivalent / 1000).toFixed(1)}K
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-200/40 mt-20 py-8 text-center text-xs text-text-muted">
        <p className="font-heading font-bold uppercase mb-1">CHART CONTROL v0.1</p>
        <p>Crowd Control Digital · info@crowdcontroldigital.com</p>
        <p className="mt-2">Data source: Luminate · Formula: 2024 Billboard Hot 100 divisors</p>
      </footer>
    </div>
  );
}
