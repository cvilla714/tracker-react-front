import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const checkLoginStatusapi = createApi({
  reducerPath: 'checkLoginStatus',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    getLoginUserInfo: builder.query({
      query: () => `logged_in/`,
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: `logout`,
          method: 'DELETE',
        };
      },
    }),
    getUserExpenses: builder.query({
      query() {
        return {
          url: 'expenses',
          method: 'GET',
        };
      },
    }),
    postUserExpenses: builder.mutation({
      query(body) {
        return {
          url: 'expenses',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {
  useGetLoginUserInfoQuery,
  useLogoutUserMutation,
  useGetUserExpensesQuery,
  usePostUserExpensesMutation,
} = checkLoginStatusapi;
