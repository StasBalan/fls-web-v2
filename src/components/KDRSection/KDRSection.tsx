import { AnimatedNumber } from "../ui/AnimatedNumber";
import styles from "./KDRSection.module.scss";

export function KDRSection({ kdr }: { kdr: number }) {
  return (
    <div className={styles.wrapper}>
      <AnimatedNumber value={kdr} />
      <span>KDR</span>
    </div>
  );
}
