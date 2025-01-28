import { SkillLevelChallenger } from "@/assets/skill-level";
import styles from "./ChallengerSection.module.scss";

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
}: {
  rank: number;
  hideRank?: boolean;
}) {
  const color = getChallengerColor(rank);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: color,
      }}
    >
      {!hideRank && <div className={styles.rank}>#{rank}</div>}
      <SkillLevelChallenger className={styles.icon} fill={color} />
    </div>
  );
}
