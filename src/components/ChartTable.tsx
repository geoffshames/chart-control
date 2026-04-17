'use client';

import { motion } from 'framer-motion';
import { week20260409 } from '@/lib/data/week-2026-04-09';

const ChartTable = () => {
  const chartRows = week20260409.rows;

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
            06 · CHART
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            HOT 100 · WEEK OF APR 3–9, 2026
          </h2>
        </motion.div>

        <motion.div
          className="overflow-x-auto max-h-[600px] overflow-y-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full">
            <thead className="sticky top-0 bg-[#0A0A0A]">
              <tr className="border-b border-[#333]/30">
                <th className="px-4 py-3 text-left text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium">
                  Artist
                </th>
                <th className="px-4 py-3 text-right text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {chartRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#333]/30 ${
                    row.rank <= 10 ? 'border-l-2 border-l-[#FD3737]' : ''
                  } hover:bg-[#141414]/50 transition-colors`}
                >
                  <td
                    className={`px-4 py-3 font-mono text-sm ${
                      row.rank <= 10 ? 'text-[#FD3737] font-bold' : 'text-[#B8B8C0]'
                    }`}
                  >
                    {row.rank}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#FAFAFA] font-medium">
                    {row.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#B8B8C0]">
                    {row.artist}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-sm text-[#FD3737] font-bold tabular-nums">
                    {row.songEquivalent.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ChartTable;
