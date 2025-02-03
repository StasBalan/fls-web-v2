import { CompactWidget } from "@/pages/CompactWidget";
import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/widget-compact")({
  component: CompactWidget,
});
