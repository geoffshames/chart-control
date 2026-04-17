import { divisors } from './data/week-2026-04-09';

export function calculatePoints(
  subStreams: number,
  adStreams: number,
  programmedStreams: number,
  airplayAudience: number,
  sales: number
): number {
  return (
    subStreams / divisors.subscription +
    adStreams / divisors.adSupported +
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

  if (targetPoints >= positions[positions.length - 1].pts) {
    return positions[positions.length - 1].pos;
  }

  for (let i = 0; i < positions.length - 1; i++) {
    if (
      targetPoints >= positions[i].pts &&
      targetPoints < positions[i + 1].pts
    ) {
      const ratio =
        (targetPoints - positions[i].pts) /
        (positions[i + 1].pts - positions[i].pts);
      return positions[i].pos - ratio * (positions[i].pos - positions[i + 1].pos);
    }
  }

  return 100;
}

export function distanceToThreshold(
  currentPoints: number,
  thresholdPoints: number
): string {
  const diff = currentPoints - thresholdPoints;
  if (diff >= 0) {
    return `+${Math.floor(diff).toLocaleString()} pts surplus`;
  } else {
    return `-${Math.floor(Math.abs(diff)).toLocaleString()} pts to threshold`;
  }
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
): {
  subStreamsNeeded: number;
  adStreamsNeeded: number;
  programmedStreamsNeeded: number;
  airplayNeeded: number;
  salesNeeded: number;
} {
  const gap = targetThresholdPoints - currentPoints;

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
    subStreamsNeeded: gap * divisors.subscription,
    adStreamsNeeded: gap * divisors.adSupported,
    programmedStreamsNeeded: gap * divisors.programmed,
    airplayNeeded: gap * divisors.airplay,
    salesNeeded: gap * divisors.sales,
  };
}
