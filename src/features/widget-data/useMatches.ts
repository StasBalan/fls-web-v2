import { faceitApiDataService } from "@/data-services";
import { useQuery } from "@tanstack/react-query";

function fetchMatches(id: string) {
  console.log("fetch matches");

  return faceitApiDataService.getStatsForMatches(id);
}

export function useMatches(id?: string) {
  return useQuery({
    queryKey: ["widget-data/matches", id],
    queryFn: () => (id ? fetchMatches(id) : undefined),
    enabled: !!id,
    gcTime: 0,
    staleTime: 0,
  });
}
