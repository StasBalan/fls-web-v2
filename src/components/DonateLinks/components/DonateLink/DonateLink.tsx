import { eventService } from "@/services";
import styles from "./DonateLink.module.scss";

export function DonateLink({
  key,
  icon,
  label,
  link,
}: {
  key: string;
  icon: React.ReactNode;
  label: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      onClick={() => {
        eventService.track("support_link_click", { type: key });
      }}
      className={styles.container}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
