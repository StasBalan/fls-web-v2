import { PropertyBase } from "../PropertyBase";
import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./SingleNumericProperty.module.scss";

export function SingleNumericProperty({
  label,
  value,
  unit,
  wrapperClassName,
  valueClassName,
  labelClassName,
  isGiant = false,
}: {
  label: string;
  value: number | string;
  unit?: string;
  wrapperClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
  isGiant?: boolean;
}) {
  return (
    <PropertyBase
      isGiant={isGiant}
      label={label}
      value={
        <div className={styles.value}>
          <AnimatedNumber value={value} />
          {!!unit && <span>{unit}</span>}
        </div>
      }
      wrapperClassName={wrapperClassName}
      valueClassName={valueClassName}
      labelClassName={labelClassName}
    />
  );
}
