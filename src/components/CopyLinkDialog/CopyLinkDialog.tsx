import { WandSparkles, Copy, Check, ArrowRight, Tv } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { DonateLinks } from "../DonateLinks";
import { ProBadge } from "../ProBadge";
import { MirrorInfoCard } from "../MirrorInfoCard";

export function CopyLinkDialog({ buildUrl }: { buildUrl: () => string }) {
  const { t } = useTranslation();

  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleButtonClick = () => {
    setUrl(buildUrl());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleButtonClick}>
          {t("builder.controls.dialog.trigger")}
          <WandSparkles />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("builder.controls.dialog.title")}</DialogTitle>
          <DialogDescription>
            {t("builder.controls.dialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input id="link" defaultValue={url} readOnly />
          </div>
          <CopyToClipboard
            text={url}
            onCopy={() => {
              toast(t("builder.controls.dialog.toast"));
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <Button type="submit" size="sm" className="px-3" disabled={copied}>
              {copied ? <Check /> : <Copy />}
            </Button>
          </CopyToClipboard>
        </div>

        <DialogFooter>
          <a
            href="https://t.me/fls_overlay_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-4 rounded-xl border border-[#FFB700]/40 bg-[#FFB700]/5 px-4 py-3 transition-colors hover:bg-[#FFB700]/10"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-[#FFB700]" />
                <span className="text-sm font-semibold text-white">
                  {t("builder.controls.dialog.upsell.title")}
                </span>
                <ProBadge />
              </div>

              <p className="text-xs text-white/50">
                {t("builder.controls.dialog.upsell.description")}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 mt-1 text-[#FFB700]/60" />
          </a>

          <DonateLinks className="!grid grid-flow-col grid-rows-2 !gap-3 w-full" />

          <MirrorInfoCard />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
