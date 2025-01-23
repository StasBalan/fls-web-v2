import { createRouter } from "@tanstack/react-router";

import { rootRoute } from "./root";
import { homeRoute } from "./Home";
import { widgetRoute } from "./Widget";
import { widgetBuilderRoute } from "./WidgetBuilder";

const routeTree = rootRoute.addChildren([
  homeRoute,
  widgetRoute,
  widgetBuilderRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
