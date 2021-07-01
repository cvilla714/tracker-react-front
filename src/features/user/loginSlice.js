import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUsers = createAsyncThunk(
  'login/loginUsers',
  async (arg, { getState }) => {
    const {
      login: {
        user: { email, password },
      },
    } = getState();

    return axios
      .post(
        'http://localhost:3001/sessions',
        {
          user: {
            email,
            password,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.logged_in === true) {
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
    setLoginProperty: (state, action) => {
      const { name, value } = action.payload;
      state.user[name] = value;
    },
  },
  extraReducers: {
    [loginUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUsers.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [loginUsers.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { setLoginProperty } = loginSlice.actions;

export default loginSlice.reducer;
