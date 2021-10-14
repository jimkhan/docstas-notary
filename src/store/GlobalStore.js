import {configureStore} from '@reduxjs/toolkit';

import authentication from '../feature/auth/authentication';
import userInfo from '../feature/auth/userInfo';

export const store = configureStore({
  reducer: {
    auth: authentication,
    user: userInfo,
  },
});
