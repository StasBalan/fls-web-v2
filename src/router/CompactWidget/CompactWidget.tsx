import { createRoute } from "@tanstack/react-router";
import { CompactWidget } from "@/pages/CompactWidget";

import { rootRoute } from "../root";

export const compactWidgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-compact",
  component: CompactWidget,
  validateSearch: (
    search: Record<string, unknown>
  ): {
    hideRank: boolean;
    hideChallenger: boolean;
    hideChallengerIconBorder: boolean;
    rounded: boolean;
    transparent: boolean;
    nickname: string;
  } => {
    return {
      hideRank: (search.hideRank as boolean) || false,
      hideChallenger: (search.hideChallenger as boolean) || false,
      hideChallengerIconBorder:
        (search.hideChallengerIconBorder as boolean) || false,
      rounded: (search.rounded as boolean) || false,
      transparent: (search.transparent as boolean) || false,
      nickname: (search.nickname as string) || "",
    };
  },
});
