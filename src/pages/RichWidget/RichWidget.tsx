import { RichWidget as RichWidgetComponent } from "@/components/RichWidget";
import { useRichWidgetData } from "@/features/widget-data";
import { eventService } from "@/services";
import { getLastMatchesStats, getTodayMatchesStats } from "@/utils";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";

const routeApi = getRouteApi("/widget-rich");

export function RichWidget() {
  const { nickname, hideRank, hideChallenger, transparent } =
    routeApi.useSearch();

  const {
    profileQuery,
    matchesQuery,
    regionRankQuery,
    countryRankQuery,
    kdrQuery,
  } = useRichWidgetData(nickname, true);

  useEffect(() => {
    eventService.track("view_widget_page", { type: "rich" });
  }, []);

  useEffect(() => {
    if (profileQuery.data?.games?.cs2?.faceit_elo) {
      eventService.track(
        "widget_update_data",
        {
          type: "rich",
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
    countryRankQuery.isLoading ||
    kdrQuery.isLoading ||
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
      <RichWidgetComponent
        elo={elo}
        level={level}
        rank={regionRankQuery.data || 2000} // change
        kdr={kdrQuery.data || 1} // change
        lastMatchesData={getLastMatchesStats(matchesQuery.data || [])}
        todayMatchesData={getTodayMatchesStats(matchesQuery.data || [], elo)}
        countryCode={profileQuery.data.country}
        countryRank={countryRankQuery.data || 2000} // change
        hideRank={hideRank}
        hideChallenger={hideChallenger}
        transparent={transparent}
      />
    </>
  );
}
