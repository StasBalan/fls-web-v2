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
  isGiant = false,
}: {
  rank: number;
  hideRank?: boolean;
  hideChallengerIconBorder?: boolean;
  isGiant?: boolean;
}) {
  const color = getChallengerColor(rank);

  return (
    <div
      className={clsx(
        styles.container,
        isGiant && styles.containerGiant,
        hideRank && hideChallengerIconBorder && styles.container_no_border
      )}
      style={{
        backgroundColor:
          hideRank && hideChallengerIconBorder ? undefined : color,
      }}
    >
      {!hideRank && (
        <div className={clsx(styles.rank, isGiant && styles.rankGiant)}>
          <span>#</span>
          <AnimatedNumber value={rank} />
        </div>
      )}
      <SkillLevelChallenger
        className={clsx(
          styles.icon,
          isGiant && styles.iconGiant,
          hideRank && hideChallengerIconBorder && styles.icon_no_border,
          hideRank &&
            hideChallengerIconBorder &&
            isGiant &&
            styles.icon_no_borderGiant
        )}
        fill={color}
      />
    </div>
  );
}
