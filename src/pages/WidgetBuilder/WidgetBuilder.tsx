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
import { getLastMatchesStats, getTodayMatchesStats } from "@/utils";
import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";

export function WidgetBuilder() {
  const [nickname, setNickname] = useState("");
  const debouncedNicknameChange = useDebouncedCallback((value) => {
    setNickname(value);
  }, 1000);

  const [widgetType, setWidgetType] = useState<string>("rich");

  const { profile, matches, regionRanking, countryRanking, kdr } =
    useFullWidgetInfo(nickname, false);

  return (
    <div className={styles.wrapper}>
      <PageHeader />

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

        {!nickname ? (
          <div className={styles.error}>
            <div className={styles.errorHeader}>Error: NO NICKNAME</div>
            <div className={styles.errorDescription}>
              Enter your FACEIT nickname in the input field. Please note that
              nickname is <b>case sensitive</b>.
            </div>
          </div>
        ) : (
          <></>
        )}

        {nickname && profile === null ? (
          <div className={styles.error}>
            <div className={styles.errorHeader}>Error: NO FACEIT PROFILE</div>
            <div className={styles.errorDescription}>
              We can't find FACEIT profile with nickname <b>'{nickname}'</b>.
              Please make sure you have entered the correct nickname.
            </div>
          </div>
        ) : (
          <></>
        )}

        {nickname && profile && !profile.games?.cs2 ? (
          <div className={styles.error}>
            <div className={styles.errorHeader}>
              Error: NO CS2 GAME IN FACEIT PROFILE
            </div>
            <div className={styles.errorDescription}>
              Profile with nickname <b>'{nickname}'</b> does not have cs2 game
              enabled.
            </div>
          </div>
        ) : (
          <></>
        )}

        {widgetType === "compact" &&
        nickname &&
        profile &&
        profile.games?.cs2 &&
        regionRanking ? (
          <CompactWidgetBuilder
            nickname={nickname}
            elo={profile.games.cs2.faceit_elo}
            level={profile.games.cs2.skill_level}
            rank={regionRanking}
          />
        ) : (
          <></>
        )}

        {widgetType === "rich" &&
        nickname &&
        profile &&
        profile.games?.cs2 &&
        matches &&
        regionRanking &&
        kdr &&
        countryRanking ? (
          <RichWidgetBuilder
            nickname={nickname}
            data={{
              elo: profile.games.cs2.faceit_elo,
              level: profile.games.cs2.skill_level,
              rank: regionRanking,
              kdr: kdr,
              lastMatchesData: getLastMatchesStats(matches),
              todayMatchesData: getTodayMatchesStats(
                matches,
                profile.games.cs2.faceit_elo
              ),
              countryCode: profile.country,
              countryRank: countryRanking,
            }}
          />
        ) : (
          <></>
        )}
      </div>

      <PageFooter />
    </div>
  );
}
