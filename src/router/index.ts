import { createRouter } from "@tanstack/react-router";

import { rootRoute } from "./root";
import { homeRoute } from "./Home";
import { widgetBuilderRoute } from "./WidgetBuilder";
import { richWidgetRoute } from "./RichWidget";
import { compactWidgetRoute } from "./CompactWidget";

const routeTree = rootRoute.addChildren([
  homeRoute,
  widgetBuilderRoute,
  richWidgetRoute,
  compactWidgetRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
