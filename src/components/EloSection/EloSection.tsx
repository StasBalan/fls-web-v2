import clsx from "clsx";
import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./EloSection.module.scss";

export function EloSection({
  elo,
  isGiant = false,
  unranked = false,
}: {
  elo: number;
  isGiant?: boolean;
  unranked?: boolean;
}) {
  return (
    <div
      className={clsx(
        styles.elo,
        unranked && styles.eloUnranked,
        isGiant && !unranked && styles.eloGiant,
        isGiant && unranked && styles.eloUnrankedGiant,
      )}
    >
      {unranked ? <span>Unranked</span> : <AnimatedNumber value={elo} />}
    </div>
  );
}
