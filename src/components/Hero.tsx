'use client';

import { motion } from 'framer-motion';

const Hero = ({ onCalculatorClick }: { onCalculatorClick: () => void }) => {
  // drop dead #1 composition — week 2026-04-23, calibrated divisors
  // Premium:    27,423,003 / 106.05 = 258,587 (77.9%)
  // Airplay:    26,687,400 / 875.52 = 30,481  (9.2%)
  // Ad-Supp + Programmed combined:    11,324 + 975 = 12,299 (3.7%)
  // Sales:      30,613 (9.2%)
  // Segments scaled so they sum to actual 342,362 pts
  const composition = [
    { label: 'PREMIUM', pts: 266672, share: 77.9, color: '#FD3737' },
    { label: 'AIRPLAY', pts: 31434, share: 9.2, color: '#FD6B6B' },
    { label: 'SALES', pts: 31571, share: 9.2, color: '#FFC4C4' },
    { label: 'AD-SUPP', pts: 12685, share: 3.7, color: '#FF9797' },
  ];

  return (
    <section
      className="min-h-[100dvh] w-full px-6 md:px-10 py-16 md:py-24 flex items-center"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Left: Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Wordmark only — inline style to bypass Tailwind scanner */}
            <img
              src="/brand/CC-LOGO-2024-WHITE.png"
              alt="Crowd Control Digital"
              width={172}
              height={24}
              style={{ height: '24px', width: '172px', display: 'block' }}
            />

            <h1
              className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight uppercase font-bold"
              style={{ fontFamily: "'N27', sans-serif" }}
            >
              CHART
              <br />
              CONTROL
            </h1>

            <p className="text-xl md:text-2xl tracking-[0.05em] uppercase text-[#E4E4E9] font-medium leading-tight">
              THE HOT 100,
              <br className="md:hidden" />
              <span className="text-[#FD3737]"><span className="hidden md:inline">&nbsp;</span>REVERSE-ENGINEERED.</span>
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#E4E4E9] font-medium">LIVE</span>
              </div>
              <span className="h-3 w-px bg-[#333]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#B8B8C0]">
                WEEK OF APR 17 &ndash; 23, 2026
              </span>
              <span className="h-3 w-px bg-[#333]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#B8B8C0]">
                PUBLISHED APR 28
              </span>
            </div>

            <motion.button
              onClick={onCalculatorClick}
              className="mt-4 px-8 py-4 bg-[#FD3737] text-white font-medium tracking-[0.15em] uppercase text-sm w-fit rounded-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              OPEN CALCULATOR
            </motion.button>
          </div>

          {/* Right: #1 composition */}
          <motion.div
            className="relative w-full"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="p-8 md:p-10 rounded-xl border border-[#333]/60 bg-[#111]">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-3 font-medium">
                    THIS WEEK &middot; #1
                  </div>
                  <h3 className="text-2xl font-medium text-[#FAFAFA] leading-tight tracking-tight">
                    drop dead
                  </h3>
                  <p className="text-sm text-[#B8B8C0] mt-1">Olivia Rodrigo &middot; Geffen</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-[9px] tracking-[0.25em] uppercase text-[#B8B8C0] mb-1">PEAK</div>
                  <div className="font-mono text-sm text-[#FAFAFA] tabular-nums">#1 &middot; DEBUT</div>
                </div>
              </div>

              <div className="mb-10">
                <div
                  className="font-bold tracking-tight text-[#FAFAFA] font-mono tabular-nums"
                  style={{ fontFamily: "'N27', sans-serif", fontSize: 'clamp(3.25rem, 6vw, 5rem)', lineHeight: 0.95 }}
                >
                  342,362
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mt-2 font-medium">
                  SONG EQUIVALENT POINTS
                </div>
              </div>

              {/* Composition — NO ANIMATION, LEGIBLE */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#B8B8C0] font-medium">
                    POINT COMPOSITION
                  </div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#B8B8C0] font-mono">
                    100%
                  </div>
                </div>

                <div className="flex h-3 w-full rounded-full overflow-hidden bg-[#1A1A1A] mb-8">
                  {composition.map((seg) => (
                    <div
                      key={seg.label}
                      className="h-full"
                      style={{ width: seg.share + '%', backgroundColor: seg.color }}
                      title={seg.label + ': ' + seg.pts.toLocaleString() + ' pts (' + seg.share + '%)'}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {composition.map((seg) => (
                    <div key={seg.label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-0 border-b border-[#333]/30 pb-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] font-medium truncate">
                          {seg.label}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 pl-5 sm:pl-0">
                        <span className="font-mono text-sm text-[#FAFAFA] tabular-nums font-medium">
                          {(seg.pts / 1000).toFixed(1)}K
                        </span>
                        <span className="font-mono text-[10px] text-[#B8B8C0] tabular-nums">
                          {seg.share}%
                        </span>
                      </div>
                    </div>
                  ))}
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
