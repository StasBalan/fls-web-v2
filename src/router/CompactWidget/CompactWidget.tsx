import { createRoute } from "@tanstack/react-router";

import { rootRoute } from "../root";

export const compactWidgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-compact",
  validateSearch: (
    search: Record<string, unknown>
  ): {
    hideRank: boolean;
    hideChallenger: boolean;
    rounded: boolean;
    transparent: boolean;
    isGiant: boolean;
    nickname: string;
  } => {
    const isGiant =
      search.isGiant === undefined
        ? true
        : (search.isGiant as boolean) || false;

    return {
      hideRank: (search.hideRank as boolean) || false,
      hideChallenger: (search.hideChallenger as boolean) || false,
      rounded: (search.rounded as boolean) || false,
      transparent: (search.transparent as boolean) || false,
      isGiant: isGiant,
      nickname: (search.nickname as string) || "",
    };
  },
}).lazy(() => import("./CompactWidget.lazy").then((d) => d.Route));
