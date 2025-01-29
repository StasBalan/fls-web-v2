import { PropertyBase } from "../PropertyBase";
import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./DoubledNumericProperty.module.scss";

type SingleNumericPropertyProps = {
  label: string;
  value: number | string;
  unit?: string;
};

export function DoubledNumericProperty({
  left,
  right,
}: {
  left: SingleNumericPropertyProps;
  right: SingleNumericPropertyProps;
}) {
  return (
    <PropertyBase
      label={
        <div className={styles.labels}>
          <span>{left.label}</span>
          <span>/</span>
          <span>{right.label}</span>
        </div>
      }
      value={
        <div className={styles.values}>
          <span className={styles.value}>
            <AnimatedNumber value={left.value} />
            {!!left.unit && <span>{left.unit}</span>}
          </span>
          <span>/</span>
          <span className={styles.value}>
            <AnimatedNumber value={right.value} />
            {!!right.unit && <span>{right.unit}</span>}
          </span>
        </div>
      }
    />
  );
}
