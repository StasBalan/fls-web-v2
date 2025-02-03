import clsx from "clsx";
import { useEffect, useState } from "react";

import styles from "./PageHeader.module.scss";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/assets/Logo";
import { Button } from "../ui/button";
import { Telegram } from "@/assets/Telegram";

export function PageHeader() {
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    window.addEventListener(
      "scroll",
      () => {
        setBlurred(window.scrollY > 20);
      },
      {
        signal: abortController.signal,
      }
    );

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <header
        className={clsx(styles.container, blurred && styles.containerBlurred)}
      >
        <div className={styles.content}>
          <Link to="/" className={styles.logoContainer}>
            <Logo className={styles.logoIcon} />
            <span className="text-[#FF5500]">FACEIT</span> <b>Live Stats</b>
          </Link>
          <div className={styles.buttons}>
            <Button asChild>
              <Link to="/widget-builder">Build Widget</Link>
            </Button>

            <a href={"https://translate.google.com"} target="_blank">
              <Telegram className={styles.telegram} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
