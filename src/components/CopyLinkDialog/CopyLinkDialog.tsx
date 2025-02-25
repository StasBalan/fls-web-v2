import { Blocks, Copy } from "lucide-react";

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

export function CopyLinkDialog({ buildUrl }: { buildUrl: () => string }) {
  const { t } = useTranslation();

  const [url, setUrl] = useState("");

  const handleButtonClick = () => {
    setUrl(buildUrl());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleButtonClick}>
          <Blocks />
          {t("builder.controls.dialog.trigger")}
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
            }}
          >
            <Button type="submit" size="sm" className="px-3">
              <Copy />
            </Button>
          </CopyToClipboard>
        </div>
        <DialogFooter className="sm:justify-start">
          <DonateLinks />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
