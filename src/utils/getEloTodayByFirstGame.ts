import { FaceitMatchStats } from "@/types";

export const getEloTodayByFirstGame = (todayMatches: FaceitMatchStats[]) => {
  if (todayMatches.length === 0) {
    return null;
  }

  for (let i = todayMatches.length - 1; i >= 0; i--) {
    const { elo, elo_delta } = todayMatches[i];

    if (elo !== undefined && elo_delta !== undefined) {
      return elo - elo_delta;
    }
  }

  return null;
};
