import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useCountryRank } from "./useCountryRank";
import { useKDR } from "./useKDR";
import { useMatches } from "./useMatches";
import { useProfile } from "./useProfile";
import { useRegionRank } from "./useRegionRank";

export function useRichWidgetData(
  nickname: string,
  shouldRepeat: boolean = true
) {
  const queryClient = useQueryClient();

  const profileQuery = useProfile(nickname);
  const matchesQuery = useMatches(profileQuery.data?.player_id);
  const regionRankQuery = useRegionRank(
    profileQuery.data?.player_id,
    profileQuery.data?.games?.cs2?.region
  );
  const countryRankQuery = useCountryRank(
    profileQuery.data?.player_id,
    profileQuery.data?.games?.cs2?.region,
    profileQuery.data?.country
  );
  const kdrQuery = useKDR(profileQuery.data?.player_id);

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
      queryClient.invalidateQueries({ queryKey: ["widget-data/matches"] });
      queryClient.invalidateQueries({ queryKey: ["widget-data/rank/region"] });
      queryClient.invalidateQueries({ queryKey: ["widget-data/rank/country"] });
      queryClient.invalidateQueries({ queryKey: ["widget-data/kdr"] });
    }
  }, [queryClient, profileQuery.data?.games?.cs2?.faceit_elo]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (matchesQuery.isError) {
      timeout = setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["widget-data/matches"] });
      }, 30000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [queryClient, matchesQuery.isError]);

  return {
    profileQuery,
    matchesQuery,
    regionRankQuery,
    countryRankQuery,
    kdrQuery,
  };
}
