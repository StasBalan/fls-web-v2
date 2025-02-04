import { RichWidget } from "@/components/RichWidget";
import { useEffect, useState } from "react";

const widgetData = [
  {
    elo: 4289,
    level: 10,
    rank: 22,
    kdr: 1.45,
    lastMatchesData: {
      winRate: 60,
      avgHS: 78,
      avgKD: 1.24,
      avgKills: 23,
      avgKR: 1.15,
    },
    todayMatchesData: {
      gain: 60,
      wins: 3,
      losses: 1,
      avgKD: 1.41,
      avgKills: 26,
    },
    countryCode: "by",
    countryRank: 14,
  },
  {
    elo: 4318,
    level: 10,
    rank: 18,
    kdr: 1.46,
    lastMatchesData: {
      winRate: 65,
      avgHS: 80,
      avgKD: 1.24,
      avgKills: 24,
      avgKR: 1.09,
    },
    todayMatchesData: {
      gain: 89,
      wins: 4,
      losses: 1,
      avgKD: 1.52,
      avgKills: 27,
    },
    countryCode: "by",
    countryRank: 10,
  },
  {
    elo: 4293,
    level: 10,
    rank: 21,
    kdr: 1.45,
    lastMatchesData: {
      winRate: 55,
      avgHS: 70,
      avgKD: 1.05,
      avgKills: 18,
      avgKR: 1.15,
    },
    todayMatchesData: {
      gain: -40,
      wins: 2,
      losses: 6,
      avgKD: 0.92,
      avgKills: 17,
    },
    countryCode: "by",
    countryRank: 17,
  },
];

export function RichWidgetExample() {
  const [dataIdx, setDataIdx] = useState(0);

  const data = widgetData[dataIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setDataIdx((prevDataIdx) => {
        if (prevDataIdx + 1 === widgetData.length) {
          return 0;
        } else {
          return prevDataIdx + 1;
        }
      });
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <RichWidget
      elo={data.elo}
      level={data.elo}
      rank={data.rank}
      kdr={data.kdr}
      lastMatchesData={data.lastMatchesData}
      todayMatchesData={data.todayMatchesData}
      countryCode={data.countryCode}
      countryRank={data.countryRank}
      transparent={false}
      hideChallenger={false}
      hideRank={false}
    />
  );
}
