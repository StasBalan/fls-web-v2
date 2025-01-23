import clsx from "clsx";
import styles from "./BaseWidget.module.scss";
import { FaceitMatchStats, FaceitProfile } from "@/types";
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
        {!isTransparent && <div className={styles.divider}></div>}
      </div>
    </div>
  );
}
