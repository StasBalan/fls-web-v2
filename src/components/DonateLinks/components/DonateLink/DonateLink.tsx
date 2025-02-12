import styles from "./DonateLink.module.scss";

export function DonateLink({
  icon,
  label,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  link: string;
}) {
  return (
    <a href={link} target="_blank" className={styles.container}>
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
