import { RichWidget } from "@/pages/RichWidget";
import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/widget-rich")({
  component: RichWidget,
});
