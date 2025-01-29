import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import styles from "./Builder.module.scss";
import { CopyLinkDialog } from "../CopyLinkDialog";

export function Builder({
  nickname,
  isTransparent,
  onNicknameChange,
  onIsTransparentChange,
}: {
  nickname: string;
  isTransparent: boolean;
  onNicknameChange: (value: string) => void;
  onIsTransparentChange: (value: boolean) => void;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nickname}></div>
      <div className={styles.transparent}>
        <Switch
          id="is-transparent"
          checked={isTransparent}
          onCheckedChange={(event) => {
            onIsTransparentChange(event);
          }}
        />
        <Label htmlFor="is-transparent">Transparent mode</Label>
      </div>
      <div className={styles.copy}>
        <CopyLinkDialog />
      </div>
    </div>
  );
}
