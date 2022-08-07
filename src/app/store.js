import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import regUserReducer from './slices/regUserSlice';
import ubicacionReducer from './slices/ubicacionSlice';
import monedaReducer from './slices/monedaSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    userReg: regUserReducer,
    ubicacion: ubicacionReducer,
    moneda: monedaReducer,
  },
});

export default store;
