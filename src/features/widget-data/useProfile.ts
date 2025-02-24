import { faceitApiDataService } from "@/data-services";
import { useQuery } from "@tanstack/react-query";

function fetchProfile(nickname: string) {
  console.log("fetch profile");
  return faceitApiDataService.getProfile(nickname);
}

export function useProfile(nickname: string) {
  return useQuery({
    queryKey: ["widget-data/profile", nickname],
    queryFn: () => fetchProfile(nickname),
    gcTime: 0,
    staleTime: 0,
  });
}
