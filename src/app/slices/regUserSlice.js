import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userReg: null,
};

export const regUserSlice = createSlice({
  name: 'userReg',
  initialState,
  reducers: {
    // Actions
    setRegistroUser: (state, action) => {
      const { payload } = action;
      state.userReg = payload;
    },
    
  },
});

export const { setRegistroUser } = regUserSlice.actions;
export default regUserSlice.reducer;
