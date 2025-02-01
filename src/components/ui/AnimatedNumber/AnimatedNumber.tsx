import SlotCounter from "react-slot-counter";

import styles from "./AnimatedNumber.module.scss";

export function AnimatedNumber({ value }: { value: number | string }) {
  return (
    <SlotCounter
      value={value}
      sequentialAnimationMode
      useMonospaceWidth
      containerClassName={styles.container}
    />
  );
}
