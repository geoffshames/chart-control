/**
 * Calculator — now reads CALIBRATED divisors from divisors.json, which is
 * regenerated every week by scripts/calibrate.py as new consumption
 * drill-ins accumulate.  The single source of truth is the JSON file.
 */
import calibration from './data/divisors.json';

export type Divisors = {
  premium: number;
  adSupported: number;
  programmed: number;
  airplay: number;
  sales: number;
};

export const divisors: Divisors =
  calibration.model.currentDivisors as Divisors;

export const calibrationMeta = {
  generatedAt:           calibration.generatedAt,
  weeksLoaded:           calibration.training.weeksLoaded,
  weeksWithDrillins:     calibration.training.weeksWithDrillins,
  totalDrillinSamples:   calibration.training.totalDrillinSamples,
  inSampleMAPE:          calibration.training.inSampleMAPE,
  confidencePct:         calibration.training.confidencePct,
  heldOutWeek:           calibration.training.heldOutWeek,
  priorDivisors:         calibration.model.priorDivisors,
};

export const thresholdHistory = calibration.thresholdHistory as Array<{
  weekEnding: string;
  weekStart: string;
  thresholds: Record<string, number>;
}>;

export function calculatePoints(
  premiumStreams: number,
  adSupportedStreams: number,
  programmedStreams: number,
  airplayAudience: number,
  sales: number
): number {
  return (
    premiumStreams / divisors.premium +
    adSupportedStreams / divisors.adSupported +
    programmedStreams / divisors.programmed +
    airplayAudience / divisors.airplay +
    sales / divisors.sales
  );
}

export function predictPosition(
  targetPoints: number,
  thresholds: Record<number, number>
): number {
  const positions = Object.entries(thresholds)
    .map(([pos, pts]) => ({ pos: parseInt(pos), pts }))
    .sort((a, b) => a.pts - b.pts);
  if (targetPoints >= positions[positions.length - 1].pts) return positions[positions.length - 1].pos;
  for (let i = 0; i < positions.length - 1; i++) {
    if (targetPoints >= positions[i].pts && targetPoints < positions[i + 1].pts) {
      const ratio =
        (targetPoints - positions[i].pts) /
        (positions[i + 1].pts - positions[i].pts);
      return positions[i].pos - ratio * (positions[i].pos - positions[i + 1].pos);
    }
  }
  return 100;
}

export function distanceToThreshold(currentPoints: number, thresholdPoints: number): string {
  const diff = currentPoints - thresholdPoints;
  return diff >= 0
    ? `+${Math.floor(diff).toLocaleString()} pts surplus`
    : `-${Math.floor(Math.abs(diff)).toLocaleString()} pts to threshold`;
}

export function pathToTarget(
  currentPoints: number,
  targetThresholdPoints: number,
  currentMetrics: {
    subStreams: number;
    adStreams: number;
    programmedStreams: number;
    airplayAudience: number;
    sales: number;
  }
) {
  const gap = Math.max(0, targetThresholdPoints - currentPoints);
  if (gap <= 0) {
    return {
      subStreamsNeeded: 0,
      adStreamsNeeded: 0,
      programmedStreamsNeeded: 0,
      airplayNeeded: 0,
      salesNeeded: 0,
    };
  }
  return {
    subStreamsNeeded:        gap * divisors.premium,
    adStreamsNeeded:         gap * divisors.adSupported,
    programmedStreamsNeeded: gap * divisors.programmed,
    airplayNeeded:           gap * divisors.airplay,
    salesNeeded:             gap * divisors.sales,
  };
}
