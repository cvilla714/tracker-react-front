import { configureStore } from '@reduxjs/toolkit';

import registrationReducer from '../features/user/registrationSlice';
import loginReducer from '../features/user/loginSlice';
import { checkLoginStatus } from '../features/user/statusSlice';
// import usersReducer from '../features/user/statusSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    // users: usersReducer,
    [checkLoginStatus.reducerPath]: checkLoginStatus.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(checkLoginStatus.middleware);
  },
});
