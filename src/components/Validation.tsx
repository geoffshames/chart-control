'use client';

import { motion } from 'framer-motion';

const Validation = () => {
  // Week ending 2026-04-16 — predictions use currently-calibrated divisors
  // (premium 107.1, ad-supp 354.17, programmed 700, airplay 875.52, sales 1)
  const samples = [
    {
      rank: 1,
      title: "Choosin' Texas",
      artist: 'Ella Langley',
      actualPts: 339299,
      predictedPts: 363085,
      errorPct: 7.01,
    },
    {
      rank: 10,
      title: 'SWIM',
      artist: 'BTS',
      actualPts: 141423,
      predictedPts: 138755,
      errorPct: 1.89,
    },
    {
      rank: 25,
      title: 'HOMEWRECKER',
      artist: 'SOMBR',
      actualPts: 105892,
      predictedPts: 108245,
      errorPct: 2.22,
    },
    {
      rank: 50,
      title: 'RUNWAY',
      artist: 'Lady Gaga, Doechii',
      actualPts: 61502,
      predictedPts: 59361,
      errorPct: 3.48,
    },
    {
      rank: 75,
      title: "SOMETHIN' SIMPLE",
      artist: 'ELLA LANGLEY',
      actualPts: 44202,
      predictedPts: 42556,
      errorPct: 3.72,
    },
    {
      rank: 100,
      title: 'WOMAN',
      artist: 'Kane Brown',
      actualPts: 32883,
      predictedPts: 43029,
      errorPct: 30.85,
    },
  ];

  const getTierColor = (errorPct: number) => {
    if (errorPct < 2) return { bg: 'bg-[#00E676]/15', text: 'text-[#00E676]' };
    if (errorPct < 5) return { bg: 'bg-[#FFD600]/15', text: 'text-[#FFD600]' };
    if (errorPct < 10) return { bg: 'bg-[#FF9100]/15', text: 'text-[#FF9100]' };
    return { bg: 'bg-[#FF1744]/15', text: 'text-[#FF1744]' };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
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
            04 · VALIDATION
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            THIS WEEK'S AUDIT
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            Predicted vs actual Song Equivalent across six threshold positions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {samples.map((sample) => {
            const tierColor = getTierColor(sample.errorPct);

            return (
              <motion.div
                key={sample.rank}
                variants={cardVariants}
                className="p-6 md:p-8 bg-[#141414] border border-[#333]/50 rounded"
                whileHover={{ boxShadow: '0 0 0 1px rgba(253, 55, 55, 0.3)', scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-medium text-[#FAFAFA] mb-1">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-[#B8B8C0]">{sample.artist}</p>
                  </div>
                  <span className="inline-block text-xs font-mono font-bold px-3 py-1 rounded bg-[#FD3737]/15 text-[#FD3737]">
                    #{sample.rank}
                  </span>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-[#333]/30">
                  <div className="flex justify-between text-xs font-mono text-[#B8B8C0]">
                    <span>ACTUAL</span>
                    <span className="text-[#FAFAFA]">{sample.actualPts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-[#B8B8C0]">
                    <span>PREDICTED</span>
                    <span className="text-[#FAFAFA]">{sample.predictedPts.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#B8B8C0]">ERROR</span>
                  <span
                    className={`text-xs font-mono font-bold px-3 py-1 rounded ${tierColor.bg} ${tierColor.text}`}
                  >
                    {sample.errorPct.toFixed(2)}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Validation;
