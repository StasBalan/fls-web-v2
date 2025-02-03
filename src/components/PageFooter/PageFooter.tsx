import styles from "./PageFooter.module.scss";

export function PageFooter() {
  return (
    <footer className={styles.container}>
      <div>
        Created and maintained by{" "}
        <a href={"https://translate.google.com"} target="_blank">
          <b>
            <u>@podokonikTW</u>
          </b>
        </a>{" "}
        &{" "}
        <a href={"https://translate.google.com"} target="_blank">
          <b>
            <u>@nymfgg</u>
          </b>
        </a>
      </div>
      <div>
        Follow our telegram channel{" "}
        <a href={"https://translate.google.com"} target="_blank">
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
