import { useState } from "react";

import { RichWidget } from "../RichWidget";

import styles from "./RichWidgetBuilder.module.scss";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { CopyLinkDialog } from "../CopyLinkDialog";
import { ChallengerSettingsInfoCard } from "../ChallengerSettingsInfoCard";
import { useTranslation } from "react-i18next";
import { eventService } from "@/services";

export function RichWidgetBuilder({
  nickname,
  data,
}: {
  nickname: string;
  data: {
    elo: number;
    level: number;
    rank: number;
    kdr: number;
    lastMatchesData: {
      winRate: number | string;
      avgKills: number | string;
      avgHS: number | string;
      avgKD: number | string;
      avgKR: number | string;
    };
    todayMatchesData: {
      wins: number | string;
      losses: number | string;
      gain: number;
      avgKills: number | string;
      avgKD: number | string;
    };
    countryCode: string;
    countryRank: number;
  };
}) {
  const { t } = useTranslation();

  const [transparent, setTransparent] = useState(false);
  const [showChallenger, setShowChallenger] = useState(true);
  const [showRank, setShowRank] = useState(true);

  const buildUrl = () => {
    eventService.track(
      "build_widget_link_click",
      {
        type: "rich",
        nickname: nickname,
        elo: data.elo,
        transparent: transparent,
        hideChallenger: !showChallenger,
        hideRank: !showRank,
      },
      { user_id: nickname }
    );

    return `${window.location.origin}/widget-rich?hideRank=${!showRank}&hideChallenger=${!showChallenger}&transparent=${transparent}&nickname=${nickname}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>
        <RichWidget
          elo={data.elo}
          level={data.level}
          rank={data.rank}
          kdr={data.kdr}
          lastMatchesData={data.lastMatchesData}
          todayMatchesData={data.todayMatchesData}
          countryCode={data.countryCode}
          countryRank={data.countryRank}
          transparent={transparent}
          hideChallenger={!showChallenger}
          hideRank={!showRank}
        />
      </div>

      <div className={styles.button}>
        <CopyLinkDialog buildUrl={buildUrl} />
      </div>

      <div className={styles.controls}>
        <div className={styles.controlsGroup}>
          <span>{t("builder.controls.style.label")}</span>
          <div className={styles.control}>
            <Label htmlFor="transparent">
              {" "}
              {t("builder.controls.style.transparent")}
            </Label>
            <Switch
              id="transparent"
              checked={transparent}
              onCheckedChange={(event) => {
                setTransparent(event);
              }}
            />
          </div>
        </div>
        <div className={styles.controlsGroup}>
          <div className="flex items-center justify-center gap-[8px]">
            <span>{t("builder.controls.challenger.label")}</span>
            <ChallengerSettingsInfoCard
              text={t("builder.controls.challenger.info")}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="show-challenger">
              {t("builder.controls.challenger.icon")}
            </Label>
            <Switch
              id="show-challenger"
              checked={showChallenger}
              onCheckedChange={(event) => {
                setShowChallenger(event);
              }}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="show-rank">
              {t("builder.controls.challenger.rank")}
            </Label>
            <Switch
              id="show-rank"
              disabled={!showChallenger}
              checked={showRank}
              onCheckedChange={(event) => {
                setShowRank(event);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
