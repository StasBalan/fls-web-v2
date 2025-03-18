import * as amplitude from "@amplitude/analytics-browser";

export class EventService {
  public init() {
    amplitude.init(import.meta.env.VITE_AMPLITUDE_API_KEY, {
      autocapture: true,
      serverZone: "EU",
    });
  }

  public track(
    eventInput: string | amplitude.Types.BaseEvent,
    eventProperties?: Record<string, unknown>,
    eventOptions?: amplitude.Types.EventOptions
  ) {
    const props = {
      origin: window.location.origin,
      ...eventProperties,
    };

    amplitude.track(eventInput, props, eventOptions);
  }
}
