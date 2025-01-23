import { BaseWidget } from "@/components/BaseWidget";
import { Builder } from "@/components/Builder";

import styles from "./WidgetBuilder.module.scss";
import { useState } from "react";
import { useBaseWidgetInfo } from "@/features";

export function WidgetBuilder() {
  const [nickname, setNickname] = useState("nymf-");
  const [isTransparent, setIsTransparent] = useState(true);

  const { profile, matches, countryRanking, kdr } = useBaseWidgetInfo(
    nickname,
    false
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.builder}>
          <Builder
            nickname={nickname}
            isTransparent={isTransparent}
            onNicknameChange={setNickname}
            onIsTransparentChange={setIsTransparent}
          />
        </div>
        <div className={styles.widget}>
          {profile !== null && (
            <BaseWidget
              isTransparent={isTransparent}
              profile={profile}
              lastMatches={matches}
              countryRanking={countryRanking}
              kdr={kdr}
            />
          )}
        </div>
      </div>
      <div className={styles.background} />
    </div>
  );
}
