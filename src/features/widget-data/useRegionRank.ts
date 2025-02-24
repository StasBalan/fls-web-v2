import { faceitApiDataService } from "@/data-services";
import { useQuery } from "@tanstack/react-query";

function fetchRegionRank(id: string, region: string) {
  console.log("fetch region rank");
  return faceitApiDataService.getRanking(id, region);
}

export function useRegionRank(id?: string, region?: string) {
  return useQuery({
    queryKey: ["widget-data/rank/region", id, region],
    queryFn: () => (id && region ? fetchRegionRank(id, region) : undefined),
    enabled: !!id && !!region,
    gcTime: 0,
    staleTime: 0,
  });
}
