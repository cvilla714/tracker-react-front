import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const checkLoginStatus = createApi({
  reducerPath: 'checkLoginStatus',
  baseQuery: axios.get('http://localhost:3001/', {
    withCredentials: true,
  }),
  endpoints: (builder) => ({
    getLoginUserInfo: builder.query({
      query: (email) => `logged_in/${email}`,
    }),
  }),
});

export const { useGetLoginUserInfo } = checkLoginStatus;
