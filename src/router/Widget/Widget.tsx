import { createRoute } from "@tanstack/react-router";
import { Widget } from "@/pages/Widget";

import { rootRoute } from "../root";

export const widgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget",
  component: Widget,
});
