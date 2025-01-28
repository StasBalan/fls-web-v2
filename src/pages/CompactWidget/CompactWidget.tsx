import { useEffect, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import { CompactWidget as CompactWidgetComponent } from "@/components/CompactWidget";

export function CompactWidget() {
  const search = useSearch({ strict: false });
  const nickname: string | undefined = search?.nickname;

  console.log(nickname);

  const [elo, setElo] = useState(4200);
  const [rank, setRank] = useState(200);

  useEffect(() => {
    setTimeout(() => {
      setElo(4392);
      setRank(65);
    }, 5000);
  }, []);

  // nesting components with error messages

  return (
    <>
      <CompactWidgetComponent
        elo={elo}
        level={10}
        rank={rank}
        transparent={true}
      />
    </>
  );
}
