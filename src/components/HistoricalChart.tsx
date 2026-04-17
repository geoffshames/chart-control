'use client';

import { motion } from 'framer-motion';
import { Clock } from '@phosphor-icons/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HistoricalChart = () => {
  const chartData = [
    { week: 1, rank1: 299600, rank10: 146717, rank25: 88931, rank50: 55619 },
  ];

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
            05 · HISTORICAL
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            THRESHOLD DRIFT
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            Point thresholds accumulate weekly as the 12-week stress test progresses.
          </p>
        </motion.div>

        {/* Empty State */}
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
              01 <span className="text-[#B8B8C0]">/</span> 12
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium mt-1">
              WEEKS COLLECTED
            </div>
            <div className="mt-4 w-full h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
              <div className="h-full bg-[#FD3737]" style={{ width: '8.33%' }} />
            </div>
          </div>

          <div className="p-6 md:p-10 bg-[#141414] border border-[#333]/50 rounded">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(51, 51, 51, 0.3)"
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  stroke="#B8B8C0"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#B8B8C0"
                  style={{ fontSize: '12px' }}
                  domain={[0, 300000]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #333333',
                    borderRadius: '4px',
                  }}
                  labelStyle={{ color: '#B8B8C0' }}
                  formatter={(value: any) => value.toLocaleString()}
                />
                <Line
                  type="monotone"
                  dataKey="rank1"
                  stroke="#FD3737"
                  strokeWidth={2}
                  dot={{ fill: '#FD3737', r: 5 }}
                  name="Rank #1"
                  isAnimationActive
                />
                <Line
                  type="monotone"
                  dataKey="rank10"
                  stroke="#FD3737"
                  strokeOpacity={0.6}
                  strokeWidth={2}
                  dot={{ fill: '#FD3737', r: 5, opacity: 0.6 }}
                  name="Rank #10"
                  isAnimationActive
                />
                <Line
                  type="monotone"
                  dataKey="rank25"
                  stroke="#FD3737"
                  strokeOpacity={0.3}
                  strokeWidth={2}
                  dot={{ fill: '#FD3737', r: 5, opacity: 0.3 }}
                  name="Rank #25"
                  isAnimationActive
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Next Collection Info */}
        <motion.div
          className="mt-8 flex items-center gap-3 text-sm text-[#B8B8C0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Clock size={16} weight="bold" />
          <span className="font-mono">Next collection: Tuesday, Apr 21, 2026</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoricalChart;
