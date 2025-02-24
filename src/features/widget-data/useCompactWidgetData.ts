import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useProfile } from "./useProfile";
import { useRegionRank } from "./useRegionRank";

export function useCompactWidgetData(
  nickname: string,
  shouldRepeat: boolean = true
) {
  const queryClient = useQueryClient();

  const profileQuery = useProfile(nickname);
  const regionRankQuery = useRegionRank(
    profileQuery.data?.player_id,
    profileQuery.data?.games.cs2.region
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (shouldRepeat) {
      timeout = setInterval(() => {
        queryClient.invalidateQueries({ queryKey: ["widget-data/profile"] });
      }, 30000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [queryClient, shouldRepeat]);

  useEffect(() => {
    if (profileQuery.data?.games?.cs2?.faceit_elo) {
      queryClient.invalidateQueries({ queryKey: ["widget-data/rank/region"] });
    }
  }, [queryClient, profileQuery.data?.games?.cs2?.faceit_elo]);

  return {
    profileQuery,
    regionRankQuery,
  };
}
