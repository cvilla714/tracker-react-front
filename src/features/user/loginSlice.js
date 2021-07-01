import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setLoginProperty } = loginSlice.actions;

export default loginSlice.reducer;
