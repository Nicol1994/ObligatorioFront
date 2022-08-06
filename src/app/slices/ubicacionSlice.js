import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dptos: [],
  ciudades: [],
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    
    setDptos: (state, action) => {
      const { payload } = action;
      state.dptos = payload;
    },
    setCiudades: (state, action) => {
      const { payload } = action;
      state.ciudades = payload;
    },
  },
});

export const { setDptos, setCiudades } = locationSlice.actions;
export default locationSlice.reducer;