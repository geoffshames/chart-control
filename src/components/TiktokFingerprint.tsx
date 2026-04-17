'use client';

import { motion } from 'framer-motion';
import data from '@/lib/data/tiktok-fingerprint.json';

type Sample = {
  rank: number;
  title: string;
  artist: string;
  songEquivalent: number;
  tiktokCreates: number;
  creates24h: number;
  sounds: number;
  genre: string;
};

const fmtK = (n: number) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
  return n.toLocaleString();
};

function tier(ratio: number) {
  if (ratio < 2) return { label: 'US-NATIVE', color: '#00E676', bg: 'rgba(0, 230, 118, 0.15)' };
  if (ratio < 10) return { label: 'MIXED', color: '#FFD600', bg: 'rgba(255, 214, 0, 0.15)' };
  return { label: 'GLOBAL-VIRAL', color: '#FF1744', bg: 'rgba(255, 23, 68, 0.15)' };
}

export default function TiktokFingerprint() {
  const samples = (data.samples as Sample[]).slice().sort((a, b) =>
    a.tiktokCreates / a.songEquivalent - b.tiktokCreates / b.songEquivalent
  );

  const greenCount = samples.filter(s => s.tiktokCreates / s.songEquivalent < 2).length;
  const amberCount = samples.filter(s => {
    const r = s.tiktokCreates / s.songEquivalent;
    return r >= 2 && r < 10;
  }).length;
  const redCount = samples.filter(s => s.tiktokCreates / s.songEquivalent >= 10).length;

  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-4">
            06 &middot; TIKTOK FINGERPRINT
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-[0.95] mb-4 tracking-tight uppercase"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            Creates Per Point
          </h2>
          <p className="text-lg text-[#E4E4E9] leading-relaxed mb-4">
            TikTok creates don&apos;t correlate with Hot 100 position directly (Pearson = &minus;0.002 across our {samples.length}-song sample).
            But the <span className="text-[#FAFAFA] font-medium">ratio of lifetime creates to chart points</span> is a genre fingerprint &mdash; a signal of how efficiently a song converts social virality into US chart impact.
          </p>
          <p className="text-base text-[#B8B8C0] leading-relaxed">
            Low ratio = US radio &amp; streaming engine. High ratio = global TikTok hit that the Hot 100 undercounts (usually because the audience streams outside the US).
          </p>
        </motion.div>

        {/* Distribution pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <div className="p-5 md:p-6 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#00E676]/30 rounded-xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#00E676] font-semibold mb-3">US-NATIVE</div>
            <div
              className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-[#FAFAFA] leading-none"
              style={{ fontFamily: "'N27', sans-serif" }}
            >{greenCount}</div>
            <div className="text-[11px] tracking-wide text-[#B8B8C0] mt-3">ratio &lt; 2 &middot; country / rock / rap heartland songs</div>
          </div>
          <div className="p-5 md:p-6 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#FFD600]/30 rounded-xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#FFD600] font-semibold mb-3">MIXED</div>
            <div
              className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-[#FAFAFA] leading-none"
              style={{ fontFamily: "'N27', sans-serif" }}
            >{amberCount}</div>
            <div className="text-[11px] tracking-wide text-[#B8B8C0] mt-3">ratio 2&ndash;10 &middot; indie pop / crossover</div>
          </div>
          <div className="p-5 md:p-6 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#FF1744]/30 rounded-xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#FF1744] font-semibold mb-3">GLOBAL-VIRAL</div>
            <div
              className="text-4xl md:text-5xl font-bold font-mono tabular-nums text-[#FAFAFA] leading-none"
              style={{ fontFamily: "'N27', sans-serif" }}
            >{redCount}</div>
            <div className="text-[11px] tracking-wide text-[#B8B8C0] mt-3">ratio &gt; 10 &middot; huge on TikTok, undercounted by Hot 100</div>
          </div>
        </motion.div>

        {/* Sorted list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#333]/40"
        >
          <div className="hidden md:grid md:grid-cols-[60px_1fr_auto_auto_auto_auto_120px] gap-6 items-center py-3 border-b border-[#333]/30 text-[10px] tracking-[0.25em] uppercase text-[#B8B8C0] font-medium">
            <div>Rank</div>
            <div>Title &middot; Artist</div>
            <div className="text-right">Genre</div>
            <div className="text-right">Creates</div>
            <div className="text-right">Points</div>
            <div className="text-right">Ratio</div>
            <div className="text-right">Tier</div>
          </div>
          {samples.map((s, idx) => {
            const ratio = s.tiktokCreates / s.songEquivalent;
            const t = tier(ratio);
            return (
              <motion.div
                key={s.rank}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_1fr_auto_auto_auto_auto_120px] gap-3 md:gap-6 items-center py-4 md:py-5 border-b border-[#333]/30 hover:bg-[#141414]/50 transition-colors"
              >
                {/* Mobile: rank + title on one line */}
                <div className="font-mono tabular-nums text-[#FD3737] font-bold md:text-[#B8B8C0] text-sm md:text-base">
                  #{String(s.rank).padStart(3, '0')}
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] md:text-base font-medium text-[#FAFAFA] truncate">{s.title}</div>
                  <div className="text-[12px] md:text-sm text-[#B8B8C0] truncate">{s.artist}</div>
                  {/* Mobile secondary row */}
                  <div className="md:hidden mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-[#B8B8C0]">
                    <span>{s.genre}</span>
                    <span>&middot;</span>
                    <span className="text-[#FAFAFA]">{fmtK(s.tiktokCreates)} creates</span>
                    <span>&middot;</span>
                    <span className="text-[#FAFAFA]">{fmtK(s.songEquivalent)} pts</span>
                  </div>
                </div>
                {/* Mobile: ratio + tier on far right */}
                <div className="md:hidden flex flex-col items-end gap-1">
                  <div className="font-mono tabular-nums text-[#FAFAFA] text-sm font-semibold">{ratio.toFixed(2)}</div>
                  <span
                    className="text-[8px] tracking-[0.15em] uppercase font-medium px-2 py-0.5 rounded whitespace-nowrap"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >{t.label}</span>
                </div>
                {/* Desktop-only cols */}
                <div className="hidden md:block text-right text-[12px] text-[#B8B8C0] font-mono tracking-wide">{s.genre}</div>
                <div className="hidden md:block text-right font-mono tabular-nums text-sm text-[#FAFAFA]">{fmtK(s.tiktokCreates)}</div>
                <div className="hidden md:block text-right font-mono tabular-nums text-sm text-[#FAFAFA]">{fmtK(s.songEquivalent)}</div>
                <div className="hidden md:block text-right font-mono tabular-nums text-base font-semibold text-[#FAFAFA]">{ratio.toFixed(2)}</div>
                <div className="hidden md:flex justify-end">
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 rounded whitespace-nowrap"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >{t.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/60 rounded-xl"
        >
          <p className="text-[15px] md:text-base text-[#E4E4E9] leading-relaxed">
            <span className="text-[#FD3737] font-medium">Operational read:</span>{' '}
            normalize TikTok expectations against genre, not against an absolute number. A country song at 500K creates is a breakout signal; a pop song at 500K creates is underperforming its cohort. The <span className="text-[#FAFAFA] font-medium">Hot 100 undercounts global TikTok virality</span> &mdash; Raindance (Tems, Dave) has 65&times; more creates per chart point than Choosin&apos; Texas, because its audience streams outside the US.
          </p>
          <p className="text-[12px] md:text-[13px] text-[#B8B8C0] mt-3 leading-relaxed">
            Source: Cobrand lifetime Total Creates &middot; N = {samples.length} songs &middot; weekly snapshots coming once the Cobrand pull is baked into the Wednesday automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
