import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    removeUserData: state => initialState,
  },
});

export const {setUserData, removeUserData} = userInfo.actions;

export default userInfo.reducer;
