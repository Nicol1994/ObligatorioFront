import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moneda:[],
  monedaCot: null,
};

export const monedaSlice = createSlice({
  name: 'moneda',
  initialState,
  reducers: {
    // Actions
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

export const { setMoneda, setMonedaCot } = monedaSlice.actions;
export default monedaSlice.reducer;
