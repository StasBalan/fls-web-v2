import clsx from "clsx";
import { useEffect, useState } from "react";

import styles from "./PageHeader.module.scss";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/assets/Logo";
import { Button } from "../ui/button";
import { Telegram } from "@/assets/Telegram";
import { SelectLanguage } from "../SelectLanguage";
import { SideMenu } from "./components";
import { useTranslation } from "react-i18next";

import { eventService } from "@/services";

export function PageHeader({ hideButton = false }: { hideButton?: boolean }) {
  const { t } = useTranslation();

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
            {!hideButton && (
              <Button asChild>
                <Link
                  to="/widget-builder"
                  onClick={() => {
                    eventService.track("build_widget_click", {
                      source: "header",
                    });
                  }}
                >
                  {t("button")}
                </Link>
              </Button>
            )}

            <a
              href={"https://t.me/faceitlivestats"}
              target="_blank"
              onClick={() => {
                eventService.track("telegram_click", {
                  source: "header",
                });
              }}
            >
              <Telegram className={styles.telegram} />
            </a>

            <SelectLanguage />
          </div>
          <div className={styles.menu}>
            <SideMenu>
              <div className={styles.menuButtons}>
                <Button asChild>
                  <Link
                    to="/widget-builder"
                    onClick={() => {
                      eventService.track("build_widget_click", {
                        source: "header",
                      });
                    }}
                  >
                    {t("button")}
                  </Link>
                </Button>

                <div className="w-full flex items-center justify-between">
                  <SelectLanguage />

                  <a
                    href={"https://t.me/faceitlivestats"}
                    target="_blank"
                    className="flex items-center justify-start gap-[8px]"
                    onClick={() => {
                      eventService.track("telegram_click", {
                        source: "header",
                      });
                    }}
                  >
                    Telegram <Telegram className={styles.telegram} />
                  </a>
                </div>
              </div>
            </SideMenu>
          </div>
        </div>
      </header>
    </>
  );
}
