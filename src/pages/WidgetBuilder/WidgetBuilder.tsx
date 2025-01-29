import styles from "./WidgetBuilder.module.scss";
import { useState } from "react";
import { useFullWidgetInfo } from "@/features";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CompactWidgetBuilder } from "@/components/CompactWidgetBuilder";
import { RichWidgetBuilder } from "@/components/RichWidgetBuilder";

export function WidgetBuilder() {
  const [nickname, setNickname] = useState("");

  const debouncedNicknameChange = useDebouncedCallback((value) => {
    setNickname(value);
  }, 1000);

  const [widgetType, setWidgetType] = useState<string>("rich");

  const { profile, matches, regionRanking, countryRanking, kdr } =
    useFullWidgetInfo(nickname, false);

  console.log(matches, countryRanking, kdr);

  const handleWidgetLinkBuild = (link: string) => {
    console.log("handleWidgetLinkChange: ", link);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topForm}>
          <div className="w-[300px]">
            <Label htmlFor="faceit-nickname">Faceit Nickname</Label>
            <Input
              id="faceit-nickname"
              placeholder="Faceit Nickname"
              defaultValue={""}
              onChange={(event) => {
                debouncedNicknameChange(event.target.value);
              }}
            />
          </div>

          <div className="w-[200px]">
            <Label htmlFor="widget-type">Widget type</Label>
            <Select
              value={widgetType}
              onValueChange={(value: string) => {
                setWidgetType(value);
              }}
            >
              <SelectTrigger id="widget-type">
                <SelectValue placeholder="Select widget type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="rich">Rich</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {widgetType === "compact" && profile && regionRanking ? (
          <CompactWidgetBuilder
            nickname={nickname}
            onWidgetLinkBuild={handleWidgetLinkBuild}
            elo={profile.games.cs2.faceit_elo}
            level={profile.games.cs2.skill_level}
            rank={regionRanking}
          />
        ) : (
          <></>
        )}

        {widgetType === "rich" ? (
          <RichWidgetBuilder
            nickname={nickname}
            onWidgetLinkBuild={handleWidgetLinkBuild}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={styles.background} />
    </div>
  );
}
