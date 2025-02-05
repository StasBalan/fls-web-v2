import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { eventService } from "@/services";
import { useTranslation } from "react-i18next";

const languages = [
  { label: "English", value: "en-US" },
  { label: "Русский", value: "ru-RU" },
];

export function SelectLanguage() {
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.resolvedLanguage}
      onValueChange={(value) => {
        i18n.changeLanguage(value);

        eventService.track("change_language_click", {
          lang: value,
        });
      }}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((l, i) => (
            <SelectItem value={l.value} key={i}>
              {l.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
