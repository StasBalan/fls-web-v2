import clsx from "clsx";
import { AnimatedNumber } from "../ui/AnimatedNumber";

import styles from "./GainArrowProperty.module.scss";
import { DownArrow, UpArrow, UpDownArrow } from "./arrows";

const getSignProps = (value: number) => {
  if (value === 0) {
    return {
      SignArrow: UpDownArrow,
      className: styles.containerZero,
    };
  }

  if (value > 0) {
    return {
      SignArrow: UpArrow,
      className: styles.containerPlus,
    };
  }

  return {
    SignArrow: DownArrow,
    className: styles.containerMinus,
  };
};

export function GainArrowProperty({
  value,
  isGiant = false,
}: {
  value: number;
  isGiant?: boolean;
}) {
  const { SignArrow, className } = getSignProps(value);

  return (
    <div
      className={clsx(
        styles.container,
        isGiant && styles.containerGiant,
        className
      )}
    >
      <span className={clsx(styles.sign, isGiant && styles.signGiant)}>
        <SignArrow />
      </span>
      <AnimatedNumber value={Math.abs(value)} />
    </div>
  );
}
