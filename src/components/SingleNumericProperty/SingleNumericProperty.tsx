import { PropertyBase } from "../PropertyBase";
import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./SingleNumericProperty.module.scss";

export function SingleNumericProperty({
  label,
  value,
  unit,
  wrapperClassName,
}: {
  label: string;
  value: number | string;
  unit?: string;
  wrapperClassName?: string;
}) {
  return (
    <PropertyBase
      label={label}
      value={
        <div className={styles.value}>
          <AnimatedNumber value={value} />
          {!!unit && <span>{unit}</span>}
        </div>
      }
      wrapperClassName={wrapperClassName}
    />
  );
}
