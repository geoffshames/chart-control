'use client';

import { motion } from 'framer-motion';
import { ChartLineUp, Target, Crosshair } from '@phosphor-icons/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
  ScatterChart,
  Scatter,
  ZAxis,
} from 'recharts';
import { calibrationMeta } from '@/lib/calculator';

const Backtest = () => {
  const wfPerWeek = calibrationMeta.walkForwardPerWeek || {};
  const looPerWeek = calibrationMeta.heldOutWeek || {};

  const weekKeys = Object.keys({ ...wfPerWeek, ...looPerWeek }).sort();
  const lineData = weekKeys.map((w) => {
    const wf = wfPerWeek[w];
    const loo = looPerWeek[w];
    return {
      week: w.slice(5),
      full: w,
      walkForward: wf && !wf.skipped && wf.heldOutMAPE !== null ? wf.heldOutMAPE : null,
      leaveOneOut: loo?.heldOutMAPE ?? null,
      nPriorWeeks: wf?.nPriorWeeks ?? 0,
    };
  });

  const scatterData = (calibrationMeta.walkForwardPredictions || []).map((p) => ({
    x: p.actual,
    y: p.predicted,
    rank: p.rank,
    title: p.title,
    week: p.week.slice(5),
    relErr: p.relErr,
  }));

  const inSampleMape = calibrationMeta.inSampleMAPE ?? 0;
  const walkForwardMape = calibrationMeta.walkForwardMAPE ?? 0;
  const generalizationGap = walkForwardMape && inSampleMape ? (walkForwardMape - inSampleMape) : 0;

  const maxAxis = Math.max(...scatterData.map((d) => Math.max(d.x, d.y)), 100_000);
  const referenceLineData = [
    { x: 0, y: 0 },
    { x: maxAxis, y: maxAxis },
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
            05 &middot; BACKTEST
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight uppercase"
            style={{ fontFamily: "'N27', sans-serif" }}
          >
            Does It Generalize?
          </h2>
          <p className="text-lg text-[#E4E4E9] max-w-3xl">
            In-sample MAPE is always optimistic. The honest test: fit the model on <em>only</em> prior weeks, then predict the
            next one without peeking. Here&apos;s how the model performs week-by-week in that strict walk-forward setup.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          <div className="p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/60 rounded-xl">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium mb-3">
              <Target size={12} weight="bold" />
              IN-SAMPLE MAPE
            </div>
            <div
              className="text-5xl md:text-6xl font-bold text-[#FAFAFA] font-mono tabular-nums leading-none"
              style={{ fontFamily: "'N27', sans-serif" }}
            >
              {inSampleMape.toFixed(2)}<span className="text-[#B8B8C0] text-3xl md:text-4xl ml-1">%</span>
            </div>
            <div className="mt-3 text-sm text-[#B8B8C0] leading-snug">
              Fit on all {calibrationMeta.totalDrillinSamples} drill-ins, tested on the same. Optimistic by nature.
            </div>
          </div>

          <div className="p-6 md:p-8 bg-gradient-to-br from-[#1A0F0F] to-[#100808] border border-[#FD3737]/30 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#FD3737]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#FD3737] font-medium mb-3 relative">
              <Crosshair size={12} weight="bold" />
              WALK-FORWARD MAPE
            </div>
            <div
              className="text-5xl md:text-6xl font-bold text-[#FD3737] font-mono tabular-nums leading-none relative"
              style={{ fontFamily: "'N27', sans-serif" }}
            >
              {walkForwardMape?.toFixed(2) ?? '—'}<span className="text-[#FD3737]/60 text-3xl md:text-4xl ml-1">%</span>
            </div>
            <div className="mt-3 text-sm text-[#E4E4E9] leading-snug relative">
              Fit on prior weeks only, predict the next. {scatterData.length} out-of-sample predictions. The real test.
            </div>
          </div>

          <div className="p-6 md:p-8 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/60 rounded-xl">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium mb-3">
              <ChartLineUp size={12} weight="bold" />
              GENERALIZATION GAP
            </div>
            <div
              className={`text-5xl md:text-6xl font-bold font-mono tabular-nums leading-none ${
                Math.abs(generalizationGap) < 1 ? 'text-[#00E676]' : Math.abs(generalizationGap) < 3 ? 'text-[#FFD600]' : 'text-[#FD3737]'
              }`}
              style={{ fontFamily: "'N27', sans-serif" }}
            >
              {generalizationGap >= 0 ? '+' : ''}{generalizationGap.toFixed(2)}<span className="text-[#B8B8C0] text-3xl md:text-4xl ml-1">pp</span>
            </div>
            <div className="mt-3 text-sm text-[#B8B8C0] leading-snug">
              {Math.abs(generalizationGap) < 1
                ? 'Held-out matches in-sample. Model is well-regularized, not overfit.'
                : Math.abs(generalizationGap) < 3
                ? 'Small gap — model generalizes reasonably.'
                : 'Meaningful gap — model may be overfitting recent weeks.'}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-baseline justify-between mb-4 gap-4 flex-wrap">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium mb-1">
                ACCURACY OVER TIME
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-[#FAFAFA] tracking-tight"
                style={{ fontFamily: "'N27', sans-serif" }}
              >
                Weekly Held-Out MAPE
              </h3>
            </div>
            <div className="text-[11px] font-mono text-[#B8B8C0] tracking-wide">
              lower = more accurate
            </div>
          </div>

          <div className="p-4 md:p-6 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/60 rounded-xl">
            <ResponsiveContainer width="100%" height={340}>
              <LineChart data={lineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 4" stroke="rgba(51, 51, 51, 0.5)" vertical={false} />
                <XAxis
                  dataKey="week"
                  stroke="#B8B8C0"
                  style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.08em' }}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(51,51,51,0.5)' }}
                />
                <YAxis
                  stroke="#B8B8C0"
                  style={{ fontSize: '10px', fontFamily: 'monospace' }}
                  tickFormatter={(v: number) => `${v}%`}
                  tickLine={false}
                  axisLine={false}
                  width={50}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#141414',
                    border: '1px solid #333',
                    borderRadius: 6,
                    fontSize: 11,
                    fontFamily: 'monospace',
                  }}
                  labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
                  itemStyle={{ color: '#E4E4E9' }}
                  formatter={(v, name) => [
                    typeof v === 'number' ? `${v.toFixed(2)}%` : '—',
                    String(name ?? ''),
                  ]}
                />
                <Legend
                  wrapperStyle={{
                    fontSize: 10,
                    fontFamily: 'monospace',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    paddingTop: 12,
                  }}
                  iconType="line"
                />
                <ReferenceLine
                  y={inSampleMape}
                  stroke="#FAFAFA"
                  strokeDasharray="4 4"
                  strokeWidth={1}
                  label={{
                    value: `in-sample ${inSampleMape.toFixed(2)}%`,
                    position: 'insideTopLeft',
                    fill: '#FAFAFA',
                    fontSize: 9,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="walkForward"
                  name="Walk-forward"
                  stroke="#FD3737"
                  strokeWidth={2.2}
                  dot={{ r: 4, fill: '#FD3737', stroke: '#0A0A0A', strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="leaveOneOut"
                  name="Leave-one-out"
                  stroke="#FFD600"
                  strokeWidth={1.2}
                  strokeDasharray="4 3"
                  dot={{ r: 2.5, fill: '#FFD600' }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 text-xs text-[#B8B8C0] leading-relaxed max-w-4xl">
            <span className="text-[#FD3737] font-semibold">Walk-forward</span> is the strict test — each point uses divisors
            fit only from weeks before it, simulating how the model would have performed in production. First two weeks are
            omitted (need &ge;2 prior weeks to fit).{' '}
            <span className="text-[#FFD600] font-semibold">Leave-one-out</span> uses every other week to predict the held-out
            one — less strict but shows per-week fit quality.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-baseline justify-between mb-4 gap-4 flex-wrap">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#B8B8C0] font-medium mb-1">
                OUT-OF-SAMPLE PREDICTIONS
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-[#FAFAFA] tracking-tight"
                style={{ fontFamily: "'N27', sans-serif" }}
              >
                Predicted vs Actual Points
              </h3>
            </div>
            <div className="text-[11px] font-mono text-[#B8B8C0] tracking-wide">
              dashed line = perfect prediction
            </div>
          </div>

          <div className="p-4 md:p-6 bg-gradient-to-br from-[#141414] to-[#0E0E0E] border border-[#333]/60 rounded-xl">
            <ResponsiveContainer width="100%" height={380}>
              <ScatterChart margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="2 4" stroke="rgba(51, 51, 51, 0.5)" />
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Actual"
                  stroke="#B8B8C0"
                  style={{ fontSize: '10px', fontFamily: 'monospace' }}
                  tickFormatter={(v: number) => (v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v.toString())}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: 'ACTUAL POINTS', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#B8B8C0' }}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Predicted"
                  stroke="#B8B8C0"
                  style={{ fontSize: '10px', fontFamily: 'monospace' }}
                  tickFormatter={(v: number) => (v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v.toString())}
                  tickLine={false}
                  axisLine={false}
                  width={55}
                  label={{ value: 'PREDICTED', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#B8B8C0' }}
                />
                <ZAxis range={[60, 60]} />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: '#141414',
                    border: '1px solid #333',
                    borderRadius: 6,
                    fontSize: 11,
                    fontFamily: 'monospace',
                  }}
                  content={({ active, payload }) => {
                    if (!active || !payload || !payload.length) return null;
                    const p = payload[0].payload;
                    const err = p.relErr;
                    const errColor = Math.abs(err) < 3 ? '#00E676' : Math.abs(err) < 8 ? '#FFD600' : '#FD3737';
                    return (
                      <div className="bg-[#141414] border border-[#333] rounded px-3 py-2 font-mono text-[11px] text-[#E4E4E9]">
                        <div className="text-[#FAFAFA] font-bold mb-1">{p.title}</div>
                        <div className="text-[#B8B8C0]">#{p.rank} &middot; week {p.week}</div>
                        <div className="mt-1">Actual: {p.x.toLocaleString()}</div>
                        <div>Predicted: {p.y.toLocaleString()}</div>
                        <div className="mt-1" style={{ color: errColor }}>
                          Error: {err >= 0 ? '+' : ''}{err.toFixed(2)}%
                        </div>
                      </div>
                    );
                  }}
                />
                <Scatter
                  data={referenceLineData}
                  line={{ stroke: '#FAFAFA', strokeDasharray: '4 4', strokeWidth: 1 }}
                  lineType="joint"
                  shape={() => <></>}
                  legendType="none"
                />
                <Scatter
                  name="Predictions"
                  data={scatterData}
                  fill="#FD3737"
                  stroke="#0A0A0A"
                  strokeWidth={1}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 text-xs text-[#B8B8C0] leading-relaxed max-w-4xl">
            Each point is an out-of-sample prediction (model never saw this week during training).
            Points on the diagonal = perfect prediction. Tight clustering along the line means the model
            generalizes across chart positions and weeks.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Backtest;
