import {
  SkillLevel0,
  SkillLevel1,
  SkillLevel10,
  SkillLevel2,
  SkillLevel3,
  SkillLevel4,
  SkillLevel5,
  SkillLevel6,
  SkillLevel7,
  SkillLevel8,
  SkillLevel9,
} from "@/assets/skill-level";
import { ChallengerSection } from "../ChallengerSection";

import styles from "./SkillLevelAppearance.module.scss";

const getSkillLevelIcon = (level: number) => {
  switch (level) {
    case 10:
      return SkillLevel10;
    case 9:
      return SkillLevel9;
    case 8:
      return SkillLevel8;
    case 7:
      return SkillLevel7;
    case 6:
      return SkillLevel6;
    case 5:
      return SkillLevel5;
    case 4:
      return SkillLevel4;
    case 3:
      return SkillLevel3;
    case 2:
      return SkillLevel2;
    case 1:
      return SkillLevel1;
    default:
      return SkillLevel0;
  }
};

export function SkillLevelAppearance({
  level,
  rank,
  hideChallenger = false,
  hideRank = false,
  hideChallengerIconBorder = false,
}: {
  level: number;
  rank: number;
  hideChallenger?: boolean;
  hideRank?: boolean;
  hideChallengerIconBorder?: boolean;
}) {
  if (level < 10) {
    const SkillLevelIconComponent = getSkillLevelIcon(level);

    return <SkillLevelIconComponent className={styles.icon} />;
  }

  if (hideChallenger) {
    return <SkillLevel10 className={styles.icon} />;
  }

  if (rank <= 1000) {
    return (
      <ChallengerSection
        rank={rank}
        hideRank={hideRank}
        hideChallengerIconBorder={hideChallengerIconBorder}
      />
    );
  }

  return <SkillLevel10 className={styles.icon} />;
}
