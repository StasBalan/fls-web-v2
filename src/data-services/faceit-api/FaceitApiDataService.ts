/* eslint-disable no-useless-catch */
import { FaceitInternalMatchStats, FaceitInternalMatchStatsResponse, FaceitMatchStats, FaceitProfile } from "@/types";

import {
  faceitInstance,
} from "./instances";

export class FaceitApiDataService {
  public async getProfile(nickname: string) {
    try {
      const apiCall = await faceitInstance.get<FaceitProfile>(`players`, {
        params: {
          nickname: nickname,
          game: "cs2",
        },
      });

      return apiCall.data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getLifetimeStats(id: string): Promise<number> {
    try {
      const apiCall = await faceitInstance.get(`players/${id}/stats/cs2`);

      const kdr = apiCall.data?.lifetime?.["Average K/D Ratio"];
      return kdr ? Number(kdr) : 0;
    } catch (err: any) {
      throw err;
    }
  }

  public async getRanking(
    id: string,
    region: string,
    country?: string
  ): Promise<number> {
    try {
      const apiCall = await faceitInstance.get<{ position: number }>(
        `rankings/games/cs2/regions/${region}/players/${id}`,
        {
          params: {
            limit: 1,
            country: country,
          },
        }
      );

      return apiCall.data?.position || 0;
    } catch (err: any) {
      throw err;
    }
  }

  public async getInternalStatsForMatches(id: string): Promise<Array<FaceitInternalMatchStats>> {
    try {
      const stats = await faceitInstance.get<FaceitInternalMatchStatsResponse>(`players/${id}/games/cs2/stats?offset=0&limit=30`);
      const response = stats.data.items.map((item) => item.stats)

      return response;
    } catch (err: any) {
      throw err;
    }
  }

  public async getStatsForMatches(
    _id: string,
    _provider: "cloudflare" | "vercel"
  ): Promise<FaceitMatchStats[]> {
    try {
      // // const instance =
      // //   provider === "vercel" ? matchesVercelInstance : matchesWorkerInstance;

      // const instance = matchesVercelInstance;

      // const apiCall = await instance.get<
      //   Array<
      //     Record<string, string> & {
      //       date: number;
      //     }
      //   >
      // >("", { params: { id: id } });

      // eventService.track("FaceitApiDataService_success", {
      //   method: "getStatsForMatches",
      //   id: id,
      //   instance: instance.getUri(),
      // });

      return []; // apiCall.data.map(mapInnerApiMatchStatsToLocal);
    } catch (err: any) {
      throw err;
    }
  }
}
