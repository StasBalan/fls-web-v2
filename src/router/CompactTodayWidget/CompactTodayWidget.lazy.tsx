import { CompactTodayWidget } from "@/pages/CompactTodayWidget";
import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/widget-compact-today")({
  component: CompactTodayWidget,
});
