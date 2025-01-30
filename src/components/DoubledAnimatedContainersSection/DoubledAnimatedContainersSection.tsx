import { useEffect, useState } from "react";
import styles from "./DoubledAnimatedContainersSection.module.scss";
import clsx from "clsx";

export function DoubledAnimatedContainersSection({
  left,
  right,
  presenceDuration,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  presenceDuration: number;
}) {
  const [values, setValues] = useState<[boolean, boolean]>([true, false]);

  useEffect(() => {
    const id = setInterval(() => {
      setValues((prev) => [!prev[0], !prev[1]]);
    }, presenceDuration);

    return () => {
      clearInterval(id);
    };
  }, [presenceDuration]);

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.base,
          values[0] ? styles.visible : styles.hidden
        )}
      >
        {left}
      </div>
      <div
        className={clsx(
          styles.secondary,
          values[1] ? styles.visible : styles.hidden
        )}
      >
        {right}
      </div>
    </div>
  );
}
