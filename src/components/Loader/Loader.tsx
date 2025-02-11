import clsx from "clsx";
import styles from "./Loader.module.scss";

export function Loader({ className }: { className?: string }) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.loader}></div>
    </div>
  );
}
