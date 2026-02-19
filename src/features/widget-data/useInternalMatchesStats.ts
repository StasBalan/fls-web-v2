import { faceitApiDataService } from "@/data-services";
import { useQuery } from "@tanstack/react-query";

function fetchInternalMatchesStats(id: string) {
  return faceitApiDataService.getInternalStatsForMatches(id);
}

export function useInternalMatchesStats(id?: string) {
  return useQuery({
    queryKey: ["widget-data/internal-matches-stats", id],
    queryFn: () => (id ? fetchInternalMatchesStats(id) : undefined),
    enabled: !!id,
    gcTime: 0,
    staleTime: 0,
  });
}
