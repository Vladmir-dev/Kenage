import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
  initialState:{
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    signUpStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess(state, action) {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    signUpFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },

    loginSuccess(state, action) {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
})


export const {
    signUpStart,
    signUpSuccess,
    signUpFailure,
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
  } = usersSlice.actions;

  export default usersSlice.reducer