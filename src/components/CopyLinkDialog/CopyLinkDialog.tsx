import { Blocks, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function CopyLinkDialog({ buildUrl }: { buildUrl: () => string }) {
  const [url, setUrl] = useState("");

  const handleButtonClick = () => {
    setUrl(buildUrl());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleButtonClick}>
          <Blocks />
          Build link
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Widget link</DialogTitle>
          <DialogDescription>
            Create 'Browser' source in OBS or other studio software and paste
            this link.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={url} readOnly />
          </div>
          <CopyToClipboard
            text={url}
            onCopy={() => {
              toast("Copied.");
            }}
          >
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </CopyToClipboard>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
