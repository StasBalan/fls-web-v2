import {FaceitMatchStats} from '@/types';

export function getEloBeforeToday(lastMatches: FaceitMatchStats[], todayMatchesAmount: number): number | null {
  if (lastMatches.length <= todayMatchesAmount) {
    return null;
  }

  for (let i = todayMatchesAmount; i < lastMatches.length; i++) {
    if (lastMatches[i].elo !== undefined) {
      return lastMatches[i].elo;
    }
  }

  return null;
}
