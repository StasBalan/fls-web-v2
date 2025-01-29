import clsx from "clsx";
import styles from "./RichWidget.module.scss";
import { FaceitMatchStats, FaceitProfile } from "@/types";
import { SkillLevelAppearance } from "../SkillLevelAppearance";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { EloSection } from "../EloSection";
import { CountryRankSection } from "../CountryRankSection/CountryRankSection";
// import { getEloBeforeToday, getTodayStartingPointDate } from "@/utils";

export function RichWidget({
  elo,
  level,
  rank,
  countryCode,
  countryRank,
  hideChallenger = false,
  hideRank = false,
  transparent = false,
}: {
  elo: number;
  level: number;
  rank: number;
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

          <CountryRankSection code={countryCode} rank={countryRank} />
        </div>
      </div>
    </div>
  );
}
