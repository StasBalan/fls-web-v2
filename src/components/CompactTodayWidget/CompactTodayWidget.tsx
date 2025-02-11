import clsx from "clsx";
import styles from "./CompactTodayWidget.module.scss";
import { SkillLevelAppearance } from "../SkillLevelAppearance/SkillLevelAppearance";
import { EloSection } from "../EloSection";
import { SingleNumericProperty } from "../SingleNumericProperty";
import { GainArrowProperty } from "../GainArrowProperty";
import { DoubledNumericProperty } from "../DoubledNumericProperty";
import { DoubledAnimatedContainersSection } from "../DoubledAnimatedContainersSection";

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
    // key to fix Safari issue with not re-rendering width
    <div className={styles.wrapper} key={Number(!!hideWinsLosses)}>
      <div
        className={clsx(
          styles.container,
          transparent && styles.container_transparent,
          rounded && styles.container_rounded,
          isGiant && styles.containerGiant
        )}
      >
        <div className={clsx(styles.content, isGiant && styles.contentGiant)}>
          <div>
            <SkillLevelAppearance
              level={level}
              rank={rank}
              hideChallenger={hideChallenger}
              hideRank={hideRank}
              isGiant={isGiant}
            />
          </div>

          <div className="flex-col items-center justify-center">
            <EloSection elo={elo} isGiant={isGiant} />

            <GainArrowProperty
              value={todayMatchesData.gain}
              isGiant={isGiant}
            />
          </div>

          {!hideWinsLosses ? (
            <DoubledAnimatedContainersSection
              presenceDuration={8000}
              left={
                <div className={styles.matchesPlayedContainer}>
                  <DoubledNumericProperty
                    left={{
                      label: "Avg. Kills",
                      value: todayMatchesData.avgKills,
                    }}
                    right={{
                      label: "Avg. K/D",
                      value: todayMatchesData.avgKD,
                    }}
                    wrapperClassName={styles.matchesPlayedProperty}
                    valueClassName={styles.matchesPlayedPropertyValue}
                    labelClassName={styles.matchesPlayedPropertyLabel}
                  />
                </div>
              }
              right={
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
              }
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
