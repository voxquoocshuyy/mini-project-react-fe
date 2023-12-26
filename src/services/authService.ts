import { createApi } from '@reduxjs/toolkit/dist/query/react';

import axiosBaseQuery from '@/api/axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: '/user/login',
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
