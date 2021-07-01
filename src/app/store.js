import { configureStore } from '@reduxjs/toolkit';

import registrationReducer from '../features/user/registrationSlice';
import loginReducer from '../features/user/loginSlice.js';
export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
  },
});
