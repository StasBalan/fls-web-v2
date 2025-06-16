import { eventService } from "@/services";

import axios, { AxiosError } from "axios";

function errorInterceptor(error: AxiosError) {
  const url = new URL(error.config?.url || "", error.config?.baseURL);

  eventService.track("FaceitApiDataService_error", {
    url: url.origin + url.pathname,
    params: JSON.stringify(error.config?.params),
    code: error.code,
    status: error.status,
    message: error.message,
  });

  return Promise.reject(error);
}

export const faceitInstance = axios.create({
  baseURL: "https://open.faceit.com/data/v4/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_FACEIT_BEARER_TOKEN}`,
  },
});

faceitInstance.interceptors.response.use(
  (response) => response,
  errorInterceptor
);

export const matchesWorkerInstance = axios.create({
  baseURL: "https://matches.faceitlivestats.win/",
});

matchesWorkerInstance.interceptors.response.use(
  (response) => response,
  errorInterceptor
);

export const matchesVercelInstance = axios.create({
  baseURL: "https://api-fls.vercel.app/api/matches",
});

matchesVercelInstance.interceptors.response.use(
  (response) => response,
  errorInterceptor
);
