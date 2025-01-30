import { FaceitMatchStats } from "@/types";
import { mapMatchesToTodayStats } from "./mapMatchesToTodayStats";

export function getLastMatchesStats(matches: FaceitMatchStats[]) {
  const last20Matches = matches.slice(0, 20);
  const stats = mapMatchesToTodayStats(last20Matches);

  return {
    winRate: stats.wr,
    avgKills: stats.kAvg,
    avgHS: stats.hsAvg,
    avgKD: stats.kdAvg,
    avgKR: stats.krAvg,
  };
}
