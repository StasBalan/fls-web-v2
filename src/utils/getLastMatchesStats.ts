import { FaceitMatchStats } from "@/types";
import { getStatsFromMatches } from "./getStatsFromMatches";

export function getLastMatchesStats(matches: FaceitMatchStats[]) {
  const last30Matches = matches.slice(0, 30);

  const stats = getStatsFromMatches(last30Matches);

  return {
    winRate: stats.winRate,
    avgKills: stats.avgKills,
    avgHS: stats.avgHS,
    avgKD: stats.avgKD,
    avgKR: stats.avgKR,
    adr: stats.adr,
  };
}
