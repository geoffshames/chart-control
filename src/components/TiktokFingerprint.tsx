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

// Genre labels → Title Case (defensive, since Luminate returns mixed case)
const titleCase = (s: string) =>
  s
    .split(/([\s\-/])/)
    .map((tok) => {
      if (/^[\s\-/]$/.test(tok)) return tok;
      if (tok.length <= 2) return tok.toUpperCase(); // "R&B", "US"
      if (tok.toLowerCase() === 'r&b') return 'R&B';
      return tok.charAt(0).toUpperCase() + tok.slice(1).toLowerCase();
    })
    .join('');

type Tier = {
  label: string;
  color: string;
  solidBg: string;
  tintBg: string;
};

function getTier(ratio: number): Tier {
  if (ratio < 2)  return { label: 'US-NATIVE',    color: '#00E676', solidBg: '#00E676', tintBg: 'rgba(0, 230, 118, 0.12)' };
  if (ratio < 10) return { label: 'MIXED',        color: '#FFD600', solidBg: '#FFD600', tintBg: 'rgba(255, 214, 0, 0.12)' };
  return            { label: 'GLOBAL-VIRAL', color: '#FF1744', solidBg: '#FF1744', tintBg: 'rgba(255, 23, 68, 0.12)' };
}

export default function TiktokFingerprint() {
  const samples = (data.samples as Sample[]).slice().sort(
    (a, b) => a.tiktokCreates / a.songEquivalent - b.tiktokCreates / b.songEquivalent
  );

  const greenCount = samples.filter(s => s.tiktokCreates / s.songEquivalent < 2).length;
  const amberCount = samples.filter(s => {
    const r = s.tiktokCreates / s.songEquivalent;
    return r >= 2 && r < 10;
  }).length;
  const redCount = samples.filter(s => s.tiktokCreates / s.songEquivalent >= 10).length;

  return (
    <section className="w-full px-6 md:px-10 py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header — generous */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-24 max-w-3xl"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-6 font-medium">
            06 &middot; TIKTOK FINGERPRINT
          </div>
          <h2
            className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 tracking-tight uppercase"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            Creates Per Point
          </h2>
          <p className="text-lg md:text-xl text-[#E4E4E9] leading-snug mb-6">
            TikTok creates don&apos;t correlate with Hot 100 position directly.{' '}
            <span className="text-[#FAFAFA] font-semibold">Pearson &minus;0.002</span> across our {samples.length}-song sample.
          </p>
          <p className="text-base md:text-lg text-[#B8B8C0] leading-relaxed">
            But the ratio of lifetime creates to chart points <span className="text-[#FD3737] font-medium">is</span> a genre fingerprint.
            Low ratio = US radio &amp; streaming engine. High ratio = global TikTok hit the Hot 100 undercounts.
          </p>
        </motion.div>

        {/* Distribution cards — bigger, Title-Cased genre hints */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-24"
        >
          {[
            { color: '#00E676', tintBg: 'rgba(0, 230, 118, 0.05)',  label: 'US-NATIVE',    count: greenCount, hint: 'Ratio < 2',    desc: 'Country / Rock / Rap Heartland' },
            { color: '#FFD600', tintBg: 'rgba(255, 214, 0, 0.05)',  label: 'MIXED',        count: amberCount, hint: 'Ratio 2–10',   desc: 'Indie Pop / Crossover' },
            { color: '#FF1744', tintBg: 'rgba(255, 23, 68, 0.05)',  label: 'GLOBAL-VIRAL', count: redCount,   hint: 'Ratio > 10',   desc: 'Huge on TikTok, Undercounted' },
          ].map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative p-8 md:p-10 rounded-xl overflow-hidden"
              style={{
                background: `linear-gradient(145deg, ${t.tintBg}, rgba(14, 14, 14, 0.9))`,
                border: `2px solid ${t.color}40`,
                boxShadow: `inset 0 1px 0 ${t.color}1a, 0 0 50px -20px ${t.color}30`,
                minHeight: '220px',
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: t.color }} />
              <div className="pl-4">
                <div
                  className="text-[11px] tracking-[0.3em] uppercase font-bold mb-6"
                  style={{ color: t.color }}
                >
                  {t.label}
                </div>
                <div
                  className="text-7xl md:text-8xl font-bold font-mono tabular-nums leading-none mb-6"
                  style={{ fontFamily: "'N27', sans-serif", color: '#FAFAFA' }}
                >
                  {t.count}
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase font-semibold" style={{ color: t.color }}>
                    {t.hint}
                  </div>
                  <div className="text-[12px] md:text-[13px] tracking-wide text-[#B8B8C0]">
                    {t.desc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Column headers — generous vertical padding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="hidden md:grid md:grid-cols-[70px_1.6fr_120px_110px_110px_100px_160px] gap-8 items-center pb-5 border-b-2 border-[#333]/60 text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-bold mb-4"
        >
          <div>Rank</div>
          <div>Title &middot; Artist</div>
          <div className="text-right">Genre</div>
          <div className="text-right">Creates</div>
          <div className="text-right">Points</div>
          <div className="text-right">Ratio</div>
          <div className="text-right">Tier</div>
        </motion.div>

        {/* Rows — much more vertical breathing room */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="divide-y divide-[#333]/40"
        >
          {samples.map((s, idx) => {
            const ratio = s.tiktokCreates / s.songEquivalent;
            const t = getTier(ratio);
            return (
              <motion.div
                key={s.rank}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="relative grid grid-cols-[auto_1fr_auto] md:grid-cols-[70px_1.6fr_120px_110px_110px_100px_160px] gap-4 md:gap-8 items-center py-8 md:py-10 pl-6 md:pl-8 hover:bg-[#141414]/60 transition-colors"
                style={{ borderLeft: `3px solid ${t.color}` }}
              >
                <div
                  className="font-mono tabular-nums text-base md:text-lg font-bold"
                  style={{ color: t.color, fontFamily: "'N27', sans-serif" }}
                >
                  #{String(s.rank).padStart(3, '0')}
                </div>
                <div className="min-w-0">
                  <div className="text-base md:text-lg font-semibold text-[#FAFAFA] truncate tracking-tight leading-tight">
                    {s.title}
                  </div>
                  <div className="text-[13px] md:text-sm text-[#B8B8C0] truncate mt-1">
                    {s.artist}
                  </div>
                  <div className="md:hidden mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-[#B8B8C0]">
                    <span style={{ color: t.color }} className="font-semibold">{titleCase(s.genre)}</span>
                    <span className="text-[#333]">·</span>
                    <span className="text-[#FAFAFA]">{fmtK(s.tiktokCreates)}</span>
                    <span className="text-[#333]">/</span>
                    <span className="text-[#FAFAFA]">{fmtK(s.songEquivalent)}</span>
                  </div>
                </div>
                {/* Mobile: ratio + pill on right */}
                <div className="md:hidden flex flex-col items-end gap-2">
                  <div
                    className="font-mono tabular-nums text-2xl font-bold"
                    style={{ color: '#FAFAFA', fontFamily: "'N27', sans-serif" }}
                  >
                    {ratio.toFixed(2)}
                  </div>
                  <span
                    className="text-[9px] tracking-[0.15em] uppercase font-bold px-2.5 py-1 rounded whitespace-nowrap"
                    style={{ backgroundColor: t.solidBg, color: '#0A0A0A' }}
                  >
                    {t.label}
                  </span>
                </div>
                {/* Desktop columns */}
                <div className="hidden md:block text-right text-[13px] text-[#B8B8C0] font-mono tracking-wide">
                  {titleCase(s.genre)}
                </div>
                <div className="hidden md:block text-right font-mono tabular-nums text-[15px] text-[#FAFAFA] font-medium">
                  {fmtK(s.tiktokCreates)}
                </div>
                <div className="hidden md:block text-right font-mono tabular-nums text-[15px] text-[#FAFAFA] font-medium">
                  {fmtK(s.songEquivalent)}
                </div>
                <div
                  className="hidden md:block text-right font-mono tabular-nums text-3xl font-bold"
                  style={{ fontFamily: "'N27', sans-serif", color: '#FAFAFA' }}
                >
                  {ratio.toFixed(2)}
                </div>
                <div className="hidden md:flex justify-end">
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase font-bold px-3.5 py-2 rounded whitespace-nowrap"
                    style={{ backgroundColor: t.solidBg, color: '#0A0A0A' }}
                  >
                    {t.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing callout — more space around it */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-24 relative p-10 md:p-12 rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(253, 55, 55, 0.06), rgba(14, 14, 14, 0.9))',
            border: '2px solid rgba(253, 55, 55, 0.25)',
            boxShadow: '0 0 80px -30px rgba(253, 55, 55, 0.5)',
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FD3737]" />
          <div className="pl-6">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#FD3737] font-bold mb-5">
              OPERATIONAL READ
            </div>
            <p className="text-xl md:text-2xl text-[#FAFAFA] leading-snug mb-5 font-medium tracking-tight">
              Normalize TikTok expectations against genre, not an absolute number.
            </p>
            <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed">
              A country song at 500K creates is a breakout signal. A pop song at 500K creates is underperforming its cohort.
              The Hot 100 undercounts global TikTok virality: <span className="text-[#FAFAFA] font-semibold">Raindance has 65&times; more creates per chart point than Choosin&apos; Texas</span> because its audience streams outside the US.
            </p>
            <p className="text-[11px] text-[#B8B8C0] mt-8 font-mono tracking-wide">
              Source: Cobrand lifetime Total Creates &middot; N = {samples.length} songs &middot; weekly snapshots begin Wednesday
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
