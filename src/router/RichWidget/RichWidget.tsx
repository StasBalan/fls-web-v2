import { createRoute } from "@tanstack/react-router";
import { RichWidget } from "@/pages/RichWidget";

import { rootRoute } from "../root";

export const richWidgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-rich",
  component: RichWidget,
});
