'use client';

import { motion } from 'framer-motion';
import { Clock } from '@phosphor-icons/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { thresholdHistory, calibrationMeta } from '@/lib/calculator';

const HistoricalChart = () => {
  const chartData = thresholdHistory.map((w) => {
    const t = w.thresholds ?? {};
    return {
      week: w.weekEnding?.slice(5),
      full: w.weekEnding,
      rank1: Number(t['1']) || 0,
      rank10: Number(t['10']) || 0,
      rank25: Number(t['25']) || 0,
      rank50: Number(t['50']) || 0,
      rank75: Number(t['75']) || 0,
      rank100: Number(t['100']) || 0,
    };
  });

  const nWeeks = chartData.length;
  // Denominator grows with the dataset so the counter reads as N/N and the bar stays full
  const progressPct = 100;

  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-4">
            05 &middot; HISTORICAL
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight uppercase"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            Threshold Drift
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            How the points required at each rank shift week to week. Spikes mark big release weeks; valleys mark softer chart weeks worth targeting.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-start gap-3 min-w-0">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium">
              PROGRESS
            </div>
            <div
              className="text-5xl md:text-6xl font-bold text-[#FD3737] font-mono leading-none tabular-nums whitespace-nowrap"
              style={{ fontFamily: "'N27', sans-serif" }}
            >
              {String(nWeeks).padStart(2, '0')}{' '}
              <span className="text-[#B8B8C0]">/</span> {String(nWeeks).padStart(2, '0')}
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium mt-1">
              WEEKS COLLECTED
            </div>
            <div className="mt-4 w-full h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FD3737] transition-all duration-500"
                style={{ width: progressPct + '%' }}
              />
            </div>
            <div className="mt-2 text-[10px] text-[#B8B8C0] font-mono tracking-wide">
              {calibrationMeta.totalDrillinSamples} drill-ins logged &middot;{' '}
              {calibrationMeta.confidencePct}% model confidence
            </div>
          </div>

          <div className="p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/60 rounded-xl">
            <ResponsiveContainer width="100%" height={340}>
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="2 4"
                  stroke="rgba(51, 51, 51, 0.5)"
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  stroke="#B8B8C0"
                  style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.08em' }}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(51,51,51,0.5)' }}
                />
                <YAxis
                  stroke="#B8B8C0"
                  style={{ fontSize: '10px', fontFamily: 'monospace' }}
                  tickFormatter={(v: number) => (v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v.toString())}
                  tickLine={false}
                  axisLine={false}
                  width={50}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#141414',
                    border: '1px solid #333',
                    borderRadius: 6,
                    fontSize: 11,
                    fontFamily: 'monospace',
                  }}
                  labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
                  itemStyle={{ color: '#E4E4E9' }}
                  formatter={(v: unknown) => (typeof v === "number" ? v.toLocaleString() : String(v)) + " pts"}
                />
                <Legend
                  wrapperStyle={{
                    fontSize: 10,
                    fontFamily: 'monospace',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    paddingTop: 12,
                  }}
                  iconType="line"
                />
                <Line type="monotone" dataKey="rank1"   name="#1"   stroke="#FD3737" strokeWidth={2}   dot={{ r: 3, fill: '#FD3737' }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="rank10"  name="#10"  stroke="#FFD600" strokeWidth={1.5} dot={{ r: 2, fill: '#FFD600' }} />
                <Line type="monotone" dataKey="rank25"  name="#25"  stroke="#FF9100" strokeWidth={1.5} dot={{ r: 2, fill: '#FF9100' }} />
                <Line type="monotone" dataKey="rank50"  name="#50"  stroke="#00E676" strokeWidth={1.5} dot={{ r: 2, fill: '#00E676' }} />
                <Line type="monotone" dataKey="rank75"  name="#75"  stroke="#E4E4E9" strokeWidth={1}   strokeDasharray="3 3" dot={{ r: 1.5, fill: '#E4E4E9' }} />
                <Line type="monotone" dataKey="rank100" name="#100" stroke="#B8B8C0" strokeWidth={1}   strokeDasharray="3 3" dot={{ r: 1.5, fill: '#B8B8C0' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center gap-3 text-[11px] font-mono tracking-wide text-[#B8B8C0]"
        >
          <Clock size={12} weight="bold" />
          <span>
            Next collection: Tuesday after Billboard publish &middot; dataset re-calibrates divisors automatically
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoricalChart;
