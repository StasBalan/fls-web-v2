import { FaceitMatchStats } from "@/types";
import { roundTo2Decimals } from "./roundTo2Decimals";

export type Stats = {
  wins: number;
  losses: number;
  winRate: number;
  avgKills: number;
  avgKD: number;
  avgKR: number;
  avgHS: number;
  adr: number;
};

type StatsFromMatch = Pick<
  FaceitMatchStats,
  "isWin" | "kills" | "deaths" | "assists" | "rounds" | "hs" | "damage"
>;

export const getStatsFromMatches = (matches: StatsFromMatch[]): Stats => {
  if (matches.length === 0) {
    return {
      wins: 0,
      losses: 0,
      winRate: 0,
      avgKills: 0,
      avgKD: 0,
      avgKR: 0,
      avgHS: 0,
      adr: 0,
    };
  }

  const sumOfStats = matches.reduce(
    (stats, match) => {
      if (match.isWin) {
        stats.wins += 1;
      } else {
        stats.losses += 1;
      }

      stats.kills += match.kills;
      stats.deaths += match.deaths;
      stats.assists += match.assists;
      stats.rounds += match.rounds;
      stats.headshots += match.hs;
      stats.damage += match.damage;

      return stats;
    },
    {
      wins: 0,
      losses: 0,
      kills: 0,
      deaths: 0,
      assists: 0,
      rounds: 0,
      headshots: 0,
      damage: 0,
    }
  );

  const matchesCount = matches.length;

  return {
    wins: sumOfStats.wins,
    losses: sumOfStats.losses,
    winRate: Math.floor((sumOfStats.wins / matchesCount) * 100),
    avgKills: Math.round(sumOfStats.kills / matchesCount),
    avgKD: roundTo2Decimals(sumOfStats.kills / sumOfStats.deaths),
    avgKR: roundTo2Decimals(sumOfStats.kills / sumOfStats.rounds),
    avgHS: Math.round((sumOfStats.headshots / sumOfStats.kills) * 100),
    adr: roundTo2Decimals(sumOfStats.damage / sumOfStats.rounds),
  };
};
