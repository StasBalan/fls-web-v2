import { FaceitInternalMatchStats } from "@/types";
import { getTodayStartingPointDate } from "./getTodaysStartingPointDate";

import { getStatsFromMatches } from "./getStatsFromMatches";

export function getTodayInternalMatchesStats(
  matches: FaceitInternalMatchStats[]
) {
  const todayMatches = matches.filter(
    (m) => m["Match Finished At"] > getTodayStartingPointDate()
  );

  const stats = getStatsFromMatches(
    todayMatches.map((match) => ({
      isWin: match.Result === "1",
      kills: Number(match.Kills),
      deaths: Number(match.Deaths),
      assists: Number(match.Assists),
      rounds: Number(match.Rounds),
      hs: Number(match.Headshots),
      damage: Number(match.Damage),
    }))
  );

  return {
    wins: stats.wins,
    losses: stats.losses,
    avgKills: stats.avgKills,
    avgKD: stats.avgKD,
    adr: stats.adr,
    gain: 0,
  };
}
