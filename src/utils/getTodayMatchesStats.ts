import { FaceitMatchStats } from "@/types";
import { getTodayStartingPointDate } from "./getTodaysStartingPointDate";
import { getEloBeforeToday } from "./getEloBeforeToday";
import { mapMatchesToTodayStats } from "./mapMatchesToTodayStats";
import { eventService } from "@/services";

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

  const eloDelta = todayMatches.reduce((acc, match) => {
    if (match.elo_delta) {
      acc += match.elo_delta;
    }

    return acc;
  }, 0);

  eventService.track("elo_diff_variants", {
    eloDiff: eloDiff,
    eloDelta: eloDelta,
  });

  return {
    wins: stats.w,
    losses: stats.l,
    gain: eloDelta, // new variant with elo_delta
    avgKills: stats.kAvg,
    avgKD: stats.kdAvg,
  };
}
