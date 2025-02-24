import { CompactTodayWidget as CompactTodayWidgetComponent } from "@/components/CompactTodayWidget";
import { useRichWidgetData } from "@/features/widget-data";
import { eventService } from "@/services";
import { getTodayMatchesStats } from "@/utils";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";

const routeApi = getRouteApi("/widget-compact-today");

export function CompactTodayWidget() {
  const {
    nickname,
    hideRank,
    hideChallenger,
    hideWinsLosses,
    transparent,
    rounded,
    isGiant,
  } = routeApi.useSearch();

  const { profileQuery, matchesQuery, regionRankQuery } = useRichWidgetData(
    nickname,
    true
  );

  useEffect(() => {
    eventService.track("view_widget_page", { type: "compact-today" });
  }, []);

  useEffect(() => {
    if (profileQuery.data?.games?.cs2?.faceit_elo) {
      eventService.track(
        "widget_update_data",
        {
          type: "compact-today",
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

  if (
    profileQuery.isLoading ||
    regionRankQuery.isLoading ||
    (matchesQuery.isLoading && matchesQuery.errorUpdateCount === 0)
  ) {
    return <></>; // loading
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
      <CompactTodayWidgetComponent
        elo={elo}
        level={level}
        rank={regionRankQuery.data || 2000} // change
        todayMatchesData={getTodayMatchesStats(matchesQuery.data || [], elo)}
        hideRank={hideRank}
        hideChallenger={hideChallenger}
        hideWinsLosses={hideWinsLosses}
        transparent={transparent}
        rounded={rounded}
        isGiant={isGiant}
      />
    </>
  );
}
