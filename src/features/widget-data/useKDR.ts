import { faceitApiDataService } from "@/data-services";
import { useQuery } from "@tanstack/react-query";

function fetchKDR(id: string) {
  console.log("fetch kdr");
  return faceitApiDataService.getLifetimeStats(id);
}

export function useKDR(id?: string) {
  return useQuery({
    queryKey: ["widget-data/kdr", id],
    queryFn: () => (id ? fetchKDR(id) : undefined),
    enabled: !!id,
    gcTime: 0,
    staleTime: 0,
  });
}
