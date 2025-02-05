import { RichWidget as RichWidgetComponent } from "@/components/RichWidget";
import { useFullWidgetInfo } from "@/features";
import { eventService } from "@/services";
import { getLastMatchesStats, getTodayMatchesStats } from "@/utils";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";

const routeApi = getRouteApi("/widget-rich");

export function RichWidget() {
  const { nickname, hideRank, hideChallenger, transparent } =
    routeApi.useSearch();

  const { profile, matches, kdr, countryRanking, regionRanking } =
    useFullWidgetInfo(nickname, true);

  useEffect(() => {
    eventService.track("view_widget_page", { type: "rich" });
  }, []);

  useEffect(() => {
    if (profile?.games?.cs2?.faceit_elo) {
      eventService.track(
        "widget_update_data",
        {
          type: "rich",
          nickname: nickname,
          elo: profile.games.cs2.faceit_elo,
        },
        { user_id: nickname }
      );
    }
  }, [nickname, profile?.games?.cs2?.faceit_elo]);

  if (!nickname) {
    return <div>Error: No nickname found in URL.</div>;
  }

  if (profile === null) {
    return (
      <div>
        Error: Can't find FACEIT profile with nickname: <b>{nickname}</b>.
      </div>
    );
  }

  if (nickname && profile && !profile.games?.cs2) {
    return (
      <div>
        Error: Profile with nickname <b>'{nickname}'</b> does not have cs2 game
        enabled.
      </div>
    );
  }

  if (matches === null) {
    return (
      <div>
        Error: Can't find FACEIT matches for profile with nickname:{" "}
        <b>{nickname}</b>.
      </div>
    );
  }

  if (kdr === null || regionRanking === null || countryRanking === null) {
    return (
      <div>
        Error: Failed to get some statistics. <b>Please try to refresh page</b>.
      </div>
    );
  }

  if (
    profile === undefined ||
    regionRanking === undefined ||
    matches === undefined ||
    kdr === undefined ||
    regionRanking === undefined ||
    countryRanking === undefined
  ) {
    return <></>;
  }

  const elo = profile.games.cs2.faceit_elo;
  const level = profile.games.cs2.skill_level;

  return (
    <>
      <RichWidgetComponent
        elo={elo}
        level={level}
        rank={regionRanking}
        kdr={kdr}
        lastMatchesData={getLastMatchesStats(matches)}
        todayMatchesData={getTodayMatchesStats(matches, elo)}
        countryCode={profile.country}
        countryRank={countryRanking}
        hideRank={hideRank}
        hideChallenger={hideChallenger}
        transparent={transparent}
      />
    </>
  );
}
