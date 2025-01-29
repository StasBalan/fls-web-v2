import clsx from "clsx";
import { PropertyBase } from "../PropertyBase";
import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./GainProperty.module.scss";

const getSignProps = (value: number) => {
  if (value === 0) {
    return {
      sign: "",
      className: styles.gainZero,
    };
  }

  if (value > 0) {
    return {
      sign: "+",
      className: styles.gainPlus,
    };
  }

  return {
    sign: "-",
    className: styles.gainMinus,
  };
};

export function GainProperty({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const { sign, className } = getSignProps(value);

  return (
    <PropertyBase
      label={label}
      value={
        <div className={styles.value}>
          {sign ? <span>{sign}</span> : <></>}
          <AnimatedNumber value={Math.abs(value)} />
        </div>
      }
      wrapperClassName={clsx(styles.gain, className)}
    />
  );
}
