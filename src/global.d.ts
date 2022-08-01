interface PaginatedResponse<T> {
  page: number;
  amount: number;
  count: number;
  values: T[];
}
