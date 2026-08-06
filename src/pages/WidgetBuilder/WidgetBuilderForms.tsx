import { Loader } from "@/components/Loader";
import { useRichWidgetData } from "@/features/widget-data";
import { ErrorHint } from "./ErrorHint";
import { CompactWidgetBuilder } from "@/components/CompactWidgetBuilder";
import { RichWidgetBuilder } from "@/components/RichWidgetBuilder";
import {
  getLastInternalMatchesStats,
  getTodayInternalMatchesStats,
} from "@/utils";
import { CompactTodayWidgetBuilder } from "@/components/CompactTodayWidgetBuilder";

export function WidgetBuilderForms({
  nickname,
  widgetType,
}: {
  nickname: string;
  widgetType: string;
}) {
  const {
    profileQuery,
    matchesQuery,
    internalMatchesStatsQuery,
    regionRankQuery,
    countryRankQuery,
    kdrQuery,
  } = useRichWidgetData(nickname, true);

  if (!nickname) {
    return <></>;
  }

  if (
    profileQuery.isLoading ||
    regionRankQuery.isLoading ||
    countryRankQuery.isLoading ||
    kdrQuery.isLoading ||
    (matchesQuery.isLoading && matchesQuery.errorUpdateCount === 0) ||
    internalMatchesStatsQuery.isLoading
  ) {
    return <Loader />;
  }

  if (profileQuery.data === undefined) {
    if (!profileQuery.isLoading) {
      return (
        <ErrorHint
          header={"Error: NO FACEIT PROFILE"}
          description={
            <div>
              We can't find FACEIT profile with nickname <b>'{nickname}'</b>.
              Please make sure you have entered the correct nickname.
            </div>
          }
        />
      );
    }

    return <></>;
  }

  if (nickname && profileQuery.data && !profileQuery.data.games?.cs2) {
    return (
      <ErrorHint
        header={"Error: NO CS2 GAME IN FACEIT PROFILE"}
        description={
          <div>
            Profile with nickname <b>'{nickname}'</b> does not have cs2 game
            enabled.
          </div>
        }
      />
    );
  }

  if (widgetType === "compact") {
    return (
      <CompactWidgetBuilder
        nickname={nickname}
        elo={profileQuery.data.games.cs2.faceit_elo}
        level={profileQuery.data.games.cs2.skill_level}
        rank={regionRankQuery.data || 0}
        countryRank={countryRankQuery.data || 0}
      />
    );
  }

  if (widgetType === "rich") {
    return (
      <RichWidgetBuilder
        nickname={nickname}
        data={{
          elo: profileQuery.data.games.cs2.faceit_elo,
          level: profileQuery.data.games.cs2.skill_level,
          rank: regionRankQuery.data || 0,
          kdr: kdrQuery.data || 1,
          lastMatchesData: getLastInternalMatchesStats(
            internalMatchesStatsQuery.data || [],
          ),
          todayMatchesData: getTodayInternalMatchesStats(
            internalMatchesStatsQuery.data || [],
          ),
          countryCode: profileQuery.data.country,
          countryRank: countryRankQuery.data || 0,
        }}
      />
    );
  }

  if (widgetType === "compact-today") {
    return (
      <CompactTodayWidgetBuilder
        nickname={nickname}
        elo={profileQuery.data.games.cs2.faceit_elo}
        level={profileQuery.data.games.cs2.skill_level}
        todayMatchesData={getTodayInternalMatchesStats(
          internalMatchesStatsQuery.data || [],
        )}
        rank={regionRankQuery.data || 0}
        countryRank={countryRankQuery.data || 0}
      />
    );
  }

  return <></>;
}
