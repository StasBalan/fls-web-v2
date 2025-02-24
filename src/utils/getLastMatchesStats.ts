import { FaceitMatchStats } from "@/types";
import { mapMatchesToTodayStats } from "./mapMatchesToTodayStats";

export function getLastMatchesStats(matches: FaceitMatchStats[]) {
  const last30Matches = matches.slice(0, 30);
  const stats = mapMatchesToTodayStats(last30Matches);

  return {
    winRate: stats.wr,
    avgKills: stats.kAvg,
    avgHS: stats.hsAvg,
    avgKD: stats.kdAvg,
    avgKR: stats.krAvg,
  };
}
