import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

export function ChallengerSettingsInfoCard({
  text,
}: {
  text: React.ReactNode;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Info className="w-[18px] h-[18px]" />
      </HoverCardTrigger>
      <HoverCardContent>{text}</HoverCardContent>
    </HoverCard>
  );
}
