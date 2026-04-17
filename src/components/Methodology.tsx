'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from '@phosphor-icons/react';

const Methodology = () => {
  const divisors = [
    {
      source: 'PREMIUM ON-DEMAND',
      divisor: 125,
      description: 'Subscription streams from Spotify, Apple Music, Amazon Music',
      status: 'validated',
    },
    {
      source: 'AD-SUPPORTED STREAMS',
      divisor: 425,
      description: 'YouTube, Spotify Free, and other ad-supported platforms',
      status: 'validated',
    },
    {
      source: 'PROGRAMMED RADIO',
      divisor: 1050,
      description: 'Estimated radio spins extrapolated to audience equivalents',
      status: 'phase-2',
    },
    {
      source: 'AIRPLAY AUDIENCE',
      divisor: 1500,
      description: 'Radio listener reach, normalized from Nielsen data proxies',
      status: 'validated',
    },
    {
      source: 'PHYSICAL + DIGITAL SALES',
      divisor: 10,
      description: 'Vinyl, CD, digital downloads (Apple, Amazon, Bandcamp)',
      status: 'validated',
    },
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
            03 · METHODOLOGY
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            THE FORMULA
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            Luminate's Song Equivalent, reverse-engineered from 6 threshold positions this week.
          </p>
        </motion.div>

        <motion.div
          className="space-y-px"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {divisors.map((row, idx) => (
            <motion.div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 py-4 px-4 border-b border-[#333]/30 items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="text-sm font-medium text-[#FAFAFA] md:col-span-1">
                {row.source}
              </div>
              <div className="text-2xl font-bold font-mono text-[#FD3737]">
                ÷ {row.divisor.toLocaleString()}
              </div>
              <div className="text-sm text-[#B8B8C0] md:col-span-1">
                {row.description}
              </div>
              <div className="flex justify-end">
                {row.status === 'validated' ? (
                  <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded bg-[#00E676]/15 text-[#00E676]">
                    <CheckCircle size={12} weight="bold" />
                    Validated
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded bg-[#FFD600]/15 text-[#FFD600]">
                    Phase 2
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-6 md:p-8 bg-[#141414] border border-[#333]/50 rounded"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm md:text-base text-[#E4E4E9] leading-relaxed">
            Formula reproduces Luminate Song Equivalent within{' '}
            <span className="text-[#FD3737] font-bold">0.3–2%</span> for pure on-demand + airplay
            songs. <span className="text-[#FFD600]">10–20% under</span> for programmed-heavy tracks —
            resolved next week with per-song programmed capture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
