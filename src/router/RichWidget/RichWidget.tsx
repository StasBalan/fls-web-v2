import { createRoute } from "@tanstack/react-router";
import { RichWidget } from "@/pages/RichWidget";

import { rootRoute } from "../root";

export const richWidgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-rich",
  component: RichWidget,
  validateSearch: (
    search: Record<string, unknown>
  ): {
    hideRank: boolean;
    hideChallenger: boolean;
    hideChallengerIconBorder: boolean;
    transparent: boolean;
    nickname: string;
  } => {
    return {
      hideRank: (search.hideRank as boolean) || false,
      hideChallenger: (search.hideChallenger as boolean) || false,
      hideChallengerIconBorder:
        (search.hideChallengerIconBorder as boolean) || false,
      transparent: (search.transparent as boolean) || false,
      nickname: (search.nickname as string) || "",
    };
  },
});
