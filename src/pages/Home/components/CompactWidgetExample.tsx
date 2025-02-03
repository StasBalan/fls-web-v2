import { CompactWidget } from "@/components/CompactWidget";
import { useEffect, useState } from "react";

export function CompactWidgetExample({
  data,
  duration,
  rounded,
  hideChallenger,
  hideRank,
  hideChallengerIconBorder,
}: {
  data: Array<{
    elo: number;
    level: number;
    rank: number;
  }>;
  duration: number;
  rounded: boolean;
  hideChallenger: boolean;
  hideRank: boolean;
  hideChallengerIconBorder: boolean;
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
    <CompactWidget
      elo={currentData.elo}
      level={currentData.elo}
      rank={currentData.rank}
      transparent={false}
      rounded={rounded}
      hideChallenger={hideChallenger}
      hideRank={hideRank}
      hideChallengerIconBorder={hideChallengerIconBorder}
      isGiant={false}
    />
  );
}
