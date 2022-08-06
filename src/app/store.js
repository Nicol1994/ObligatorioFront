import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import regUserReducer from './slices/regUserSlice';
import ubicacionReducer from './slices/ubicacionSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    userReg: regUserReducer,
    ubicacion: ubicacionReducer,
    
  },
});

export default store;
