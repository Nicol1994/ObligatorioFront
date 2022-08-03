import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Actions
    setLoginUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
    setLogoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;
export default userSlice.reducer;
