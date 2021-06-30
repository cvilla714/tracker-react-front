import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  password_confirmation: '',
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const { email, password, password_confirmation } = action.payload;
      state = {
        email,
        password,
        password_confirmation,
      };
    },
    setUserProperty: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setUsers, setUserProperty } = registrationSlice.actions;

export default registrationSlice.reducer;
