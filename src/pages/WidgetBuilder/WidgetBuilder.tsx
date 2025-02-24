import styles from "./WidgetBuilder.module.scss";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import { useTranslation } from "react-i18next";
import { eventService } from "@/services";

import { WidgetBuilderForms } from "./WidgetBuilderForms";

export function WidgetBuilder() {
  const { t } = useTranslation();

  const [nickname, setNickname] = useState("");
  const debouncedNicknameChange = useDebouncedCallback((value) => {
    setNickname(value);
  }, 1000);

  const [widgetType, setWidgetType] = useState<string>("compact-today");

  useEffect(() => {
    eventService.track("view_widget_builder_page");
  }, []);

  return (
    <div className={styles.wrapper}>
      <PageHeader hideButton />

      <div className={styles.container}>
        <div className={styles.topForm}>
          <div className="w-[300px]">
            <Label htmlFor="faceit-nickname">
              {t("builder.nickname.label")}
            </Label>
            <Input
              id="faceit-nickname"
              placeholder={t("builder.nickname.placeholder")}
              defaultValue={""}
              onChange={(event) => {
                debouncedNicknameChange(event.target.value);
              }}
              autoFocus
            />
          </div>

          <div className="w-[200px]">
            <Label htmlFor="widget-type"> {t("builder.type.label")}</Label>
            <Select
              value={widgetType}
              onValueChange={(value: string) => {
                setWidgetType(value);
              }}
            >
              <SelectTrigger id="widget-type">
                <SelectValue placeholder="Select widget type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact-today">Compact+</SelectItem>
                <SelectItem value="rich">Rich</SelectItem>
                <SelectItem value="compact">Compact</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <WidgetBuilderForms nickname={nickname} widgetType={widgetType} />
      </div>

      <PageFooter />
    </div>
  );
}
