import clsx from "clsx";
import styles from "./PropertyBase.module.scss";

export function PropertyBase({
  value,
  label,
  wrapperClassName,
}: {
  value: React.ReactNode;
  label: React.ReactNode;
  wrapperClassName?: string;
}) {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
