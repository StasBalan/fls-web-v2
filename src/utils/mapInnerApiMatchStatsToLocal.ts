import { FaceitMatchStats } from "@/types";

export function mapInnerApiMatchStatsToLocal(
  stats: Record<string, string> & { date: number }
): FaceitMatchStats {
  return {
    matchId: stats["matchId"],
    map: stats["i1"],
    isWin: stats["teamId"] === stats["i2"],
    elo: stats["elo"] === undefined ? undefined : Number(stats["elo"]),
    elo_delta:
      stats["elo_delta"] === undefined ? undefined : Number(stats["elo_delta"]),
    kills: Number(stats["i6"]),
    deaths: Number(stats["i8"]),
    assists: Number(stats["i7"]),
    kd: Number(stats["c2"]),
    kr: Number(stats["c3"]),
    hs: Number(stats["i13"]),
    hsPercent: Number(stats["c4"]),
    date: stats["date"],
  };
}
