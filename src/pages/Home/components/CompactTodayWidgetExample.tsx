import { CompactTodayWidget } from "@/components/CompactTodayWidget";
import { useEffect, useState } from "react";

export function CompactTodayWidgetExample({
  data,
  duration,
  rounded,
  hideChallenger,
  hideRank,
  hideWinsLosses,
}: {
  data: Array<{
    elo: number;
    level: number;
    rank: number;
    countryRank: number;
    todayMatchesData: {
      wins: number;
      losses: number;
      gain: number;
      avgKills: number;
      avgKD: number;
    };
  }>;
  duration: number;
  rounded: boolean;
  hideChallenger: boolean;
  hideRank: boolean;
  hideWinsLosses: boolean;
}) {
  const [dataIdx, setDataIdx] = useState(0);

  const currentData = data[dataIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setDataIdx((prevDataIdx) => {
        if (prevDataIdx + 1 === data.length) {
          return 0;
        } else {
          return prevDataIdx + 1;
        }
      });
    }, duration);

    return () => {
      clearInterval(timer);
    };
  }, [data, duration]);

  return (
    <CompactTodayWidget
      elo={currentData.elo}
      level={currentData.elo}
      rank={currentData.rank}
      countryRank={currentData.countryRank}
      todayMatchesData={currentData.todayMatchesData}
      transparent={false}
      rounded={rounded}
      hideChallenger={hideChallenger}
      hideRank={hideRank}
      hideWinsLosses={hideWinsLosses}
      isGiant={false}
    />
  );
}
