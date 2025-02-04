import styles from "./WidgetExamples.module.scss";
import { RichWidgetExample } from "./RichWidgetExample";
import clsx from "clsx";
import { CompactWidgetExample } from "./CompactWidgetExample";

function WidgetExamples() {
  return (
    <div className={styles.wrapper}>
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
              },
              {
                elo: 4523,
                level: 10,
                rank: 13,
              },
              {
                elo: 4075,
                level: 10,
                rank: 32,
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
              },
              {
                elo: 3864,
                level: 10,
                rank: 100,
              },
              {
                elo: 3736,
                level: 10,
                rank: 100,
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
              },
              {
                elo: 2590,
                level: 10,
                rank: 17,
              },
              {
                elo: 2673,
                level: 10,
                rank: 17,
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
