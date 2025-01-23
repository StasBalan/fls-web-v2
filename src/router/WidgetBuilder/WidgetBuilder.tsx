import { createRoute } from "@tanstack/react-router";
import { WidgetBuilder } from "@/pages/WidgetBuilder";

import { rootRoute } from "../root";

export const widgetBuilderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-builder",
  component: WidgetBuilder,
});
