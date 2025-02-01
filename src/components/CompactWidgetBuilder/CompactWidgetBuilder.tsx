import { useState } from "react";

import { CompactWidget } from "../CompactWidget";

import styles from "./CompactWidgetBuilder.module.scss";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { CopyLinkDialog } from "../CopyLinkDialog";

export function CompactWidgetBuilder({
  elo,
  level,
  rank,
  nickname,
}: {
  elo: number;
  level: number;
  rank: number;
  nickname: string;
}) {
  const [transparent, setTransparent] = useState(false);
  const [rounded, setRounded] = useState(false);
  const [showChallenger, setShowChallenger] = useState(true);
  const [showRank, setShowRank] = useState(true);
  const [showChallengerIconBorder, setShowChallengerIconBorder] =
    useState(true);
  const isGiant = true;

  const buildUrl = () => {
    return `https://faceitlivestats.win/widget-compact?hideRank=${!showRank}&hideChallenger=${!showChallenger}&hideChallengerIconBorder=${!showChallengerIconBorder}&rounded=${rounded}&transparent=${transparent}&isGiant=${isGiant}&nickname=${nickname}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>
        <CompactWidget
          elo={elo}
          level={level}
          rank={rank}
          transparent={transparent}
          rounded={rounded}
          hideChallenger={!showChallenger}
          hideRank={!showRank}
          hideChallengerIconBorder={!showChallengerIconBorder}
          isGiant={false}
        />
      </div>

      <div className={styles.controls}>
        <div className={styles.controlsGroup}>
          <span>View settings</span>
          <div className={styles.control}>
            <Label htmlFor="transparent">Transparent background</Label>
            <Switch
              id="transparent"
              checked={transparent}
              onCheckedChange={(event) => {
                setTransparent(event);
              }}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="rounded">Rounded corners</Label>
            <Switch
              id="rounded"
              checked={rounded}
              onCheckedChange={(event) => {
                setRounded(event);
              }}
            />
          </div>
        </div>
        <div className={styles.controlsGroup}>
          <span>Challenger settings</span>
          <div className={styles.control}>
            <Label htmlFor="show-challenger">Show challenger icon</Label>
            <Switch
              id="show-challenger"
              checked={showChallenger}
              onCheckedChange={(event) => {
                setShowChallenger(event);
              }}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="show-rank">Show rank</Label>
            <Switch
              id="show-rank"
              disabled={!showChallenger}
              checked={showRank}
              onCheckedChange={(event) => {
                setShowRank(event);

                if (event) {
                  setShowChallengerIconBorder(true);
                }
              }}
            />
          </div>
          <div className={styles.control}>
            <Label htmlFor="show-challenger-border">Show icon border</Label>
            <Switch
              id="show-challenger-border"
              disabled={!showChallenger || showRank}
              checked={showChallengerIconBorder}
              onCheckedChange={(event) => {
                setShowChallengerIconBorder(event);
              }}
            />
          </div>
        </div>

        <CopyLinkDialog buildUrl={buildUrl} />
      </div>
    </div>
  );
}
