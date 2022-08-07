import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departamentos:[],
  ciudades:[],
};

export const ubicacionSlice = createSlice({
  name: 'ubicacion',
  initialState,
  reducers: {
    
    setDepartamentos: (state, action) => {
      const { payload } = action;
      state.departamentos = payload;
    },
    setCiudades: (state, action) => {
      const { payload } = action;
      state.ciudades = payload;
    },
  },
});

export const { setDepartamentos, setCiudades } = ubicacionSlice.actions;
export default ubicacionSlice.reducer;