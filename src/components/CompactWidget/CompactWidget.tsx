import clsx from "clsx";
import styles from "./CompactWidget.module.scss";
import { SkillLevelAppearance } from "../SkillLevelAppearance/SkillLevelAppearance";
import { AnimatedNumber } from "../ui/AnimatedNumber";

export function CompactWidget({
  elo,
  level,
  rank,
  hideChallenger = false,
  hideRank = false,
  transparent = false,
  rounded = false,
}: {
  elo: number;
  level: number;
  rank: number;
  hideChallenger?: boolean;
  hideRank?: boolean;
  transparent?: boolean;
  rounded?: boolean;
}) {
  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(
          styles.container,
          transparent && styles.container_transparent,
          rounded && styles.container_rounded
        )}
      >
        <SkillLevelAppearance
          level={level}
          rank={rank}
          hideChallenger={hideChallenger}
          hideRank={hideRank}
        />
        <div className={styles.elo}>
          <AnimatedNumber value={elo} />
        </div>
      </div>
    </div>
  );
}
