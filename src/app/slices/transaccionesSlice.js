import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trans: [],
  
};

export const transaccionesSlice = createSlice({
  name: 'trans',
  initialState,
  reducers: {
    // Actions
    setTrans: (state, action) => {
      const { payload } = action;
      state.trans = payload;
      
    },
    addNewTrans: (state, action) => {
      const { payload } = action;
      state.trans = [...state.todos, payload];
      
    },
    
  },
});

export const { setTrans, addNewTrans} = transaccionesSlice.actions;
export default transaccionesSlice.reducer;