'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock } from '@phosphor-icons/react';
import { divisors, calibrationMeta } from '@/lib/calculator';

const Methodology = () => {
  const rows = [
    {
      source: 'PREMIUM ON-DEMAND',
      divisor: divisors.premium,
      prior: calibrationMeta.priorDivisors.premium,
      description:
        'Subscription on-demand streams — Spotify Premium, Apple Music, Amazon, Tidal',
      status: 'calibrated',
    },
    {
      source: 'AD-SUPPORTED ON-DEMAND',
      divisor: divisors.adSupported,
      prior: calibrationMeta.priorDivisors.adSupported,
      description:
        'Ad-supported on-demand streams (Spotify Free, etc.). YouTube excluded since Jan 16, 2026',
      status: 'calibrated',
    },
    {
      source: 'PROGRAMMED STREAMS',
      divisor: divisors.programmed,
      prior: calibrationMeta.priorDivisors.programmed,
      description:
        'Non-interactive radio-style streams (Pandora, iHeart programmed, SiriusXM streaming)',
      status: 'prior',
    },
    {
      source: 'AIRPLAY AUDIENCE',
      divisor: divisors.airplay,
      prior: calibrationMeta.priorDivisors.airplay,
      description:
        'Radio airplay audience impressions from Hot 100 Panel stations (Mediabase via Luminate)',
      status: 'calibrated',
    },
    {
      source: 'DIGITAL + PHYSICAL SALES',
      divisor: divisors.sales,
      prior: calibrationMeta.priorDivisors.sales,
      description:
        'Paid downloads and physical singles (CD, vinyl). One unit = one point.',
      status: 'locked',
    },
  ];

  const lastCalibrated = new Date(calibrationMeta.generatedAt).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  );

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
            03 &middot; METHODOLOGY
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight uppercase"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            The Formula
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            Luminate&apos;s Song Equivalent, reverse-engineered from{' '}
            <span className="text-[#FAFAFA] font-medium">
              {calibrationMeta.weeksLoaded} weeks
            </span>{' '}
            of chart data and{' '}
            <span className="text-[#FAFAFA] font-medium">
              {calibrationMeta.totalDrillinSamples} consumption drill-ins
            </span>
            . Re-fit every week as new data lands.
          </p>

          {/* Calibration badge row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-wide">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#FD3737]/10 text-[#FD3737] uppercase font-semibold">
              MODEL v{calibrationMeta.weeksLoaded}
            </span>
            <span className="inline-flex items-center gap-2 text-[#B8B8C0]">
              <Clock size={11} weight="bold" />
              Last calibrated {lastCalibrated}
            </span>
            <span className="inline-flex items-center gap-2 text-[#B8B8C0]">
              In-sample MAPE{' '}
              <span className="text-[#FAFAFA] font-semibold">
                {calibrationMeta.inSampleMAPE ?? 'n/a'}%
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-[#B8B8C0]">
              Confidence{' '}
              <span className="text-[#FAFAFA] font-semibold">
                {calibrationMeta.confidencePct}%
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="divide-y divide-[#333]/40 border-t border-b border-[#333]/40"
        >
          {rows.map((row, idx) => {
            const diff = row.divisor - row.prior;
            const diffPct = row.prior > 0 ? (diff / row.prior) * 100 : 0;
            const hasDrift = Math.abs(diffPct) >= 0.5;
            return (
              <motion.div
                key={row.source}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="grid grid-cols-[1.2fr_auto_2fr_auto] md:grid-cols-[1.3fr_110px_2.5fr_auto] gap-4 md:gap-8 items-center py-6 md:py-7"
              >
                <div className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium">
                  {row.source}
                </div>
                <div
                  className="text-2xl md:text-3xl font-bold font-mono tabular-nums text-[#FD3737]"
                  style={{ fontFamily: "'N27', sans-serif" }}
                >
                  &divide; {row.divisor.toFixed(row.divisor < 10 ? 0 : 1).replace(/\.0$/, '')}
                </div>
                <div className="text-sm text-[#E4E4E9] leading-snug">
                  {row.description}
                  {hasDrift && (
                    <span className="block text-[10px] text-[#B8B8C0] mt-1 font-mono">
                      {diffPct > 0 ? '+' : ''}
                      {diffPct.toFixed(1)}% vs 2024 prior (÷{row.prior.toFixed(0)})
                    </span>
                  )}
                </div>
                <div className="justify-self-end">
                  {row.status === 'calibrated' && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded bg-[#00E676]/15 text-[#00E676]">
                      <CheckCircle size={11} weight="bold" />
                      Calibrated
                    </span>
                  )}
                  {row.status === 'prior' && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded bg-[#FFD600]/15 text-[#FFD600]">
                      Needs Data
                    </span>
                  )}
                  {row.status === 'locked' && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded bg-[#B8B8C0]/15 text-[#B8B8C0]">
                      Locked
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-8 md:p-10 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/60 rounded-xl"
        >
          <p className="text-[15px] md:text-base text-[#E4E4E9] leading-relaxed">
            <span className="text-[#FD3737] font-medium">The model learns every week.</span>{' '}
            New drill-ins trigger a refit; divisors drift toward their true
            values as sample size grows. Sales is locked at &divide;1. Programmed
            will move off the 2024 prior once we capture per-song Service Type
            breakdowns starting next chart week.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
