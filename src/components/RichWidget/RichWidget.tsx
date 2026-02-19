import clsx from "clsx";
import styles from "./RichWidget.module.scss";
import { SkillLevelAppearance } from "../SkillLevelAppearance";
import { EloSection } from "../EloSection";
import { CountryRankSection } from "../CountryRankSection/CountryRankSection";
import { KDRSection } from "../KDRSection";
import { SingleNumericProperty } from "../SingleNumericProperty";
import { DoubledNumericProperty } from "../DoubledNumericProperty";
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
  transparent = false,
}: {
  elo: number;
  level: number;
  rank: number;
  kdr: number;
  lastMatchesData: {
    winRate: number;
    avgKills: number;
    avgKD: number;
    avgKR: number;
    adr: number;
  };
  todayMatchesData: {
    wins: number;
    losses: number;
    gain: number;
    avgKills: number;
    avgKD: number;
    adr: number;
  };
  countryCode: string;
  countryRank: number;
  hideChallenger?: boolean;
  hideRank?: boolean;
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
            />
            <EloSection elo={elo} />
          </div>

          <KDRSection kdr={kdr} />

          <CountryRankSection code={countryCode} rank={countryRank} />
        </div>

        <DoubledAnimatedContainersSection
          left={
            <>
              <div className={styles.statsHeader}>LAST 30 MATCHES</div>
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
                    label: "ADR",
                    value: lastMatchesData.adr
                      ? lastMatchesData.adr.toFixed(1)
                      : 0,
                  }}
                />

                <DoubledNumericProperty
                  left={{
                    label: "K/D",
                    value: lastMatchesData.avgKD.toFixed(2),
                  }}
                  right={{
                    label: "K/R",
                    value: lastMatchesData.avgKR.toFixed(2),
                  }}
                />
              </div>
            </>
          }
          right={
            <>
              <div className={styles.statsHeader}>STATS TODAY</div>
              <div className={styles.statsContainer}>
                {/* <GainProperty label={"Gain"} value={todayMatchesData.gain} /> */}

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
                    label: "ADR",
                    value: todayMatchesData.adr
                      ? todayMatchesData.adr.toFixed(1)
                      : 0,
                  }}
                />

                <SingleNumericProperty
                  label={"K/D"}
                  value={todayMatchesData.avgKD
                    ? todayMatchesData.avgKD.toFixed(2)
                    : todayMatchesData.avgKD}
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
