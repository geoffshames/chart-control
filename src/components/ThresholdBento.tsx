'use client';

import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from '@phosphor-icons/react';

const ThresholdBento = () => {
  // Week ending 2026-04-23 vs 2026-04-16
  // prev: #1 339299 #10 141423 #25 105892 #50 61502 #75 44202 #100 32883
  // new:  #1 342362 #10 147795 #25 103985 #50 65728 #75 37677 #100 31309
  const thresholds = [
    { rank: 1, points: 342362, change: 0.9 },
    { rank: 10, points: 147795, change: 4.5 },
    { rank: 25, points: 103985, change: -1.8 },
    { rank: 50, points: 65728, change: 6.9 },
    { rank: 75, points: 37677, change: -14.8 },
    { rank: 100, points: 31309, change: -4.8 },
  ];

  const TileContent = ({ rank, points, change }: (typeof thresholds)[0]) => (
    <div className="flex flex-col justify-between h-full relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-[10px] tracking-[0.2em] uppercase text-[#FD3737] mb-3">
          #{rank}
        </div>
        <div
          className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight"
          style={{ fontFamily: "'N27', sans-serif" }}
        >
          <span className="font-mono">{(points / 1000).toFixed(1)}</span>
        </div>
        <div className="text-[10px] text-[#B8B8C0] tracking-wide uppercase">SEQ Pts</div>
      </div>

      <div className="relative z-10 mt-4">
        <div
          className={`inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded ${
            change >= 0 ? 'bg-[#00E676]/15 text-[#00E676]' : 'bg-[#FF1744]/15 text-[#FF1744]'
          }`}
        >
          {change >= 0 ? (
            <ArrowUp size={10} weight="bold" />
          ) : (
            <ArrowDown size={10} weight="bold" />
          )}
          {Math.abs(change).toFixed(1)}% WoW
        </div>
      </div>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
            01 · THRESHOLDS
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            POINTS TO HOLD POSITION
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            Minimum Song Equivalent points at each chart rank, this week.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:grid-rows-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* #1 - Large tile spanning 5 cols, 2 rows */}
          <motion.div
            variants={tileVariants}
            className="lg:col-span-5 lg:row-span-2 md:col-span-2 p-6 md:p-8 bg-gradient-to-br from-[#1A0F0F] to-[#0E0E0E] border border-[#FD3737]/40 hover:border-[#FD3737]/80 rounded-xl transition-all duration-300 shadow-[inset_0_1px_0_rgba(253,55,55,0.15),0_0_40px_-10px_rgba(253,55,55,0.25)] relative"
            whileHover={{ boxShadow: '0 0 0 1px rgba(253, 55, 55, 0.3)', scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <TileContent {...thresholds[0]} />
          </motion.div>

          {/* #10 - 4 cols, 1 row */}
          <motion.div
            variants={tileVariants}
            className="lg:col-span-4 md:col-span-1 p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/70 hover:border-[#FD3737]/60 rounded-xl transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_0_0_1px_rgba(253,55,55,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] relative"
            whileHover={{ boxShadow: '0 0 0 1px rgba(253, 55, 55, 0.3)', scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <TileContent {...thresholds[1]} />
          </motion.div>

          {/* #25 - 3 cols, 1 row */}
          <motion.div
            variants={tileVariants}
            className="lg:col-span-3 md:col-span-1 p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/70 hover:border-[#FD3737]/60 rounded-xl transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_0_0_1px_rgba(253,55,55,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] relative"
            whileHover={{ boxShadow: '0 0 0 1px rgba(253, 55, 55, 0.3)', scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <TileContent {...thresholds[2]} />
          </motion.div>

          {/* #50 - 4 cols, 1 row */}
          <motion.div
            variants={tileVariants}
            className="lg:col-span-4 md:col-span-1 p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/70 hover:border-[#FD3737]/60 rounded-xl transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_0_0_1px_rgba(253,55,55,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] relative"
            whileHover={{ boxShadow: '0 0 0 1px rgba(253, 55, 55, 0.3)', scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <TileContent {...thresholds[3]} />
          </motion.div>

          {/* #75 - 3 cols, 1 row */}
          <motion.div
            variants={tileVariants}
            className="lg:col-span-3 md:col-span-1 p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/70 hover:border-[#FD3737]/60 rounded-xl transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_0_0_1px_rgba(253,55,55,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] relative"
            whileHover={{ boxShadow: '0 0 0 1px rgba(253, 55, 55, 0.3)', scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <TileContent {...thresholds[4]} />
          </motion.div>

          {/* #100 - 5 cols, 1 row - new row */}
          <motion.div
            variants={tileVariants}
            className="lg:col-span-5 md:col-span-2 p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/70 hover:border-[#FD3737]/60 rounded-xl transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_0_0_1px_rgba(253,55,55,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] relative"
            whileHover={{ boxShadow: '0 0 0 1px rgba(253, 55, 55, 0.3)', scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <TileContent {...thresholds[5]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThresholdBento;
