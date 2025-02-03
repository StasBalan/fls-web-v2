import { Home } from "@/pages/Home";
import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/")({
  component: Home,
});
