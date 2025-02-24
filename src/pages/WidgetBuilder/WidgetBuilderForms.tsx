import { Loader } from "@/components/Loader";
import { useRichWidgetData } from "@/features/widget-data";
import { ErrorHint } from "./ErrorHint";
import { CompactWidgetBuilder } from "@/components/CompactWidgetBuilder";
import { RichWidgetBuilder } from "@/components/RichWidgetBuilder";
import { getLastMatchesStats, getTodayMatchesStats } from "@/utils";
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
    (matchesQuery.isLoading && matchesQuery.errorUpdateCount === 0)
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
        rank={regionRankQuery.data || 2000}
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
          rank: regionRankQuery.data || 2000,
          kdr: kdrQuery.data || 1,
          lastMatchesData: getLastMatchesStats(matchesQuery.data || []),
          todayMatchesData: getTodayMatchesStats(
            matchesQuery.data || [],
            profileQuery.data.games.cs2.faceit_elo
          ),
          countryCode: profileQuery.data.country,
          countryRank: countryRankQuery.data || 2000,
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
        todayMatchesData={getTodayMatchesStats(
          matchesQuery.data || [],
          profileQuery.data.games.cs2.faceit_elo
        )}
        rank={regionRankQuery.data || 2000}
      />
    );
  }

  return <></>;
}
