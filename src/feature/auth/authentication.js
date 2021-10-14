import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isLoading: true,
  userToken: null,
};

const authState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
      console.log('call from app');
    },
    signOut: state => initialState,
  },
});

export const {signIn, signOut} = authState.actions;

export default authState.reducer;
