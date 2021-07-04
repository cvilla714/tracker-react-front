import { configureStore } from '@reduxjs/toolkit';

import registrationReducer from '../features/user/registrationSlice';
import loginReducer from '../features/user/loginSlice';
import { checkLoginStatusapi } from '../features/user/statusSlice';
// import usersReducer from '../features/user/statusSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    // users: usersReducer,
    [checkLoginStatusapi.reducerPath]: checkLoginStatusapi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(checkLoginStatusapi.middleware);
  },
});
