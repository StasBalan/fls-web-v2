import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import {
  WandSparkles,
  ArrowRight,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import styles from "./PageHeroSection.module.scss";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { ProBadge } from "@/components/ProBadge";
import { eventService } from "@/services";

interface PageHeroSectionProps {
  widgetPreview: React.ReactNode;
}

export function PageHeroSection({ widgetPreview }: PageHeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className={clsx(
        "relative w-full lg:min-h-screen pt-[120px] md:pt-[150px] lg:pt-[200px] pb-[60px] lg:pb-9 px-4",
        styles.section,
      )}
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex flex-col items-start gap-8 lg:w-[50%]">
          <Badge label={t("hero.badge")} dotColor="#22c55e" />

          <h1 className="text-5xl font-bold leading-tight text-balance">
            <Trans i18nKey="hero.title" components={[<br />]} />
          </h1>

          <p className="text-[var(--site-text-secondary)] leading-relaxed">
            {t("hero.description")}
          </p>

          <div className={clsx("flex flex-wrap gap-3", styles.buttons)}>
            <Button asChild className="font-bold h-12 px-6">
              <Link
                to="/widget-builder"
                onClick={() =>
                  eventService.track("build_widget_click", {
                    source: "home_hero",
                  })
                }
              >
                {t("hero.cta.widget")}
                <WandSparkles className="w-4 h-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="font-bold h-12 px-6">
              <a href="https://t.me/fls_overlay_bot" target="_blank" rel="noopener noreferrer">
                {t("hero.cta.overlay")}

                <ProBadge />

                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--site-text-secondary)]">
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {t("hero.stats.streamers")}
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              {t("hero.stats.free")}
            </span>
          </div>
        </div>

        <div className="lg:w-[50%] w-full">{widgetPreview}</div>
      </div>

      <div className="lg:flex hidden absolute bottom-9 left-1/2 -translate-x-1/2 flex-col items-center text-[#F1F1F1]/70">
        <svg width="28" height="44" viewBox="0 0 28 44" fill="none">
          <rect
            x="1"
            y="1"
            width="26"
            height="42"
            rx="13"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="13"
            y="18"
            width="2"
            height="8"
            rx="1"
            fill="currentColor"
            className="animate-bounce"
          />
        </svg>
        <ChevronDown
          className="mt-2 w-5 h-5 animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
        <ChevronDown
          className="-mt-2 w-5 h-5 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
      </div>
    </section>
  );
}
