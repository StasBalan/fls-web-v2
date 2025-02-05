import clsx from "clsx";
import styles from "./PageFooter.module.scss";
import { Trans, useTranslation } from "react-i18next";
import { eventService } from "@/services";

export function PageFooter() {
  useTranslation();

  return (
    <footer className={styles.container}>
      <div>
        <Trans
          i18nKey="footer.maintainers"
          components={[
            <a
              href={"https://www.twitch.tv/podokoniktw/about"}
              target="_blank"
              className={clsx(styles.link, styles.twitch)}
              onClick={() => {
                eventService.track("twitch_click", {
                  source: "footer",
                  value: "podokoniktw",
                });
              }}
            />,
            <a
              href={"https://www.twitch.tv/nymfgg/about"}
              target="_blank"
              className={clsx(styles.link, styles.twitch)}
              onClick={() => {
                eventService.track("twitch_click", {
                  source: "footer",
                  value: "nymfgg",
                });
              }}
            />,
          ]}
        />
      </div>

      <div>
        <Trans
          i18nKey="footer.news"
          components={[
            <a
              href={"https://t.me/faceitlivestats"}
              target="_blank"
              className={clsx(styles.link, styles.telegram)}
              onClick={() => {
                eventService.track("telegram_click", {
                  source: "footer",
                });
              }}
            />,
          ]}
        />
      </div>

      <div className={styles.disclaimer}>
        <Trans i18nKey="footer.disclaimer" />
      </div>
    </footer>
  );
}
