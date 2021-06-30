import { configureStore } from '@reduxjs/toolkit';

import registrationReducer from '../features/user/registrationSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});
