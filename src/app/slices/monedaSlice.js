import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  monedas:[],
  moneda: null,
  monedaCot: null,
};

export const monedaSlice = createSlice({
  name: 'moneda',
  initialState,
  reducers: {
    // Actions
    setMonedas: (state, action) => {
      const { payload } = action;
      state.monedas = payload;
    },
    setMoneda: (state, action) => {
      const { payload } = action;
      state.moneda = payload;
    },
    setMonedaCot:(state, action) => {
        const { payload } = action;
        state.monedaCot = payload;
      },
    
    
  },
});

export const { setMonedas, setMonedaCot, setMoneda } = monedaSlice.actions;
export default monedaSlice.reducer;
