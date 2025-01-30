import clsx from "clsx";
import styles from "./RichWidget.module.scss";
import { SkillLevelAppearance } from "../SkillLevelAppearance";
import { EloSection } from "../EloSection";
import { CountryRankSection } from "../CountryRankSection/CountryRankSection";
import { KDRSection } from "../KDRSection";
import { SingleNumericProperty } from "../SingleNumericProperty";
import { DoubledNumericProperty } from "../DoubledNumericProperty";
import { GainProperty } from "../GainProperty";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
// import { getEloBeforeToday, getTodayStartingPointDate } from "@/utils";

export function RichWidget({
  elo,
  level,
  rank,
  kdr,
  countryCode,
  countryRank,
  hideChallenger = false,
  hideRank = false,
  hideChallengerIconBorder = false,
  transparent = false,
}: {
  elo: number;
  level: number;
  rank: number;
  kdr: number;
  countryCode: string;
  countryRank: number;
  hideChallenger?: boolean;
  hideRank?: boolean;
  hideChallengerIconBorder?: boolean;
  transparent?: boolean;
}) {
  const [firstContainerVisible, setFirstContainerVisible] = useState(true);
  const [secondContainerVisible, setSecondContainerVisible] = useState(false);

  const debouncedFirstChange = useDebouncedCallback((value) => {
    setFirstContainerVisible(value);
  }, 700);

  const debouncedSecondChange = useDebouncedCallback((value) => {
    setSecondContainerVisible(value);
  }, 700);

  useEffect(() => {
    const id = setInterval(() => {
      setFirstContainerVisible((prev) => {
        if (prev === true) {
          return false;
        }

        debouncedFirstChange(true);
        return false;
      });
      setSecondContainerVisible((prev) => {
        if (prev === true) {
          return false;
        }

        debouncedSecondChange(true);
        return false;
      });
    }, 8000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(
          styles.container,
          transparent && styles.container_transparent
        )}
      >
        <div className={styles.topSection}>
          <div className={styles.levelElo}>
            <SkillLevelAppearance
              level={level}
              rank={rank}
              hideChallenger={hideChallenger}
              hideRank={hideRank}
              hideChallengerIconBorder={hideChallengerIconBorder}
            />
            <EloSection elo={elo} />
          </div>

          <KDRSection kdr={kdr} />

          <CountryRankSection code={countryCode} rank={countryRank} />
        </div>

        <div className={clsx(styles.bottomSection, styles.animatedContainer)}>
          <div
            className={clsx(
              styles.statsSection,
              styles.animatedContainerBase,
              firstContainerVisible
                ? styles.animatedContainerVisible
                : styles.animatedContainerHidden
            )}
          >
            <div className={styles.statsHeader}>LAST 20 MATCHES</div>
            <div className={styles.statsContainer}>
              <SingleNumericProperty label={"Win rate"} value={50} unit="%" />

              <DoubledNumericProperty
                left={{
                  label: "Avg. Kills",
                  value: 17,
                }}
                right={{
                  label: "Avg. HS",
                  value: 78,
                  unit: "%",
                }}
              />

              <DoubledNumericProperty
                left={{
                  label: "Avg. K/D",
                  value: "1.23",
                }}
                right={{
                  label: "K/R",
                  value: 1.32,
                  unit: "%",
                }}
              />
            </div>
          </div>

          <div
            className={clsx(
              styles.statsSection,
              styles.animatedContainerSecondary,
              secondContainerVisible
                ? styles.animatedContainerVisible
                : styles.animatedContainerHidden
            )}
          >
            <div className={styles.statsHeader}>STATS TODAY</div>
            <div className={styles.statsContainer}>
              <GainProperty label={"Gain"} value={-50} />

              <div className={styles.matchesPlayedContainer}>
                <SingleNumericProperty
                  label={"Wins"}
                  value={2}
                  wrapperClassName={clsx(
                    styles.matchesPlayedProperty,
                    styles.matchesPlayedPropertyWin
                  )}
                />
                <SingleNumericProperty
                  label={"Losses"}
                  value={4}
                  wrapperClassName={clsx(
                    styles.matchesPlayedProperty,
                    styles.matchesPlayedPropertyLoss
                  )}
                />
              </div>

              <DoubledNumericProperty
                left={{
                  label: "Avg. Kills",
                  value: 12,
                }}
                right={{
                  label: "Avg. K/D",
                  value: 1.32,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
