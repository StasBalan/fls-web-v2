import { Link } from "@tanstack/react-router";
import { BarChart2, Monitor, WandSparkles, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { eventService } from "@/services";
import clsx from "clsx";
import { Badge } from "@/components/Badge";
import { FeatureCard } from "./components";
import styles from "./PageCoreFeaturesSection.module.scss";

export function PageCoreFeaturesSection() {
  const { t } = useTranslation();

  const widgetFeatures = t("coreFeatures.widget.features", {
    returnObjects: true,
  }) as string[];
  const overlayFeatures = t("coreFeatures.overlay.features", {
    returnObjects: true,
  }) as string[];

  return (
    <section className={clsx("w-full px-4 py-12", styles.section)}>
      <div className="flex flex-col items-center text-center mb-12 gap-5">
        <Badge label={t("coreFeatures.badge")} dotColor="#FF5500" />

        <h2 className="text-3xl font-bold lg:text-4xl text-balance max-w-2xl">
          {t("coreFeatures.title")}
        </h2>

        <p className="text-[var(--site-text-secondary)] text-balance max-w-lg text-base">
          {t("coreFeatures.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard
          badgeIcon={<BarChart2 className="w-4 h-4" />}
          badge={t("coreFeatures.widget.badge")}
          title={t("coreFeatures.widget.title")}
          description={t("coreFeatures.widget.description")}
          features={widgetFeatures}
          cta={
            <Button asChild className="w-full font-bold h-12">
              <Link
                to="/widget-builder"
                onClick={() =>
                  eventService.track("build_widget_click", {
                    source: "home_core_features",
                  })
                }
              >
                {t("coreFeatures.widget.cta")}
                <WandSparkles className="w-4 h-4" />
              </Link>
            </Button>
          }
        />

        <FeatureCard
          isPro
          badgeIcon={<Monitor className="w-4 h-4" />}
          badge={t("coreFeatures.overlay.badge")}
          title={t("coreFeatures.overlay.title")}
          description={t("coreFeatures.overlay.description")}
          features={overlayFeatures}
          cta={
            <Button asChild className="w-full font-bold h-12">
              <a
                href="https://t.me/fls_overlay_bot"
                onClick={() => {
                  eventService.track("get_overlay_click", {
                    source: "card",
                  });
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("coreFeatures.overlay.cta")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          }
        />
      </div>
    </section>
  );
}
