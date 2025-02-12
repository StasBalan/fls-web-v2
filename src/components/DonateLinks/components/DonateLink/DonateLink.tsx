import { eventService } from "@/services";
import styles from "./DonateLink.module.scss";

export function DonateLink({
  id,
  icon,
  label,
  link,
}: {
  id: string;
  icon: React.ReactNode;
  label: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      onClick={() => {
        eventService.track("support_link_click", { id: id });
      }}
      className={styles.container}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
