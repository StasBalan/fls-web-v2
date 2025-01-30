import clsx from "clsx";
import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./EloSection.module.scss";

export function EloSection({
  elo,
  isGiant = false,
}: {
  elo: number;
  isGiant?: boolean;
}) {
  return (
    <div className={clsx(styles.elo, isGiant && styles.eloGiant)}>
      <AnimatedNumber value={elo} />
    </div>
  );
}
