/**
 * Genre normalization — collapses Luminate's verbose taxonomy into a short
 * canonical list we benchmark against.  If you add new canonical genres,
 * update the color map in TiktokFingerprint.tsx too.
 */

export type CanonicalGenre =
  | 'POP'
  | 'COUNTRY'
  | 'ROCK'
  | 'HIP-HOP'
  | 'R&B'
  | 'LATIN'
  | 'DANCE'
  | 'OTHER';

export function normalizeGenre(raw: string | undefined | null): CanonicalGenre {
  if (!raw) return 'OTHER';
  const g = raw.trim().toLowerCase();

  // Country
  if (g.includes('country')) return 'COUNTRY';

  // Latin — any flavor
  if (g.includes('latin') || g.includes('regional mexican') || g.includes('reggaeton')) return 'LATIN';

  // Hip-Hop / Rap / R&B — Luminate often merges these
  if (g.includes('rap') || g.includes('hip-hop') || g.includes('hip hop')) {
    // If the bucket explicitly has "R&B" before the slash, prefer R&B; otherwise Hip-Hop
    if (g.startsWith('r&b') && g.indexOf('hip') > 3) return 'HIP-HOP'; // "R&B/Hip-Hop" bucket
    return 'HIP-HOP';
  }
  if (g.includes('r&b') || g === 'soul') return 'R&B';

  // Rock
  if (g.includes('rock')) return 'ROCK';

  // Dance / Electronic
  if (g.includes('dance') || g.includes('electronic') || g.includes('edm') || g === 'house') return 'DANCE';

  // Pop — fallback for "Pop", "Adult Pop", etc.
  if (g === 'pop' || g.includes('pop')) return 'POP';

  return 'OTHER';
}

/** Canonical display order — sorted loosely by US radio-friendliness */
export const GENRE_ORDER: CanonicalGenre[] = [
  'COUNTRY',
  'ROCK',
  'POP',
  'R&B',
  'HIP-HOP',
  'LATIN',
  'DANCE',
  'OTHER',
];

/** Brand-aligned color per genre for visual mapping on charts/benchmarks */
export const GENRE_COLORS: Record<CanonicalGenre, string> = {
  COUNTRY:    '#00E676',  // tier-green (heartland / US radio)
  ROCK:       '#00BFA5',  // teal (rock heartland)
  POP:        '#FFD600',  // tier-yellow (mainstream mix)
  'R&B':      '#FF9100',  // tier-orange
  'HIP-HOP':  '#FF6B00',  // deeper orange
  LATIN:      '#FF1744',  // tier-red (global-viral)
  DANCE:      '#E91E63',  // pink
  OTHER:      '#B8B8C0',  // muted gray
};

/**
 * Given samples, compute per-genre benchmark statistics for the
 * creates/point ratio.  Returns genres sorted by median ratio ascending.
 */
export interface BenchmarkStat {
  genre: CanonicalGenre;
  n: number;
  median: number;
  min: number;
  max: number;
  meanPoints: number;
}

export function computeBenchmarks<T extends { tiktokCreates: number; songEquivalent: number; genre: string }>(
  samples: T[]
): BenchmarkStat[] {
  const buckets = new Map<CanonicalGenre, number[]>();
  const pointsBuckets = new Map<CanonicalGenre, number[]>();
  for (const s of samples) {
    const g = normalizeGenre(s.genre);
    const ratio = s.tiktokCreates / s.songEquivalent;
    if (!buckets.has(g)) { buckets.set(g, []); pointsBuckets.set(g, []); }
    buckets.get(g)!.push(ratio);
    pointsBuckets.get(g)!.push(s.songEquivalent);
  }

  const out: BenchmarkStat[] = [];
  for (const [genre, ratios] of buckets) {
    const sorted = ratios.slice().sort((a, b) => a - b);
    const median = sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];
    const pts = pointsBuckets.get(genre)!;
    out.push({
      genre,
      n: sorted.length,
      median,
      min: sorted[0],
      max: sorted[sorted.length - 1],
      meanPoints: pts.reduce((a, b) => a + b, 0) / pts.length,
    });
  }
  // Ascending by median — cheap-to-chart genres first
  return out.sort((a, b) => a.median - b.median);
}

/**
 * For a single song, return how its ratio compares to its genre median.
 * Positive = more TikTok creates per point than typical for the genre
 * (cultural spread outpacing US chart impact).
 * Negative = fewer TikTok creates per point than typical (more efficient
 * US chart conversion than its genre cohort — breakout signal).
 */
export function vsGenreBenchmark(
  song: { tiktokCreates: number; songEquivalent: number; genre: string },
  benchmarks: BenchmarkStat[]
): { diff: number; pct: number; nInGenre: number } | null {
  const g = normalizeGenre(song.genre);
  const bm = benchmarks.find((b) => b.genre === g);
  if (!bm || bm.n < 1) return null;
  const ratio = song.tiktokCreates / song.songEquivalent;
  const diff = ratio - bm.median;
  const pct = bm.median > 0 ? (diff / bm.median) * 100 : 0;
  return { diff, pct, nInGenre: bm.n };
}
