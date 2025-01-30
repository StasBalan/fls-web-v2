import { useEffect, useState } from "react";
import styles from "./DoubledAnimatedContainersSection.module.scss";
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";

export function DoubledAnimatedContainersSection({
  left,
  right,
  presenceDuration,
  pauseDuration,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  presenceDuration: number;
  pauseDuration: number;
}) {
  const [firstContainerVisible, setFirstContainerVisible] = useState(true);
  const [secondContainerVisible, setSecondContainerVisible] = useState(false);

  const debouncedFirstChange = useDebouncedCallback((value) => {
    setFirstContainerVisible(value);
  }, pauseDuration);

  const debouncedSecondChange = useDebouncedCallback((value) => {
    setSecondContainerVisible(value);
  }, pauseDuration);

  useEffect(() => {
    const id = setInterval(() => {
      setFirstContainerVisible((prev) => {
        if (prev === true) {
          return false;
        }

        debouncedFirstChange(true);
        return false;
      });
      setSecondContainerVisible((prev) => {
        if (prev === true) {
          return false;
        }

        debouncedSecondChange(true);
        return false;
      });
    }, presenceDuration);

    return () => {
      clearInterval(id);
      debouncedFirstChange.flush();
      debouncedSecondChange.flush();
    };
  }, [presenceDuration, debouncedFirstChange, debouncedSecondChange]);

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.base,
          firstContainerVisible ? styles.visible : styles.hidden
        )}
      >
        {left}
      </div>
      <div
        className={clsx(
          styles.secondary,
          secondContainerVisible ? styles.visible : styles.hidden
        )}
      >
        {right}
      </div>
    </div>
  );
}
