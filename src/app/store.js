/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';

import registrationReducer from '../features/user/registrationSlice';
import loginReducer from '../features/user/loginSlice';
import { checkLoginStatusapi } from '../features/user/statusSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,

    [checkLoginStatusapi.reducerPath]: checkLoginStatusapi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkLoginStatusapi.middleware),
});

export default store;
