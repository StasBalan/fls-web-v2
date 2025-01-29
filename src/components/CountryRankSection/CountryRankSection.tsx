import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./CountryRankSection.module.scss";

export function CountryRankSection({
  code,
  rank,
}: {
  code: string;
  rank: number;
}) {
  return (
    <div className={styles.wrapper}>
      <img
        id="level-pic"
        src={`https://flagcdn.com/h24/${code}.png`}
        alt={`Flag of "${code}" country`}
        className={styles.flag}
      />
      <div className={styles.rank}>
        <span>#</span>
        <AnimatedNumber value={rank} />
      </div>
    </div>
  );
}
