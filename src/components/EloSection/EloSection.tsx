import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./EloSection.module.scss";

export function EloSection({ elo }: { elo: number }) {
  return (
    <div className={styles.elo}>
      <AnimatedNumber value={elo} />
    </div>
  );
}
