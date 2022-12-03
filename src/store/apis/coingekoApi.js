import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coingekoApi = createApi({
  reducerPath: "tokenValue",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  endpoints(builder) {
    return {
      fetchValue: builder.query({
        query: (value) => {
          return {
            url: "/simple/price",
            params: {
              ids: value.from,
              vs_currencies: value.to,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchValueQuery } = coingekoApi;
export { coingekoApi };
