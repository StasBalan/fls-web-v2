import clsx from "clsx";
import styles from "./PropertyBase.module.scss";

export function PropertyBase({
  value,
  label,
  wrapperClassName,
  labelClassName,
  valueClassName,
  isGiant = false,
}: {
  value: React.ReactNode;
  label: React.ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
  isGiant?: boolean;
}) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        isGiant && styles.wrapperGiant,
        wrapperClassName
      )}
    >
      <div className={clsx(styles.value, valueClassName)}>{value}</div>
      <div className={clsx(styles.label, labelClassName)}>{label}</div>
    </div>
  );
}
