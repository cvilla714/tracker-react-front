import { configureStore } from '@reduxjs/toolkit';

import registrationReducer from '../features/user/registrationSlice';
import loginReducer from '../features/user/loginSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
  },
});
