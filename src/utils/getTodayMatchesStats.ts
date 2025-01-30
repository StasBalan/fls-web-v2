import { FaceitMatchStats } from "@/types";
import { getTodayStartingPointDate } from "./getTodaysStartingPointDate";
import { getEloBeforeToday } from "./getEloBeforeToday";
import { mapMatchesToTodayStats } from "./mapMatchesToTodayStats";

export function getTodayMatchesStats(matches: FaceitMatchStats[], elo: number) {
  const todayMatches = matches.filter(
    (m) => m.date > getTodayStartingPointDate()
  );
  const todayMatchesAmount = todayMatches.length;
  const eloBeforeToday = getEloBeforeToday(matches, todayMatchesAmount);
  const eloDiff =
    todayMatchesAmount === 0
      ? 0
      : eloBeforeToday !== null
        ? elo - eloBeforeToday
        : 0;

  const stats = mapMatchesToTodayStats(todayMatches);

  return {
    wins: stats.w,
    losses: stats.l,
    gain: eloDiff,
    avgKills: stats.kAvg,
    avgKD: stats.kdAvg,
  };
}
