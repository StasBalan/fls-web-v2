import { createRoute } from "@tanstack/react-router";

import { rootRoute } from "../root";

export const widgetBuilderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/widget-builder",
}).lazy(() => import("./WidgetBuilder.lazy").then((d) => d.Route));
