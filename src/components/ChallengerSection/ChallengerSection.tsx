import { SkillLevelChallenger } from "@/assets/skill-level";
import styles from "./ChallengerSection.module.scss";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import clsx from "clsx";

const getChallengerColor = (rank: number): string => {
  switch (rank) {
    case 1:
      return "#FFD336";
    case 2:
      return "#DEF5FF";
    case 3:
      return "#FF7236";
    default:
      return "#E80128";
  }
};

export function ChallengerSection({
  rank,
  hideRank = false,
  hideChallengerIconBorder = false,
}: {
  rank: number;
  hideRank?: boolean;
  hideChallengerIconBorder?: boolean;
}) {
  const color = getChallengerColor(rank);

  return (
    <div
      className={clsx(
        styles.container,
        hideRank && hideChallengerIconBorder && styles.containerBigger
      )}
      style={{
        backgroundColor:
          hideRank && hideChallengerIconBorder ? undefined : color,
      }}
    >
      {!hideRank && (
        <div className={styles.rank}>
          <span>#</span>
          <AnimatedNumber value={rank} />
        </div>
      )}
      <SkillLevelChallenger
        className={clsx(
          styles.icon,
          hideRank && hideChallengerIconBorder && styles.iconBigger
        )}
        fill={color}
      />
    </div>
  );
}
