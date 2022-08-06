import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dptos: [],
  ciudades: [],
};

export const ubicacionSlice = createSlice({
  name: 'ubicacion',
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

export const { setDptos, setCiudades } = ubicacionSlice.actions;
export default ubicacionSlice.reducer;