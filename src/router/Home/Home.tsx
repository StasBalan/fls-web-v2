import { createRoute } from "@tanstack/react-router";

import { rootRoute } from "../root";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
}).lazy(() => import("./Home.lazy").then((d) => d.Route));
