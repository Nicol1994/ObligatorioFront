import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import regUserReducer from './slices/regUserSlice';
import ubicacionReducer from './slices/ubicacionSlice';
import monedaReducer from './slices/monedaSlice';
import transaccionesReducer from './slices/transaccionesSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    userReg: regUserReducer,
    ubicacion: ubicacionReducer,
    moneda: monedaReducer,
    trans: transaccionesReducer,
  },
});

export default store;
