import { FaceitMatchStats } from "@/types";
import { getTodayStartingPointDate } from "./getTodaysStartingPointDate";
import { getEloBeforeToday } from "./getEloBeforeToday";
import { mapMatchesToTodayStats } from "./mapMatchesToTodayStats";

import { getEloTodayByFirstGame } from "./getEloTodayByFirstGame";
import { eventService } from "@/services";

export function getTodayMatchesStats(matches: FaceitMatchStats[], elo: number) {
  const todayMatches = matches.filter(
    (m) => m.date > getTodayStartingPointDate()
  );
  const todayMatchesAmount = todayMatches.length;
  const eloBeforeToday = getEloBeforeToday(matches, todayMatchesAmount);

  const startElo =
    eloBeforeToday !== null
      ? eloBeforeToday
      : getEloTodayByFirstGame(todayMatches);

  if (eloBeforeToday === null) {
    eventService.track("elo_before_today_null", {
      secondMethod: getEloTodayByFirstGame(todayMatches),
    });
  }

  const eloDiff =
    todayMatchesAmount === 0 ? 0 : startElo !== null ? elo - startElo : 0;

  const stats = mapMatchesToTodayStats(todayMatches);

  return {
    wins: stats.w,
    losses: stats.l,
    gain: eloDiff,
    avgKills: stats.kAvg,
    avgKD: stats.kdAvg,
  };
}
