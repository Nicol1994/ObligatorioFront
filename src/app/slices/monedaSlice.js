import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moneda:[],
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
    
  },
});

export const { setMoneda } = monedaSlice.actions;
export default monedaSlice.reducer;
