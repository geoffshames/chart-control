'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { calculatePoints, predictPosition } from '@/lib/calculator';
import { week20260409 } from '@/lib/data/week-2026-04-09';

interface CalculatorProps {
  id?: string;
}

const Calculator = ({ id }: CalculatorProps) => {
  const [premiumOnDemand, setPremiumOnDemand] = useState(18000000);
  const [adSupported, setAdSupported] = useState(5000000);
  const [programmed, setProgrammed] = useState(2000000);
  const [airplayAudience, setAirplayAudience] = useState(50000000);
  const [sales, setSales] = useState(25000);
  const [targetRank, setTargetRank] = useState(50);

  const totalPoints = calculatePoints(
    premiumOnDemand,
    adSupported,
    programmed,
    airplayAudience,
    sales
  );

  const thresholds = week20260409.thresholdPoints;
  const predictedRank = Math.round(
    predictPosition(totalPoints, thresholds as Record<number, number>)
  );

  const getRankTier = (rank: number) => {
    if (rank <= 10) return { bg: 'bg-[#00E676]/15', text: 'text-[#00E676]', label: 'Top 10' };
    if (rank <= 25) return { bg: 'bg-[#FFD600]/15', text: 'text-[#FFD600]', label: 'Top 25' };
    if (rank <= 50) return { bg: 'bg-[#FF9100]/15', text: 'text-[#FF9100]', label: 'Top 50' };
    return { bg: 'bg-[#FF1744]/15', text: 'text-[#FF1744]', label: 'Outside Top 50' };
  };

  const SliderRow = ({
    label,
    value,
    onChange,
    max,
    hint,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    max: number;
    hint: string;
  }) => {
    const percent = (value / max) * 100;

    return (
      <div className="pb-6 border-b border-[#333]/30">
        <div className="flex items-center justify-between mb-3">
          <label className="text-[11px] tracking-[0.2em] uppercase text-[#B8B8C0]">
            {label}
          </label>
          <div className="font-mono text-2xl text-[#FD3737] font-bold tabular-nums">
            {(value / 1000000).toFixed(1)}M
          </div>
        </div>

        <input
          type="range"
          min="0"
          max={max}
          step={max / 100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1 bg-transparent rounded-full appearance-none cursor-pointer accent-accent slider"
          style={
            {
              '--val': `${percent}%`,
            } as React.CSSProperties
          }
        />

        <div className="text-xs text-[#B8B8C0] mt-2">{hint}</div>
      </div>
    );
  };

  return (
    <section id={id} className="w-full px-6 md:px-10 py-20 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] mb-4">
            02 · CALCULATOR
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            WILL YOUR SONG CHART?
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-2xl">
            Input a consumption profile, see the predicted Hot 100 position in real time.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Inputs */}
          <div className="space-y-0">
            <SliderRow
              label="Premium On-Demand"
              value={premiumOnDemand}
              onChange={setPremiumOnDemand}
              max={30000000}
              hint="Top-10 avg: 18–28M"
            />
            <SliderRow
              label="Ad-Supported"
              value={adSupported}
              onChange={setAdSupported}
              max={10000000}
              hint="Digital second stream"
            />
            <SliderRow
              label="Programmed"
              value={programmed}
              onChange={setProgrammed}
              max={10000000}
              hint="Phase 2 — captured next week"
            />
            <SliderRow
              label="Airplay Audience"
              value={airplayAudience}
              onChange={setAirplayAudience}
              max={100000000}
              hint="Radio + streaming share equivalent"
            />
            <div className="pb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#B8B8C0]">
                  Sales Units
                </label>
                <div className="font-mono text-2xl text-[#FD3737] font-bold tabular-nums">
                  {sales.toLocaleString()}
                </div>
              </div>
              <input
                type="range"
                min="0"
                max={50000}
                step={500}
                value={sales}
                onChange={(e) => setSales(Number(e.target.value))}
                className="w-full h-1 bg-transparent rounded-full appearance-none cursor-pointer accent-accent slider"
                style={
                  {
                    '--val': `${(sales / 50000) * 100}%`,
                  } as React.CSSProperties
                }
              />
            </div>
          </div>

          {/* Right: Results (Sticky on lg+) */}
          <motion.div
            className="lg:sticky lg:top-24 h-fit space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Total Points */}
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] mb-2">
                Total Points
              </div>
              <div
                className="text-5xl md:text-6xl font-bold font-mono tabular-nums text-[#FAFAFA]"
                style={{ fontFamily: "'N27', sans-serif" }}
              >
                {totalPoints.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>

            {/* Predicted Position */}
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#B8B8C0] mb-3">
                Predicted Position
              </div>
              <div
                className="text-6xl md:text-7xl font-bold text-[#FD3737] font-mono"
                style={{ fontFamily: "'N27', sans-serif" }}
              >
                #{predictedRank}
              </div>
              <div className="text-xs text-[#B8B8C0] mt-2">±3 position margin</div>
            </div>

            {/* Comparison Strip */}
            <div className="space-y-1 border-t border-[#333]/30 pt-6">
              {[1, 10, 25, 50, 75, 100].map((rank) => {
                const threshold =
                  thresholds[rank as keyof typeof thresholds];
                const delta = totalPoints - threshold;
                const tierColor = delta >= 0 ? 'text-[#00E676]' : 'text-[#FF1744]';

                return (
                  <div
                    key={rank}
                    className="flex items-center justify-between py-2 border-b border-[#333]/30 text-xs font-mono"
                  >
                    <div className="text-[#B8B8C0]">#{rank}</div>
                    <div className="text-[#B8B8C0]">{threshold.toLocaleString()} pts</div>
                    <div className={`${tierColor} font-bold`}>
                      {delta >= 0 ? '+' : ''}
                      {(delta / 1000).toFixed(1)}K
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Target Input */}
            <div className="space-y-3 bg-[#141414] border border-[#333]/50 p-6 rounded">
              <div className="flex items-center gap-3">
                <label className="text-xs tracking-[0.1em] uppercase text-[#B8B8C0]">
                  Target Rank
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={targetRank}
                  onChange={(e) => setTargetRank(Number(e.target.value))}
                  className="w-12 h-8 px-2 bg-[#1A1A1A] border border-[#333]/50 text-[#FAFAFA] font-mono text-sm"
                />
              </div>

              <div className="text-xs text-[#FFD600] font-mono mt-4">
                Path to target position updated dynamically
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
