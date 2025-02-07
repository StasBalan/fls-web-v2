import clsx from "clsx";
import styles from "./CompactTodayWidget.module.scss";
import { SkillLevelAppearance } from "../SkillLevelAppearance/SkillLevelAppearance";
import { EloSection } from "../EloSection";
import { SingleNumericProperty } from "../SingleNumericProperty";
import { GainArrowProperty } from "../GainArrowProperty";

export function CompactTodayWidget({
  elo,
  level,
  rank,
  todayMatchesData,
  hideChallenger = false,
  hideRank = false,
  hideWinsLosses = true,
  transparent = false,
  rounded = false,
  isGiant = false,
}: {
  elo: number;
  level: number;
  rank: number;
  todayMatchesData: {
    wins: number | string;
    losses: number | string;
    gain: number;
    avgKills: number | string;
    avgKD: number | string;
  };
  hideChallenger?: boolean;
  hideRank?: boolean;
  hideWinsLosses?: boolean;
  transparent?: boolean;
  rounded?: boolean;
  isGiant?: boolean;
}) {
  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(
          styles.container,
          transparent && styles.container_transparent,
          rounded && styles.container_rounded,
          isGiant && styles.containerGiant
        )}
      >
        <div className={clsx(styles.content, isGiant && styles.contentGiant)}>
          <SkillLevelAppearance
            level={level}
            rank={rank}
            hideChallenger={hideChallenger}
            hideRank={hideRank}
            isGiant={isGiant}
          />

          <div className="flex-col items-center justify-center">
            <EloSection elo={elo} isGiant={isGiant} />

            <GainArrowProperty
              value={todayMatchesData.gain}
              isGiant={isGiant}
            />
          </div>

          {!hideWinsLosses ? (
            <div className={styles.matchesPlayedContainer}>
              <SingleNumericProperty
                label={"Wins"}
                value={todayMatchesData.wins}
                wrapperClassName={clsx(
                  styles.matchesPlayedProperty,
                  styles.matchesPlayedPropertyWin
                )}
                valueClassName={styles.matchesPlayedPropertyValue}
                labelClassName={styles.matchesPlayedPropertyLabel}
              />
              <SingleNumericProperty
                label={"Losses"}
                value={todayMatchesData.losses}
                wrapperClassName={clsx(
                  styles.matchesPlayedProperty,
                  styles.matchesPlayedPropertyLoss
                )}
                valueClassName={styles.matchesPlayedPropertyValue}
                labelClassName={styles.matchesPlayedPropertyLabel}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
