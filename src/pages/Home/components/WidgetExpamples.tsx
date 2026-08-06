import styles from "./WidgetExamples.module.scss";
import { RichWidgetExample } from "./RichWidgetExample";
import clsx from "clsx";
import { CompactWidgetExample } from "./CompactWidgetExample";
import { CompactTodayWidgetExample } from "./CompactTodayWidgetExample";

function WidgetExamples() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={clsx(styles.widget, styles.widgetCompact)}>
          <CompactTodayWidgetExample
            data={[
              {
                elo: 4495,
                level: 10,
                rank: 17,
                countryRank: 15,
                todayMatchesData: {
                  gain: -40,
                  wins: 2,
                  losses: 6,
                  avgKD: 0.92,
                  avgKills: 17,
                },
              },
              {
                elo: 4523,
                level: 10,
                rank: 13,
                countryRank: 15,
                todayMatchesData: {
                  gain: 52,
                  wins: 2,
                  losses: 6,
                  avgKD: 0.92,
                  avgKills: 17,
                },
              },
              {
                elo: 4075,
                level: 10,
                rank: 32,
                countryRank: 15,
                todayMatchesData: {
                  gain: 0,
                  wins: 2,
                  losses: 6,
                  avgKD: 0.92,
                  avgKills: 17,
                },
              },
            ]}
            duration={12000}
            hideChallenger={false}
            hideRank={true}
            hideWinsLosses={true}
            rounded={true}
          />
        </div>
        <div className={clsx(styles.widget, styles.widgetCompact)}>
          <CompactTodayWidgetExample
            data={[
              {
                elo: 3895,
                level: 10,
                rank: 174,
                countryRank: 15,
                todayMatchesData: {
                  gain: 2,
                  wins: 2,
                  losses: 6,
                  avgKD: 1.12,
                  avgKills: 23,
                },
              },
              {
                elo: 4017,
                level: 10,
                rank: 131,
                countryRank: 15,
                todayMatchesData: {
                  gain: 34,
                  wins: 4,
                  losses: 1,
                  avgKD: 1.26,
                  avgKills: 27,
                },
              },
              {
                elo: 3673,
                level: 10,
                rank: 257,
                countryRank: 15,
                todayMatchesData: {
                  gain: -14,
                  wins: 3,
                  losses: 3,
                  avgKD: 0.92,
                  avgKills: 17,
                },
              },
            ]}
            duration={6000}
            hideChallenger={false}
            hideRank={false}
            hideWinsLosses={false}
            rounded={false}
          />
        </div>
      </div>
      <div>
        <div className={clsx(styles.widget, styles.widgetRich)}>
          <RichWidgetExample />
        </div>
      </div>
      <div className={styles.row}>
        <div className={clsx(styles.widget, styles.widgetCompact)}>
          <CompactWidgetExample
            data={[
              {
                elo: 4495,
                level: 10,
                rank: 17,
                countryRank: 15,
              },
              {
                elo: 4523,
                level: 10,
                rank: 13,
                countryRank: 3,
              },
              {
                elo: 4075,
                level: 10,
                rank: 32,
                countryRank: 10,
              },
            ]}
            duration={7000}
            hideChallenger={false}
            hideRank={false}
            rounded={false}
          />
        </div>

        <div className={clsx(styles.widget, styles.widgetCompact)}>
          <CompactWidgetExample
            data={[
              {
                elo: 3901,
                level: 10,
                rank: 100,
                countryRank: 10,
              },
              {
                elo: 3864,
                level: 10,
                rank: 100,
                countryRank: 10,
              },
              {
                elo: 3736,
                level: 10,
                rank: 100,
                countryRank: 10,
              },
            ]}
            duration={9000}
            hideChallenger={false}
            hideRank={true}
            rounded={true}
          />
        </div>

        <div className={clsx(styles.widget, styles.widgetCompact)}>
          <CompactWidgetExample
            data={[
              {
                elo: 2530,
                level: 10,
                rank: 17,
                countryRank: 10,
              },
              {
                elo: 2590,
                level: 10,
                rank: 17,
                countryRank: 10,
              },
              {
                elo: 2673,
                level: 10,
                rank: 17,
                countryRank: 10,
              },
            ]}
            duration={6000}
            hideChallenger={true}
            hideRank={true}
            rounded={false}
          />
        </div>
      </div>
    </div>
  );
}

export default WidgetExamples;
