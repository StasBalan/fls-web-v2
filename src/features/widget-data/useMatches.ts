import { faceitApiDataService } from "@/data-services";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { create } from "zustand";

const ERROR_COUNT_TO_CHANGE_PROVIDER = 5;

const useErrorsStore = create<{
  errors: number;
  setErrors: (error: number) => void;
}>((set) => ({
  errors: 0,
  setErrors: (error: number) => set(() => ({ errors: error })),
}));

function fetchMatches(id: string, errors: number) {
  console.log("fetch matches");

  return faceitApiDataService.getStatsForMatches(
    id,
    errors >= ERROR_COUNT_TO_CHANGE_PROVIDER ? "vercel" : "cloudflare"
  );
}

export function useMatches(id?: string) {
  const errors = useErrorsStore((state) => state.errors);
  const setErrors = useErrorsStore((state) => state.setErrors);

  const matchesQuery = useQuery({
    queryKey: ["widget-data/matches", id],
    queryFn: () => (id ? fetchMatches(id, errors) : undefined),
    enabled: !!id,
    gcTime: 0,
    staleTime: 0,
  });

  useEffect(() => {
    if (matchesQuery.errorUpdateCount <= ERROR_COUNT_TO_CHANGE_PROVIDER) {
      setErrors(matchesQuery.errorUpdateCount);
    } else {
      setErrors(ERROR_COUNT_TO_CHANGE_PROVIDER);
    }
  }, [matchesQuery.errorUpdateCount]);

  return matchesQuery;
}
