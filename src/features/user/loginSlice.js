/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (args, { getState }) => {
    const {
      login: {
        user: { email, password },
      },
    } = getState();
    return axios
      .post(
        'https://lavista-authentication-api.herokuapp.com/sessions',
        {
          user: {
            email,
            password,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === 'created') {
          return response.data;
        }
      });
  },
);

const initialState = {
  user: {
    email: '',
    password: '',
  },
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserProperty: (state, action) => {
      const { name, value } = action.payload;
      state.user[name] = value;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setUserProperty, logout } = loginSlice.actions;

export default loginSlice.reducer;

export const selectIsLoginLoading = (state) => state.login.loading;
