'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { motion } from 'framer-motion';
import { week20260409, divisors } from '@/lib/data/week-2026-04-09';
import { calculatePoints, predictPosition, distanceToThreshold, pathToTarget } from '@/lib/calculator';

const thresholds = week20260409.thresholdPoints;
const chartRows = week20260409.rows;

const validationSamples = [
  {
    rank: 1,
    title: "Choosin' Texas",
    artist: "Ella Langley",
    actualPts: 299600,
    predictedPts: 298359,
    error: 1241,
    errorPct: 0.41,
  },
  {
    rank: 10,
    title: "Folded",
    artist: "Kehlani",
    actualPts: 146717,
    predictedPts: 145703,
    error: 1014,
    errorPct: 0.69,
  },
  {
    rank: 25,
    title: "Body",
    artist: "Don Toliver",
    actualPts: 88931,
    predictedPts: 78840,
    error: 10091,
    errorPct: 11.35,
  },
  {
    rank: 50,
    title: "Porch Light",
    artist: "Noah Kahan",
    actualPts: 55619,
    predictedPts: 46213,
    error: 9406,
    errorPct: 16.91,
  },
  {
    rank: 75,
    title: "DAÑO",
    artist: "Peso Pluma, Tito Double P",
    actualPts: 36298,
    predictedPts: 35573,
    error: 725,
    errorPct: 2.0,
  },
  {
    rank: 100,
    title: "Sweet Boy",
    artist: "Malcolm Todd",
    actualPts: 31079,
    predictedPts: 25328,
    error: 5751,
    errorPct: 18.5,
  },
];

const sectionDivider = (
  <div className="h-px bg-gradient-to-r from-transparent via-surface-200/60 to-transparent" />
);

const getTierColor = (errorPct: number) => {
  if (errorPct < 2) return { bg: 'bg-tier-green/15', text: 'text-tier-green' };
  if (errorPct < 5) return { bg: 'bg-tier-yellow/15', text: 'text-tier-yellow' };
  if (errorPct < 10) return { bg: 'bg-tier-orange/15', text: 'text-tier-orange' };
  return { bg: 'bg-tier-red/15', text: 'text-tier-red' };
};

