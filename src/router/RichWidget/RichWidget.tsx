import { createRoute } from "@tanstack/react-router";

import { rootRoute } from "../root";

export const richWidgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-rich",
  validateSearch: (
    search: Record<string, unknown>
  ): {
    hideRank: boolean;
    hideChallenger: boolean;
    transparent: boolean;
    nickname: string;
  } => {
    return {
      hideRank: (search.hideRank as boolean) || false,
      hideChallenger: (search.hideChallenger as boolean) || false,
      transparent: (search.transparent as boolean) || false,
      nickname: (search.nickname as string) || "",
    };
  },
}).lazy(() => import("./RichWidget.lazy").then((d) => d.Route));
