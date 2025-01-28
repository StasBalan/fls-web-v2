import clsx from "clsx";
import styles from "./BaseWidget.module.scss";
import { FaceitMatchStats, FaceitProfile } from "@/types";
import { SkillLevelAppearance } from "../SkillLevelAppearance/SkillLevelAppearance";
// import { getEloBeforeToday, getTodayStartingPointDate } from "@/utils";

export function BaseWidget({
  isTransparent,
  profile,
  // lastMatches,
  // kdr,
  // countryRanking,
}: {
  isTransparent: boolean;
  profile: FaceitProfile;
  lastMatches: FaceitMatchStats[];
  kdr: number;
  countryRanking: number;
}) {
  // const countryCode = profile.country;
  // const last20Matches = lastMatches.slice(0, 20);

  // const todayMatches = lastMatches.filter(
  //   (m) => m.date > getTodayStartingPointDate()
  // );
  // const todayMatchesAmount = todayMatches.length;

  // https://www.faceit.com/api/match/v2/match/1-a6223737-dd16-4b7e-afa0-ba6fb2824810 to get match id and find elo before that match in roaster object
  // const eloBeforeToday = getEloBeforeToday(lastMatches, todayMatchesAmount);
  // const eloDiff =
  //   todayMatchesAmount === 0
  //     ? 0
  //     : eloBeforeToday !== null
  //       ? profile.games.cs2.faceit_elo - eloBeforeToday
  //       : 0;

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(
          styles.container,
          isTransparent && styles.container_transparent
        )}
      >
        Base Widget {profile.games.cs2.faceit_elo}
        <SkillLevelAppearance level={0} rank={5} />
        <SkillLevelAppearance level={1} rank={5} />
        <SkillLevelAppearance level={2} rank={5} />
        <SkillLevelAppearance level={3} rank={5} />
        <SkillLevelAppearance level={4} rank={5} />
        <SkillLevelAppearance level={5} rank={5} />
        <SkillLevelAppearance level={6} rank={5} />
        <SkillLevelAppearance level={7} rank={5} />
        <SkillLevelAppearance level={8} rank={5} />
        <SkillLevelAppearance level={9} rank={5} />
        <SkillLevelAppearance level={10} rank={1001} />
        <SkillLevelAppearance level={10} rank={800} />
        <SkillLevelAppearance level={10} rank={800} hideRank />
        <SkillLevelAppearance level={10} rank={800} hideChallenger />
        <SkillLevelAppearance level={10} rank={3} />
        <SkillLevelAppearance level={10} rank={2} />
        <SkillLevelAppearance level={10} rank={1} />
        {!isTransparent && <div className={styles.divider}></div>}
      </div>
    </div>
  );
}
