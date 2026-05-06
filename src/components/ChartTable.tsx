'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { week20260430 } from '@/lib/data/week-2026-04-30';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

const ChartTable = () => {
  const chartRows = week20260430.rows;
  const [showAll, setShowAll] = useState(false);

  const top10 = chartRows.filter((r) => r.rank <= 10);
  const rest = chartRows.filter((r) => r.rank > 10);
  const visibleRest = showAll ? rest : rest.slice(0, 15);

  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-4">
            08 &middot; THE CHART
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight uppercase"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            Billboard Hot 100
            <br className="hidden md:block" />
            <span className="text-[#B8B8C0]"> &middot; Week of Apr 24 &ndash; 30, 2026</span>
          </h2>
          <p className="text-base md:text-lg text-[#E4E4E9] max-w-2xl leading-relaxed">
            All 100 charting songs, ranked by Song Equivalent units. Top 10 featured; remainder expandable.
          </p>
        </motion.div>

        {/* TOP 10 — featured cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-6 font-medium">
            TOP 10
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {top10.map((row, idx) => (
              <motion.div
                key={row.luminateId}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group flex items-center gap-5 md:gap-7 p-5 md:p-6 border border-[#333]/40 rounded-lg bg-[#111] hover:bg-[#161616] hover:border-[#FD3737]/40 transition-all"
              >
                <div
                  className="shrink-0 w-14 md:w-16 text-right font-mono tabular-nums text-4xl md:text-5xl font-bold"
                  style={{ fontFamily: "'N27', sans-serif", color: row.rank === 1 ? '#FD3737' : '#FAFAFA' }}
                >
                  {String(row.rank).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-base md:text-lg font-medium text-[#FAFAFA] truncate tracking-tight">
                    {row.title}
                  </div>
                  <div className="text-sm text-[#B8B8C0] truncate mt-0.5">
                    {row.artist}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-mono tabular-nums text-xl md:text-2xl font-bold text-[#FD3737]">
                    {row.songEquivalent.toLocaleString()}
                  </div>
                  <div className="text-[9px] tracking-[0.25em] uppercase text-[#B8B8C0] mt-0.5 font-medium">
                    PTS
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 11-100 — list with expand */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-baseline justify-between mb-6">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium">
              #11 &ndash; #100
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#B8B8C0] font-mono">
              {showAll ? rest.length : Math.min(15, rest.length)} / {rest.length}
            </div>
          </div>

          <div className="border-t border-[#333]/40">
            {visibleRest.map((row) => (
              <div
                key={row.luminateId}
                className="grid grid-cols-[48px_1fr_auto] md:grid-cols-[60px_1fr_1fr_auto] items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-[#333]/30 hover:bg-[#141414]/60 transition-colors"
              >
                <div className="font-mono tabular-nums text-base md:text-lg text-[#B8B8C0] font-medium">
                  {String(row.rank).padStart(3, '0')}
                </div>
                <div className="text-sm md:text-base font-medium text-[#FAFAFA] truncate tracking-tight">
                  {row.title}
                </div>
                <div className="hidden md:block text-sm text-[#B8B8C0] truncate">
                  {row.artist}
                </div>
                <div className="font-mono tabular-nums text-sm md:text-base text-[#FAFAFA] font-medium text-right whitespace-nowrap">
                  {row.songEquivalent.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {rest.length > 15 && (
            <div className="mt-8 flex justify-center">
              <motion.button
                onClick={() => setShowAll((s) => !s)}
                className="flex items-center gap-3 px-6 py-3 border border-[#333]/60 hover:border-[#FD3737]/40 rounded-sm text-[11px] tracking-[0.2em] uppercase text-[#E4E4E9] font-medium transition-colors"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              >
                {showAll ? (
                  <>
                    SHOW LESS
                    <CaretUp size={12} weight="bold" />
                  </>
                ) : (
                  <>
                    SHOW ALL {rest.length}
                    <CaretDown size={12} weight="bold" />
                  </>
                )}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ChartTable;