const CustomRangeSlider = ({ value, onChange, max, step = 100000 }: { value: number; onChange: (v: number) => void; max: number; step?: number }) => {
  const percent = (value / max) * 100;

  return (
    <input
      type="range"
      min="0"
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1 bg-transparent rounded-full appearance-none cursor-pointer accent-accent slider"
      style={{
        background: `linear-gradient(to right, #FD3737 0%, #FD3737 ${percent}%, #333333 ${percent}%, #333333 100%)`,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const [subStreams, setSubStreams] = useState(5000000);
  const [adStreams, setAdStreams] = useState(1500000);
  const [programmedStreams, setProgrammedStreams] = useState(1000000);
  const [airplayAudience, setAirplayAudience] = useState(20000000);
  const [sales, setSales] = useState(500);
  const [targetPosition, setTargetPosition] = useState(10);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPoints = useMemo(
    () =>
      calculatePoints(
        subStreams,
        adStreams,
        programmedStreams,
        airplayAudience,
        sales
      ),
    [subStreams, adStreams, programmedStreams, airplayAudience, sales]
  );

  const predictedRank = useMemo(() => predictPosition(currentPoints, thresholds), [currentPoints]);

  const targetThreshold = useMemo(() => {
    const pos = Math.min(Math.max(Math.round(targetPosition), 1), 100);
    return Object.entries(thresholds).find(([p]) => parseInt(p) === pos)?.[1] || thresholds[10];
  }, [targetPosition]);

  const pathToTargetData = useMemo(() => {
    return pathToTarget(currentPoints, targetThreshold, {
      subStreams,
      adStreams,
      programmedStreams,
      airplayAudience,
      sales,
    });
  }, [currentPoints, targetThreshold, subStreams, adStreams, programmedStreams, airplayAudience, sales]);

  const historicalData = [
    { week: 'Apr 9', rank10: 146717, rank25: 88931, rank50: 55619, rank75: 36298, rank100: 31079 },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-text-primary font-body">
      {/* Sticky Top Nav */}
      <motion.header
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-surface-200/40 h-16'
            : 'bg-transparent border-b border-transparent h-16'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px] h-full flex items-center justify-between">
          <motion.div
            initial={false}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            className="flex items-center gap-3"
          >
            <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-7 w-7" />
            <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase">Chart Control</span>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-20 md:pb-32"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(253, 55, 55, 0.08) 0%, transparent 70%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px] w-full flex flex-col items-center text-center">
          <motion.span
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-8 md:mb-12"
          >
            Crowd Control Digital
          </motion.span>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring', stiffness: 60 }}
            className="font-heading font-bold text-[clamp(3.5rem,16vw,11rem)] leading-[0.9] tracking-tight uppercase mb-6 md:mb-8"
          >
            Chart Control
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 md:mb-16 tracking-wide"
          >
            Hot 100 Reverse Engineer
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-xs text-text-muted tracking-[0.2em] space-y-1"
          >
            <p>Week ending Apr 9, 2026 · Published Apr 15, 2026</p>
            <p>Source: Luminate Billboard Hot 100 chart</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="bg-[#0A0A0A]">
        {/* Section 01: Point Thresholds */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="py-24 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-medium">01</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] mt-4 mb-6">
                Point Thresholds
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl">
                Point totals required this week to hold position across the Hot 100.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
              {[1, 10, 25, 50, 75, 100].map((pos, idx) => {
                const pts = thresholds[pos as keyof typeof thresholds];
                const isTopSpot = pos === 1;
                return (
                  <motion.div
                    key={pos}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02]">
                      <div className="text-[9px] tracking-[0.3em] uppercase text-accent font-semibold mb-4">
                        #{pos}
                      </div>
                      <div className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2 transition-colors duration-300 ${
                        isTopSpot ? 'text-accent' : 'text-text-primary'
                      }`}>
                        {(pts / 1000).toFixed(1)}K
                      </div>
                      <div className="text-xs text-text-muted tracking-wide">points per week</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 02: What-If Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="py-24 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-medium">02</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] mt-4 mb-6">
                What-If Calculator
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl">
                Input a song's consumption profile. See its predicted Hot 100 position in real time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
              {/* Input Controls */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <div className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="text-sm font-heading font-bold uppercase tracking-[0.15em] text-text-primary mb-10">
                    Consumption Profile
                  </h3>

                  <div className="space-y-9">
                    {[
                      {
                        label: 'Premium On-Demand Streams',
                        value: subStreams,
                        onChange: setSubStreams,
                        max: 30000000,
                        step: 100000,
                        divisor: divisors.subscription,
                      },
                      {
                        label: 'Ad-Supported On-Demand Streams',
                        value: adStreams,
                        onChange: setAdStreams,
                        max: 10000000,
                        step: 100000,
                        divisor: divisors.adSupported,
                      },
                      {
                        label: 'Programmed Streams (/500)',
                        value: programmedStreams,
                        onChange: setProgrammedStreams,
                        max: 10000000,
                        step: 100000,
                        divisor: divisors.programmed,
                      },
                      {
                        label: 'Airplay Audience (impressions)',
                        value: airplayAudience,
                        onChange: setAirplayAudience,
                        max: 100000000,
                        step: 1000000,
                        divisor: divisors.airplay,
                      },
                      {
                        label: 'Digital & Physical Sales',
                        value: sales,
                        onChange: setSales,
                        max: 50000,
                        step: 100,
                        divisor: divisors.sales,
                      },
                    ].map((field, idx) => (
                      <motion.div
                        key={field.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <label className="text-xs font-medium text-text-muted uppercase tracking-[0.15em]">
                            {field.label}
                          </label>
                          <div className="text-xl font-heading font-bold text-accent tabular-nums">
                            {(field.value / 1000000).toFixed(2)}M
                          </div>
                        </div>
                        <CustomRangeSlider
                          value={field.value}
                          onChange={field.onChange}
                          max={field.max}
                          step={field.step}
                        />
                        <div className="text-[10px] text-text-muted tracking-[0.2em] uppercase mt-3 font-medium">
                          ÷ {field.divisor}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Results Panel - Sticky */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="text-sm font-heading font-bold uppercase tracking-[0.15em] text-text-primary mb-8">
                    Prediction
                  </h3>

                  {/* Total Points */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-2">
                      Total Points
                    </div>
                    <motion.div
                      key={Math.floor(currentPoints)}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl md:text-6xl font-heading font-bold text-text-primary tabular-nums"
                    >
                      {Math.floor(currentPoints).toLocaleString()}
                    </motion.div>
                  </div>

                  <div className="h-px bg-surface-200/40 my-6" />

                  {/* Predicted Position */}
                  <div className="mb-8">
                    <div className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-2">
                      Predicted Position
                    </div>
                    <motion.div
                      key={Math.round(predictedRank)}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl font-heading font-bold text-accent"
                    >
                      #{Math.round(predictedRank)}
                    </motion.div>
                  </div>

                  <div className="h-px bg-surface-200/40 my-6" />

                  {/* Threshold Comparisons */}
                  <div className="mb-8 space-y-2">
                    {[10, 25, 50, 75, 100].map((pos) => {
                      const thresh = thresholds[pos as keyof typeof thresholds];
                      const dist = distanceToThreshold(currentPoints, thresh);
                      const isSurplus = dist.includes('+');
                      return (
                        <div key={pos} className="flex items-center justify-between text-xs">
                          <span className="text-text-muted font-medium">#{pos}</span>
                          <span className={`font-semibold ${isSurplus ? 'text-tier-green' : 'text-tier-yellow'}`}>
                            {dist}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="h-px bg-surface-200/40 my-6" />

                  {/* Path to Target */}
                  <div>
                    <label className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-3 block">
                      Target Position
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={targetPosition}
                      onChange={(e) => setTargetPosition(Number(e.target.value))}
                      className="w-full bg-surface border border-surface-200/60 rounded-lg px-4 py-2 text-text-primary font-heading font-bold text-xl text-center mb-4"
                    />
                    <div className="p-4 bg-surface-50/30 rounded-lg space-y-2 text-xs">
                      <p className="text-text-muted font-medium">Path to #{Math.round(targetPosition)}:</p>
                      <div className="space-y-1 text-tier-yellow font-medium">
                        <p>+{(pathToTargetData.subStreamsNeeded / 1000000).toFixed(2)}M premium OR</p>
                        <p>+{(pathToTargetData.programmedStreamsNeeded / 1000000).toFixed(2)}M programmed OR</p>
                        <p>+{(pathToTargetData.airplayNeeded / 1000000).toFixed(0)}M airplay</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 03: Methodology */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="py-24 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-medium">03</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] mt-4 mb-6">
                Methodology
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl">
                The weighted points formula powering Billboard's Song Equivalent. Validated this week against live Luminate data.
              </p>
            </motion.div>

            {/* Divisor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              {[
                { label: 'PREMIUM ON-DEMAND', divisor: '÷ 125', desc: 'Subscription streams from Spotify, Apple Music, Amazon Music' },
                { label: 'AD-SUPPORTED', divisor: '÷ 375', desc: 'Free/ad-supported streams across all platforms' },
                { label: 'PROGRAMMED', divisor: '÷ 500', desc: 'Spotify, Apple Music, Amazon playlists' },
                { label: 'AIRPLAY', divisor: '÷ 800', desc: 'Radio audience impressions' },
                { label: 'SALES', divisor: '÷ 1', desc: 'Digital & physical sales' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="text-[9px] tracking-[0.3em] uppercase text-text-muted font-semibold mb-3">
                    {item.label}
                  </div>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-accent mb-3">
                    {item.divisor}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Formula & Methodology */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            >
              <div className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <h4 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-text-primary mb-6">
                  Formula
                </h4>
                <div className="space-y-3 text-sm text-text-secondary font-body">
                  <p>Premium ÷ 125</p>
                  <p>+ Ad-supported ÷ 375</p>
                  <p>+ Programmed ÷ 500</p>
                  <p>+ Airplay ÷ 800</p>
                  <p>+ Sales ÷ 1</p>
                  <p className="pt-3 font-medium text-text-primary">= Song Equivalent Units</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <h4 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-text-primary mb-6">
                  Accuracy Notes
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Formula reproduces Luminate Song Equivalent within 0.3–2% for pure on-demand + airplay profiles. Songs with significant programmed contribution show 10–20% underestimation (addressed in Phase 2 with per-song programmed capture).
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 04: Validation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="py-24 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-medium">04</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] mt-4 mb-6">
                Single-Week Validation
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl">
                Predicted points vs actual Song Equivalent for 6 threshold positions this week.
              </p>
            </motion.div>

            {/* Validation Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {validationSamples.map((sample, idx) => {
                const colors = getTierColor(sample.errorPct);
                return (
                  <motion.div
                    key={sample.rank}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`${colors.bg} border border-surface-200/60 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-xs font-medium text-text-muted uppercase tracking-[0.2em] mb-1">
                          Rank
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-1 bg-accent/20 border border-accent/40 rounded-lg">
                          <span className="text-accent font-heading font-bold">#{sample.rank}</span>
                        </div>
                      </div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-lg font-semibold text-xs ${colors.text} ${colors.bg}`}>
                        {sample.errorPct.toFixed(2)}% error
                      </div>
                    </div>

                    <div className="mb-6 border-b border-surface-200/40 pb-6">
                      <p className="text-sm font-semibold text-text-primary leading-snug">
                        {sample.title}
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        {sample.artist}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-[10px] text-text-muted uppercase tracking-[0.15em] font-medium mb-1">
                          Actual
                        </div>
                        <div className="text-lg font-heading font-bold text-text-primary">
                          {(sample.actualPts / 1000).toFixed(1)}K
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-text-muted uppercase tracking-[0.15em] font-medium mb-1">
                          Predicted
                        </div>
                        <div className="text-lg font-heading font-bold text-text-primary">
                          {(sample.predictedPts / 1000).toFixed(1)}K
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-text-muted uppercase tracking-[0.15em] font-medium mb-1">
                          Delta
                        </div>
                        <div className={`text-lg font-heading font-bold ${colors.text}`}>
                          {(sample.error / 1000).toFixed(1)}K
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Summary Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-tier-yellow/10 border border-tier-yellow/40 rounded-xl md:rounded-2xl p-6 md:p-8"
            >
              <p className="text-sm text-tier-yellow font-body leading-relaxed">
                Formula reproduces Luminate Song Equivalent within 0.3–2% for pure on-demand + airplay profiles. Songs with significant programmed contribution show 10–20% underestimation (addressed in Phase 2 with per-song programmed capture).
              </p>
            </motion.div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 05: Historical Thresholds */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="py-24 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-medium">05</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] mt-4 mb-6">
                Historical Thresholds
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl">
                Threshold point requirements accumulated weekly. First full 12-week stress test will populate this view.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="h-96 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.3} />
                    <XAxis dataKey="week" stroke="#B8B8C0" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#B8B8C0" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #333333',
                        borderRadius: '8px',
                        padding: '10px',
                      }}
                      labelStyle={{ color: '#FAFAFA', fontSize: '12px' }}
                    />
                    <Legend
                      wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
                      iconType="line"
                    />
                    <Line type="monotone" dataKey="rank10" stroke="#FD3737" strokeWidth={2.5} name="#10 Threshold" dot={false} />
                    <Line type="monotone" dataKey="rank25" stroke="#FFD600" strokeWidth={2} name="#25 Threshold" dot={false} />
                    <Line type="monotone" dataKey="rank50" stroke="#FF9100" strokeWidth={2} name="#50 Threshold" dot={false} />
                    <Line type="monotone" dataKey="rank75" stroke="#A78BFA" strokeWidth={2} name="#75 Threshold" dot={false} />
                    <Line type="monotone" dataKey="rank100" stroke="#B8B8C0" strokeWidth={2} name="#100 Threshold" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 bg-surface-50/30 rounded-lg border border-surface-200/40">
                <p className="text-xs text-text-muted">
                  <span className="inline-block px-2 py-1 bg-tier-yellow/20 text-tier-yellow rounded font-medium mr-2">1/12 weeks collected</span>
                  Chart populates as we accumulate weekly data through Apr 30.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {sectionDivider}

        {/* Section 06: This Week's Chart */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="py-24 md:py-32"
        >
          <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-medium">06</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] mt-4 mb-6">
                This Week's Chart
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl">
                All 100 songs ranked by Song Equivalent units, week ending Apr 9, 2026.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-surface-50/80 to-surface/50 border border-surface-200/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="max-h-[600px] overflow-y-auto scrollbar-hide">
                <table className="w-full">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-surface-100 border-b border-surface-200/40">
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">
                        Rank
                      </th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">
                        Title / Artist
                      </th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chartRows.map((row, idx) => {
                      let rankColor = 'text-text-secondary';
                      if (row.rank <= 10) rankColor = 'text-accent font-bold';
                      else if (row.rank <= 25) rankColor = 'text-text-primary font-semibold';

                      return (
                        <tr
                          key={row.rank}
                          className={`border-b border-surface-200/40 transition-colors duration-150 ${
                            idx % 2 === 0 ? 'hover:bg-surface-50/30' : 'hover:bg-surface-50/50'
                          }`}
                        >
                          <td className="py-4 px-6">
                            <span className={`text-sm font-heading font-bold tabular-nums ${rankColor}`}>
                              {String(row.rank).padStart(2, '0')}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="text-sm font-semibold text-text-primary leading-snug">
                              {row.title}
                            </div>
                            <div className="text-xs text-text-secondary mt-0.5">
                              {row.artist}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="text-sm font-heading font-bold text-text-primary tabular-nums">
                              {(row.songEquivalent / 1000).toFixed(1)}K
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-200/40 mt-32 py-12 md:py-16 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-[24px] md:px-[40px]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-5 w-5" />
            <span className="text-xs font-heading font-bold tracking-[0.2em] uppercase">Crowd Control Digital</span>
          </div>
          <div className="text-center">
            <p className="text-xs text-text-muted mb-2">
              <span className="font-medium">Chart Control</span> · Data-driven Hot 100 analysis
            </p>
            <p className="text-xs text-text-muted mb-3">
              info@crowdcontroldigital.com
            </p>
            <p className="text-xs text-text-muted">
              v0.1 · Luminate Data · © 2026 Crowd Control Digital
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
