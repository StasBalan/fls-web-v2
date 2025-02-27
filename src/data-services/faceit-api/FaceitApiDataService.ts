/* eslint-disable no-useless-catch */
import { FaceitMatchStats, FaceitProfile } from "@/types";
import { mapInnerApiMatchStatsToLocal } from "@/utils";

import {
  faceitInstance,
  matchesVercelInstance,
  matchesWorkerInstance,
} from "./instances";
import { eventService } from "@/services";

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

  public async getStatsForMatches(
    id: string,
    provider: "cloudflare" | "vercel"
  ): Promise<FaceitMatchStats[]> {
    try {
      const instance =
        provider === "vercel" ? matchesVercelInstance : matchesWorkerInstance;

      const apiCall = await instance.get<
        Array<
          Record<string, string> & {
            date: number;
          }
        >
      >("", { params: { id: id } });

      eventService.track("FaceitApiDataService_success", {
        method: "getStatsForMatches",
        id: id,
        instance: instance.getUri(),
      });

      return apiCall.data.map(mapInnerApiMatchStatsToLocal);
    } catch (err: any) {
      throw err;
    }
  }
}
