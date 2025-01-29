import { useState } from "react";

import { RichWidget } from "../RichWidget";

import styles from "./RichWidgetBuilder.module.scss";
import { Button } from "../ui/button";
import { Blocks } from "lucide-react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export function RichWidgetBuilder({
  nickname,
  onWidgetLinkBuild,
}: {
  nickname: string;
  onWidgetLinkBuild: (link: string) => void;
}) {
  const [transparent, setTransparent] = useState(false);
  const [showChallenger, setShowChallenger] = useState(true);
  const [showRank, setShowRank] = useState(true);

  const buildWidgetLink = () => {
    console.log(nickname);
    onWidgetLinkBuild("link");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>
        <RichWidget
          elo={4200}
          level={10}
          rank={22}
          countryCode="nl"
          countryRank={7}
          transparent={transparent}
          hideChallenger={!showChallenger}
          hideRank={!showRank}
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
            <Label htmlFor="show-rank">Show challenger rank</Label>
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

        <Button
          onClick={buildWidgetLink}
          type="button"
          className={styles.button}
        >
          <Blocks />
          Build link
        </Button>
      </div>
    </div>
  );
}
