import { FaceitInternalMatchStats } from "@/types";
import { getStatsFromMatches } from "./getStatsFromMatches";

export function getLastInternalMatchesStats(
  matches: FaceitInternalMatchStats[]
) {
  const stats = getStatsFromMatches(
    matches.map((match) => ({
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
    winRate: stats.winRate,
    avgKills: stats.avgKills,
    avgHS: stats.avgHS,
    avgKD: stats.avgKD,
    avgKR: stats.avgKR,
    adr: stats.adr,
  };
}
