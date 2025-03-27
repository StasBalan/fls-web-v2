import clsx from "clsx";
import styles from "./MirrorSection.module.scss";
import { Trans, useTranslation } from "react-i18next";

export function MirrorSection() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.header,
          "text-center text-lg fill-mode-backwards lg:text-2xl text-balance"
        )}
      >
        {t("mirror.header")}
      </div>
      <div
        className={clsx(
          styles.description,
          "text-center text-base fill-mode-backwards lg:text-xl text-balance"
        )}
      >
        <Trans
          i18nKey="mirror.description.solution"
          components={[
            <a
              href={"https://fls-web.vercel.app/widget-builder"}
              target="_blank"
              className={clsx(styles.link, styles.linkMirror)}
            />,
          ]}
        />
      </div>
      <div
        className={clsx(
          styles.description,
          "text-center text-base fill-mode-backwards lg:text-xl text-balance"
        )}
      >
        {t("mirror.description.reason")}
      </div>
      <div
        className={clsx(
          styles.description,
          "text-center text-base fill-mode-backwards lg:text-xl text-balance"
        )}
      >
        <Trans
          i18nKey="mirror.description.request"
          components={[
            <a
              href={"https://faceitlivestats.win"}
              target="_blank"
              className={clsx(styles.link)}
            />,
          ]}
        />
      </div>

      <div
        className={clsx(
          styles.footer,
          "text-center text-sm fill-mode-backwards lg:text-lg text-balance"
        )}
      >
        <Trans
          i18nKey="mirror.footer"
          components={[
            <a
              href={"https://t.me/faceitlivestats"}
              target="_blank"
              className={clsx(styles.link, styles.linkTelegram)}
            />,
          ]}
        />
      </div>
    </div>
  );
}
