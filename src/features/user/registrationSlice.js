/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk(
  'registration/createUser',
  async (userFromArg, { getState }) => {
    const {
      registration: {
        user: { email, password, password_confirmation: paswordConfirmation },
      },
    } = getState();
    return axios
      .post(
        'https://lavista-authentication-api.herokuapp.com/registrations',
        {
          user: {
            email,
            password,
            paswordConfirmation,
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
    password_confirmation: '',
  },
  loading: false,
  error: null,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUserProperty: (state, action) => {
      const { name, value } = action.payload;
      state.user[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setUsers, setUserProperty } = registrationSlice.actions;

export default registrationSlice.reducer;

export const selectIsRegistrationLoading = (state) => state.registration.loading;
