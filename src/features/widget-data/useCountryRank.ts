import { faceitApiDataService } from "@/data-services";
import { useQuery } from "@tanstack/react-query";

function fetchCountryRank(id: string, region: string, country: string) {
  console.log("fetch country rank");
  return faceitApiDataService.getRanking(id, region, country);
}

export function useCountryRank(id?: string, region?: string, country?: string) {
  return useQuery({
    queryKey: ["widget-data/rank/country", id, region],
    queryFn: () =>
      id && region && country
        ? fetchCountryRank(id, region, country)
        : undefined,
    enabled: !!id && !!region && !!country,
    gcTime: 0,
    staleTime: 0,
  });
}
