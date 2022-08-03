import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import regUserReducer from './slices/regUserSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    userReg: regUserReducer,
    
  },
});

export default store;
