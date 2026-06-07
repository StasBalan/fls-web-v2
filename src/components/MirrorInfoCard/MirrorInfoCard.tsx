import { Trans, useTranslation } from "react-i18next";
import { Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MirrorInfoCard() {
  const { t } = useTranslation();

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="mirror" className="border border-white/[0.07] rounded-xl bg-white/[0.02] px-4">
        <AccordionTrigger className="text-sm text-white/50 hover:text-white/70 hover:no-underline gap-2 py-3">
          <span className="flex items-center gap-2">
            <Info className="w-4 h-4 shrink-0 text-sky-600" />
            {t("mirror.header")}
          </span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-sm text-white/50 pb-3">
          <p>{t("mirror.description.reason")}</p>
          <p>
            <Trans
              i18nKey="mirror.description.solution"
              components={[
                <a
                  href="https://fls-web-v2.vercel.app/widget-builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
                />,
              ]}
            />
          </p>
          <p className="text-amber-400/80 font-medium">
            {t("mirror.description.attention")}
          </p>
          <p>
            <Trans
              i18nKey="mirror.description.request"
              components={[
                <a
                  href="https://faceitlivestats.win"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 underline underline-offset-2 hover:text-orange-300"
                />,
              ]}
            />
          </p>
          <p>
            <Trans
              i18nKey="mirror.footer"
              components={[
                <a
                  href="https://t.me/faceitlivestats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                />,
              ]}
            />
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
