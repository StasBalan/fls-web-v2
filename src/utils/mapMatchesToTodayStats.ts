import {FaceitMatchStats} from '@/types';

function roundTo2Decimals(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function mapMatchesToTodayStats(matches: FaceitMatchStats[]) {
  const sums = matches.reduce<{
    w: number;
    l: number;
    k: number;
    d: number;
    a: number;
    kd: number;
    kr: number;
    hsP: number;
  }>(
    (acc, m) => {
      if (m.isWin) {
        acc.w += 1;
      } else {
        acc.l += 1;
      }
      acc.k += m.kills;
      acc.d += m.deaths;
      acc.a += m.assists;
      acc.kd += m.kd;
      acc.kr += m.kr;
      acc.hsP += m.hsPercent;

      return acc;
    },
    {
      w: 0,
      l: 0,
      k: 0,
      d: 0,
      a: 0,
      kd: 0,
      kr: 0,
      hsP: 0,
    },
  );

  const length = matches.length;

  if (length === 0) {
    return {
      w: 0,
      l: 0,
      wr: 0,
      kAvg: 0,
      kdAvg: 0,
      krAvg: 0,
      hsAvg: 0,
    };
  }

  return {
    w: sums.w,
    l: sums.l,
    wr: Math.floor((sums.w / length) * 100),
    kAvg: Math.floor(sums.k / length), // or round?
    kdAvg: roundTo2Decimals(sums.kd / length).toFixed(2),
    krAvg: roundTo2Decimals(sums.kr / length).toFixed(2),
    hsAvg: Math.floor(sums.hsP / length),
  };
}
