import { FaceitMatchStats, FaceitProfile } from "@/types";
import { mapInnerApiMatchStatsToLocal } from "@/utils";

const headers = new Headers();
headers.append("Authorization", "Bearer 5dbe323f-3fb4-4bd6-8b9f-b5688d63ebee");

export class FaceitApiDataService {
  public async getProfile(nickname: string): Promise<FaceitProfile> {
    const apiCall = await fetch(
      `https://open.faceit.com/data/v4/players?nickname=${nickname}&game=cs2`,
      {
        method: "GET",
        headers,
      }
    );
    const profile: FaceitProfile = await apiCall.json();

    return profile;
  }

  public async getLifetimeStats(id: string): Promise<number> {
    const apiCall = await fetch(
      `https://open.faceit.com/data/v4/players/${id}/stats/cs2`,
      {
        method: "GET",
        headers,
      }
    );
    const stats: any = await apiCall.json();

    const kdrFromStats = stats?.lifetime?.["Average K/D Ratio"];

    return kdrFromStats ? Number(kdrFromStats) : 0;
  }

  public async getCountryRanking(
    id: string,
    region: string,
    country: string
  ): Promise<number> {
    const apiCall = await fetch(
      `https://open.faceit.com/data/v4/rankings/games/cs2/regions/${region}/players/${id}?country=${country}&limit=1`,
      {
        method: "GET",
        headers,
      }
    );
    const ranking: any = await apiCall.json();

    return ranking?.position || 0;
  }

  public async getStatsForMatches(id: string): Promise<FaceitMatchStats[]> {
    const apiCall = await fetch(
      `https://morning-glade-4641.artyom-stan0905.workers.dev/?id=${id}`
    );
    const matches: any[] = await apiCall.json();

    return matches.map(mapInnerApiMatchStatsToLocal);
  }
}
