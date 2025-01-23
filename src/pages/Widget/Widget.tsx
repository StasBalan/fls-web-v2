import { BaseWidget } from "@/components/BaseWidget";
import { useSearch } from "@tanstack/react-router";

export function Widget() {
  const search = useSearch({ strict: false });

  return <BaseWidget />;
}
