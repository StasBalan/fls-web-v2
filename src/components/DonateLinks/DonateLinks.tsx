import {
  DonatePayLogo,
  DonationAlertLogo,
  SteamLogo,
} from "@/assets/companies";
import { DonateLink } from "./components";
import styles from "./DonateLinks.module.scss";
import { useTranslation } from "react-i18next";

export function DonateLinks() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <DonateLink
        id={"skins"}
        icon={<SteamLogo className={styles.logo} />}
        label={t("footer.support.skins")}
        link={
          "https://steamcommunity.com/tradeoffer/new/?partner=348390684&token=BVBMOn5k"
        }
      />
      <DonateLink
        id={"donationalert"}
        icon={<DonationAlertLogo className={styles.logo} />}
        label={t("footer.support.donation")}
        link={"https://www.donationalerts.com/r/podokoniktw"}
      />
      <DonateLink
        id={"donatepay"}
        icon={<DonatePayLogo className={styles.logo} />}
        label={t("footer.support.donation")}
        link={"https://new.donatepay.ru/@podokonikTW"}
      />
    </div>
  );
}
