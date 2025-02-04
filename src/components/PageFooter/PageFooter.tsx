import styles from "./PageFooter.module.scss";

export function PageFooter() {
  return (
    <footer className={styles.container}>
      <div>
        Created and maintained by{" "}
        <a
          href={"https://www.twitch.tv/podokoniktw/about"}
          target="_blank"
          className={styles.twitch}
        >
          <b>
            <u>@podokonikTW</u>
          </b>
        </a>{" "}
        &{" "}
        <a
          href={"https://www.twitch.tv/nymfgg/about"}
          target="_blank"
          className={styles.twitch}
        >
          <b>
            <u>@nymfgg</u>
          </b>
        </a>
      </div>
      <div>
        Follow our telegram channel{" "}
        <a
          href={"https://t.me/faceitlivestats"}
          target="_blank"
          className={styles.telegram}
        >
          <b>
            <u>@faceitlivestats</u>
          </b>
        </a>{" "}
        to stay up to date with all the news and updates.
      </div>
      <div className={styles.disclaimer}>
        FACEIT Live Stats is developed independently and is not officially
        endorsed by or affiliated with FACEIT.
      </div>
    </footer>
  );
}
