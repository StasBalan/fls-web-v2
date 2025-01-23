export type PaginatedResponse<T> = {
    items: T[];
    start: number;
    end: number
  }