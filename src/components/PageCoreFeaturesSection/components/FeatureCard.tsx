import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { ProBadge } from "@/components/ProBadge";
import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
  badgeIcon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  features: string[];
  cta: React.ReactNode;
  isPro?: boolean;
}

export function FeatureCard({ badgeIcon, badge, title, description, features, cta, isPro }: FeatureCardProps) {
  return (
    <div
      className={clsx(
        "relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 gap-6 will-change-transform",
        styles.card,
        isPro && styles.proBorder
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5500]">
          {badgeIcon}
          {badge}
        </div>
        {isPro && <ProBadge />}
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>
        <p className="text-[var(--site-text-secondary)] text-sm leading-relaxed">{description}</p>
        <ul className="flex flex-col gap-2 mt-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--site-text-secondary)]">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {cta}
    </div>
  );
}
