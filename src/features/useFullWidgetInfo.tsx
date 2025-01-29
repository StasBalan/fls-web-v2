import { faceitApiDataService } from "@/data-services";
import { FaceitMatchStats, FaceitProfile } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useFullWidgetInfo(
  nickname: string,
  shouldRepeat: boolean = true
) {
  const [profile, setProfile] = useState<FaceitProfile | null>(null);
  const [matches, setMatches] = useState<FaceitMatchStats[]>([]);
  const [kdr, setKdr] = useState<number>(0);
  const [regionRanking, setRegionRanking] = useState<number>(0);
  const [countryRanking, setCountryRanking] = useState<number>(0);

  const fetchProfile = useCallback(async () => {
    if (!nickname) {
      return;
    }

    try {
      const fetchedProfile = await faceitApiDataService.getProfile(nickname);

      setProfile(fetchedProfile);
    } catch (err) {
      //
    }
  }, [nickname]);

  const fetchMatches = useCallback(async (id?: string) => {
    if (!id) {
      return;
    }

    try {
      const fetchedProfile = await faceitApiDataService.getStatsForMatches(id);

      setMatches(fetchedProfile);
    } catch (err) {
      //
    }
  }, []);

  const fetchLifetimeStats = useCallback(async (id: string) => {
    try {
      const fetchedLifetimeStats =
        await faceitApiDataService.getLifetimeStats(id);

      setKdr(fetchedLifetimeStats);
    } catch (err) {
      //
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
      //
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
        //
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
        console.log("FETCH PROFILE");
      }, 30000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [fetchProfile, shouldRepeat]);

  useEffect(() => {
    if (profile?.games.cs2.faceit_elo) {
      fetchMatches(profile.player_id);
      fetchLifetimeStats(profile.player_id);
      fetchRegionRanking(profile.player_id, profile.games.cs2.region);
      fetchCountryRanking(
        profile.player_id,
        profile.games.cs2.region,
        profile.country
      );

      console.log("FETCH MATCHES");
    }
  }, [
    fetchMatches,
    fetchLifetimeStats,
    fetchRegionRanking,
    fetchCountryRanking,
    profile?.player_id,
    profile?.games.cs2.faceit_elo,
    profile?.games.cs2.region,
    profile?.country,
  ]);

  return { profile, matches, kdr, countryRanking, regionRanking };
}
