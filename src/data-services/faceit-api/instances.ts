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
  headers: { Authorization: "Bearer 5dbe323f-3fb4-4bd6-8b9f-b5688d63ebee" },
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

// https://functions.yandexcloud.net/d4e111fk6c6241r9baqi?id=e4b6ed81-f266-4ca4-a831-323f9ae90b5d
// https://worker.faceitlivestats.win/d4e111fk6c6241r9baqi?id=e4b6ed81-f266-4ca4-a831-323f9ae90b5d
export const matchesYandexInstance = axios.create({
  baseURL: "https://worker.faceitlivestats.win/d4e111fk6c6241r9baqi",
});

matchesYandexInstance.interceptors.response.use(
  (response) => response,
  errorInterceptor
);
