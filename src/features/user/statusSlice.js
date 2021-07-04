import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

export const checkLoginStatusapi = createApi({
  reducerPath: 'checkLoginStatus',
  // baseQuery: axios.get('http://localhost:3001/', {
  //   withCredentials: true,
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
  }),
});

export const { useGetLoginUserInfoQuery, useLogoutUserMutation } =
  checkLoginStatusapi;
