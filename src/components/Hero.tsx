'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = ({ onCalculatorClick }: { onCalculatorClick: () => void }) => {
  return (
    <section
      className="min-h-[100dvh] w-full px-6 md:px-10 py-16 md:py-24 flex items-center"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0]">
              CROWD CONTROL DIGITAL · CHART INTELLIGENCE
            </div>

            <h1
              className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight uppercase"
              style={{ fontFamily: "'N27', sans-serif" }}
            >
              CHART<br />CONTROL
            </h1>

            <p className="text-xl md:text-2xl text-[#E4E4E9] font-light">
              the hot 100, reverse-engineered.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                <span className="text-xs font-mono text-[#B8B8C0]">LIVE</span>
              </div>
              <span className="text-xs font-mono text-[#B8B8C0]">
                Week of Apr 3–9, 2026
              </span>
            </div>

            <motion.button
              onClick={onCalculatorClick}
              className="mt-6 px-8 py-4 bg-[#FD3737] text-white font-medium tracking-tight w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              Open Calculator
            </motion.button>
          </div>

          {/* Right: Hero Visual */}
          <motion.div
            className="relative"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <div
              className="p-8 rounded-lg border border-[#333]/50"
              style={{
                background: 'linear-gradient(135deg, #141414 0%, #141414 85%, rgba(253, 55, 55, 0.08) 100%)',
              }}
            >
              <div className="text-sm text-[#B8B8C0] mb-6">
                <span className="text-[10px] tracking-[0.2em] uppercase">This week: #1</span>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-[#FAFAFA]">Choosin' Texas</h3>
                <p className="text-sm text-[#B8B8C0]">Ella Langley</p>
              </div>

              <div className="mb-8">
                <div
                  className="text-5xl font-bold tracking-tight"
                  style={{ fontFamily: "'N27', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                  <span className="font-mono">299.6K</span>
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] mt-2">Points</div>
              </div>

              {/* Composition Bar */}
              <div className="relative h-16 bg-[#1A1A1A] rounded overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FD3737] to-transparent opacity-30"
                  animate={{ x: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '30%' }}
                />

                <div className="flex h-full items-center relative z-10 divide-x divide-[#333]/50">
                  <div className="flex-1 px-4 flex flex-col justify-center">
                    <div className="text-[10px] text-[#B8B8C0] tracking-wide uppercase">Premium</div>
                    <div className="font-mono text-sm text-[#FD3737] font-bold">180.2K</div>
                  </div>
                  <div className="flex-1 px-4 flex flex-col justify-center">
                    <div className="text-[10px] text-[#B8B8C0] tracking-wide uppercase">Ad-Supp</div>
                    <div className="font-mono text-sm text-[#FD3737] opacity-60 font-bold">71.8K</div>
                  </div>
                  <div className="flex-1 px-4 flex flex-col justify-center">
                    <div className="text-[10px] text-[#B8B8C0] tracking-wide uppercase">Airplay</div>
                    <div className="font-mono text-sm text-[#FD3737] opacity-30 font-bold">37.2K</div>
                  </div>
                  <div className="flex-1 px-4 flex flex-col justify-center">
                    <div className="text-[10px] text-[#B8B8C0] tracking-wide uppercase">Sales</div>
                    <div className="font-mono text-sm text-[#FD3737] opacity-10 font-bold">10.4K</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
