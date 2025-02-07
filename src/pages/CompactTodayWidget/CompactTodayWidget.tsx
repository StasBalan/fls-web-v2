import { CompactTodayWidget as CompactTodayWidgetComponent } from "@/components/CompactTodayWidget";
import { useFullWidgetInfo } from "@/features";
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

  const { profile, matches, regionRanking } = useFullWidgetInfo(nickname, true);

  useEffect(() => {
    eventService.track("view_widget_page", { type: "compact-today" });
  }, []);

  useEffect(() => {
    if (profile?.games?.cs2?.faceit_elo) {
      eventService.track(
        "widget_update_data",
        {
          type: "compact-today",
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

  if (regionRanking === null) {
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
    regionRanking === undefined
  ) {
    return <></>;
  }

  const elo = profile.games.cs2.faceit_elo;
  const level = profile.games.cs2.skill_level;

  return (
    <>
      <CompactTodayWidgetComponent
        elo={elo}
        level={level}
        rank={regionRanking}
        todayMatchesData={getTodayMatchesStats(matches, elo)}
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
