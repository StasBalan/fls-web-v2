import { eventService } from "@/services";
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

    if (apiCall.ok) {
      const profile: FaceitProfile = await apiCall.json();

      return profile;
    }

    eventService.track("FaceitApi_error", {
      method: "getProfile",
      status: apiCall.status,
      text: apiCall.statusText,
      url: apiCall.url,
    });

    throw apiCall;
  }

  public async getLifetimeStats(id: string): Promise<number> {
    const apiCall = await fetch(
      `https://open.faceit.com/data/v4/players/${id}/stats/cs2`,
      {
        method: "GET",
        headers,
      }
    );

    if (apiCall.ok) {
      const stats: any = await apiCall.json();

      const kdrFromStats = stats?.lifetime?.["Average K/D Ratio"];

      return kdrFromStats ? Number(kdrFromStats) : 0;
    }

    eventService.track("FaceitApi_error", {
      method: "getLifetimeStats",
      status: apiCall.status,
      text: apiCall.statusText,
      url: apiCall.url,
    });

    throw apiCall;
  }

  public async getRanking(
    id: string,
    region: string,
    country?: string
  ): Promise<number> {
    const apiCall = await fetch(
      `https://open.faceit.com/data/v4/rankings/games/cs2/regions/${region}/players/${id}?limit=1&${country ? "country=" + country : ""}`,
      {
        method: "GET",
        headers,
      }
    );

    if (apiCall.ok) {
      const ranking: any = await apiCall.json();

      return ranking?.position || 0;
    }

    eventService.track("FaceitApi_error", {
      method: "getRanking",
      status: apiCall.status,
      text: apiCall.statusText,
      url: apiCall.url,
    });

    throw apiCall;
  }

  public async getStatsForMatches(id: string): Promise<FaceitMatchStats[]> {
    const apiCall = await fetch(
      `https://morning-glade-4641.artyom-stan0905.workers.dev/?id=${id}`
    );

    if (apiCall.ok) {
      const matches: any[] = await apiCall.json();

      return matches.map(mapInnerApiMatchStatsToLocal);
    }

    eventService.track("FaceitApi_error", {
      method: "getStatsForMatches",
      status: apiCall.status,
      text: apiCall.statusText,
      url: apiCall.url,
    });

    throw apiCall;
  }
}
