import { createRoute } from "@tanstack/react-router";
import { CompactWidget } from "@/pages/CompactWidget";

import { rootRoute } from "../root";

export const compactWidgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-compact",
  component: CompactWidget,
});
