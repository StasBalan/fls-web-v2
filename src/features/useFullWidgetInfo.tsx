import { faceitApiDataService } from "@/data-services";
import { FaceitMatchStats, FaceitProfile } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useFullWidgetInfo(
  nickname: string,
  shouldRepeat: boolean = true
) {
  const [profile, setProfile] = useState<FaceitProfile | null | undefined>();
  const [matches, setMatches] = useState<
    FaceitMatchStats[] | null | undefined
  >();
  const [kdr, setKdr] = useState<number | null | undefined>();
  const [regionRanking, setRegionRanking] = useState<
    number | null | undefined
  >();
  const [countryRanking, setCountryRanking] = useState<
    number | null | undefined
  >();

  const fetchProfile = useCallback(async () => {
    try {
      if (nickname) {
        const fetchedProfile = await faceitApiDataService.getProfile(nickname);

        setProfile(fetchedProfile);
      } else {
        setProfile(null);
      }
    } catch (err) {
      setProfile(null);
    }
  }, [nickname]);

  const fetchMatches = useCallback(async (id: string) => {
    try {
      const fetchedMatches = await faceitApiDataService.getStatsForMatches(id);

      setMatches(fetchedMatches);
    } catch (err) {
      setMatches(null);
    }
  }, []);

  const fetchLifetimeStats = useCallback(async (id: string) => {
    try {
      const fetchedLifetimeStats =
        await faceitApiDataService.getLifetimeStats(id);

      setKdr(fetchedLifetimeStats);
    } catch (err) {
      setKdr(null);
    }
  }, []);

  const fetchRegionRanking = useCallback(async (id: string, region: string) => {
    try {
      const fetchedFaceitRanking = await faceitApiDataService.getRanking(
        id,
        region
      );

      setRegionRanking(fetchedFaceitRanking);
    } catch (err) {
      setRegionRanking(null);
    }
  }, []);

  const fetchCountryRanking = useCallback(
    async (id: string, region: string, country: string) => {
      try {
        const fetchedFaceitRanking = await faceitApiDataService.getRanking(
          id,
          region,
          country
        );

        setCountryRanking(fetchedFaceitRanking);
      } catch (err) {
        setCountryRanking(null);
      }
    },
    []
  );

  useEffect(() => {
    fetchProfile();

    let timeout: NodeJS.Timeout;
    if (shouldRepeat) {
      timeout = setInterval(() => {
        fetchProfile();
      }, 30000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [fetchProfile, shouldRepeat]);

  useEffect(() => {
    if (profile?.games?.cs2?.faceit_elo) {
      fetchMatches(profile.player_id);
      fetchLifetimeStats(profile.player_id);
      fetchRegionRanking(profile.player_id, profile.games.cs2.region);
      fetchCountryRanking(
        profile.player_id,
        profile.games.cs2.region,
        profile.country
      );
    }
  }, [
    fetchMatches,
    fetchLifetimeStats,
    fetchRegionRanking,
    fetchCountryRanking,
    profile?.player_id,
    profile?.games?.cs2?.faceit_elo,
    profile?.games?.cs2?.region,
    profile?.country,
  ]);

  return { profile, matches, kdr, countryRanking, regionRanking };
}
