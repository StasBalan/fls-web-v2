import { useEffect } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { CompactWidget as CompactWidgetComponent } from "@/components/CompactWidget";

import { eventService } from "@/services";
import { useCompactWidgetData } from "@/features/widget-data";
import { Loader } from "@/components/Loader";

const routeApi = getRouteApi("/widget-compact");

export function CompactWidget() {
  const { nickname, hideRank, hideChallenger, rounded, transparent, isGiant } =
    routeApi.useSearch();

  const { profileQuery, regionRankQuery } = useCompactWidgetData(
    nickname,
    true
  );

  useEffect(() => {
    eventService.track("view_widget_page", { type: "compact" });
  }, []);

  useEffect(() => {
    if (profileQuery.data?.games?.cs2?.faceit_elo) {
      eventService.track(
        "widget_update_data",
        {
          type: "compact",
          nickname: nickname,
          elo: profileQuery.data.games.cs2.faceit_elo,
        },
        { user_id: nickname }
      );
    }
  }, [nickname, profileQuery.data?.games?.cs2?.faceit_elo]);

  if (!nickname) {
    return <div>Error: No nickname found in URL.</div>;
  }

  if (profileQuery.isLoading || regionRankQuery.isLoading) {
    return <Loader />; // loading
  }

  if (profileQuery.data === undefined) {
    if (!profileQuery.isLoading) {
      return (
        <div>
          Error: Can't find FACEIT profile with nickname: <b>{nickname}</b>.
        </div>
      );
    }

    return <></>;
  }

  if (nickname && profileQuery.data && !profileQuery.data.games?.cs2) {
    return (
      <div>
        Error: Profile with nickname <b>'{nickname}'</b> does not have cs2 game
        enabled.
      </div>
    );
  }

  const elo = profileQuery.data.games.cs2.faceit_elo;
  const level = profileQuery.data.games.cs2.skill_level;

  return (
    <>
      <CompactWidgetComponent
        elo={elo}
        level={level}
        rank={regionRankQuery.data || 2000} // change
        hideRank={hideRank}
        hideChallenger={hideChallenger}
        rounded={rounded}
        transparent={transparent}
        isGiant={isGiant}
      />
    </>
  );
}
