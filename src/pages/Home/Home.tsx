import clsx from "clsx";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import { PageCoreFeaturesSection } from "@/components/PageCoreFeaturesSection";
import { PageHeroSection } from "@/components/PageHeroSection";
import { eventService } from "@/services";

import styles from "./Home.module.scss";
import "./Home.scss";
import { TwitchPlayer } from "@/features/twitch-player";

const WidgetExamples = lazy(() => import("./components/WidgetExpamples.tsx"));

export function Home() {
  const [twitchPlayerVisible, setTwitchPlayerVisible] = useState(false);

  useEffect(() => {
    eventService.track("view_home_page");
  }, []);

  const handleTwitchPlayerVisibleChange = useCallback((visible: boolean) => {
    setTwitchPlayerVisible(visible);
  }, []);

  return (
    <div className={styles.wrapper}>
      <PageHeader />
      <div className={clsx(styles.container, twitchPlayerVisible && styles.containerWithTwitchPlayer)}>
        <PageHeroSection
          widgetPreview={
            <Suspense fallback={<></>}>
              <WidgetExamples />
            </Suspense>
          }
        />

        <PageCoreFeaturesSection />

        <PageFooter />
      </div>
      <TwitchPlayer onVisibleChange={handleTwitchPlayerVisibleChange} />
    </div>
  );
}
