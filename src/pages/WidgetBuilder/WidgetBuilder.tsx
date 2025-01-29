import { BaseWidget } from "@/components/BaseWidget";
import { Builder } from "@/components/Builder";

import styles from "./WidgetBuilder.module.scss";
import { useState } from "react";
import { useBaseWidgetInfo } from "@/features";
import { CompactWidget } from "@/components/CompactWidget";

export function WidgetBuilder() {
  const [nickname, setNickname] = useState("Magnojezzz");
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
            // <BaseWidget
            //   isTransparent={isTransparent}
            //   profile={profile}
            //   lastMatches={matches}
            //   countryRanking={countryRanking}
            //   kdr={kdr}
            // />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                <CompactWidget
                  elo={4200}
                  level={10}
                  rank={2200}
                  transparent={isTransparent}
                />

                <CompactWidget
                  elo={4200}
                  level={10}
                  rank={22}
                  transparent={isTransparent}
                />

                <CompactWidget
                  elo={4200}
                  level={10}
                  rank={22}
                  hideRank
                  transparent={isTransparent}
                />

                <CompactWidget
                  elo={4200}
                  level={10}
                  rank={1}
                  transparent={isTransparent}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                <CompactWidget
                  elo={4200}
                  level={10}
                  rank={2200}
                  transparent={isTransparent}
                  rounded
                />

                <CompactWidget
                  elo={4200}
                  level={10}
                  rank={22}
                  transparent={isTransparent}
                  rounded
                />

                <CompactWidget
                  elo={4200}
                  level={10}
                  rank={22}
                  hideRank
                  transparent={isTransparent}
                  rounded
                />

                <CompactWidget
                  elo={4271}
                  level={10}
                  rank={1}
                  transparent={isTransparent}
                  rounded
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.background} />
    </div>
  );
}
