import styles from "./WidgetBuilder.module.scss";

export function ErrorHint({
  header,
  description,
}: {
  header: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className={styles.error}>
      <div className={styles.errorHeader}>{header}</div>
      <div className={styles.errorDescription}>{description}</div>
    </div>
  );
}
