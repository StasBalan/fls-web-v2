import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

export function ChallengerSettingsInfoCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Info className="w-[18px] h-[18px]" />
      </HoverCardTrigger>
      <HoverCardContent>
        Changes in this settings group will be visible only if you are
        Challenger #1000 and higher
      </HoverCardContent>
    </HoverCard>
  );
}
