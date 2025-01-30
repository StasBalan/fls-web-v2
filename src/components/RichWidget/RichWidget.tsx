import clsx from "clsx";
import styles from "./RichWidget.module.scss";
import { SkillLevelAppearance } from "../SkillLevelAppearance";
import { EloSection } from "../EloSection";
import { CountryRankSection } from "../CountryRankSection/CountryRankSection";
import { KDRSection } from "../KDRSection";
import { SingleNumericProperty } from "../SingleNumericProperty";
import { DoubledNumericProperty } from "../DoubledNumericProperty";
import { GainProperty } from "../GainProperty";
import { DoubledAnimatedContainersSection } from "../DoubledAnimatedContainersSection";

export function RichWidget({
  elo,
  level,
  rank,
  kdr,
  lastMatchesData,
  todayMatchesData,
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
  lastMatchesData: {
    winRate: number | string;
    avgKills: number | string;
    avgHS: number | string;
    avgKD: number | string;
    avgKR: number | string;
  };
  todayMatchesData: {
    wins: number | string;
    losses: number | string;
    gain: number;
    avgKills: number | string;
    avgKD: number | string;
  };
  countryCode: string;
  countryRank: number;
  hideChallenger?: boolean;
  hideRank?: boolean;
  hideChallengerIconBorder?: boolean;
  transparent?: boolean;
}) {
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

        <DoubledAnimatedContainersSection
          left={
            <>
              <div className={styles.statsHeader}>LAST 20 MATCHES</div>
              <div className={styles.statsContainer}>
                <SingleNumericProperty
                  label={"Win rate"}
                  value={lastMatchesData.winRate}
                  unit="%"
                />

                <DoubledNumericProperty
                  left={{
                    label: "Avg. Kills",
                    value: lastMatchesData.avgKills,
                  }}
                  right={{
                    label: "Avg. HS",
                    value: lastMatchesData.avgHS,
                    unit: "%",
                  }}
                />

                <DoubledNumericProperty
                  left={{
                    label: "Avg. K/D",
                    value: lastMatchesData.avgKD,
                  }}
                  right={{
                    label: "K/R",
                    value: lastMatchesData.avgKR,
                    unit: "%",
                  }}
                />
              </div>
            </>
          }
          right={
            <>
              <div className={styles.statsHeader}>STATS TODAY</div>
              <div className={styles.statsContainer}>
                <GainProperty label={"Gain"} value={todayMatchesData.gain} />

                <div className={styles.matchesPlayedContainer}>
                  <SingleNumericProperty
                    label={"Wins"}
                    value={todayMatchesData.wins}
                    wrapperClassName={clsx(
                      styles.matchesPlayedProperty,
                      styles.matchesPlayedPropertyWin
                    )}
                  />
                  <SingleNumericProperty
                    label={"Losses"}
                    value={todayMatchesData.losses}
                    wrapperClassName={clsx(
                      styles.matchesPlayedProperty,
                      styles.matchesPlayedPropertyLoss
                    )}
                  />
                </div>

                <DoubledNumericProperty
                  left={{
                    label: "Avg. Kills",
                    value: todayMatchesData.avgKills,
                  }}
                  right={{
                    label: "Avg. K/D",
                    value: todayMatchesData.avgKD,
                  }}
                />
              </div>
            </>
          }
          presenceDuration={8000}
        />
      </div>
    </div>
  );
}
