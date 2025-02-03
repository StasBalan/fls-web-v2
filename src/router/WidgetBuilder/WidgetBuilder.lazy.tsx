import { WidgetBuilder } from "@/pages/WidgetBuilder";
import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/widget-builder")({
  component: WidgetBuilder,
});
