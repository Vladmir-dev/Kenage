import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../actions";

const authSlice = createSlice({
    name: 'auth',
  initialState:{
    currentUser: null,
    token:null,
    isLoading: false,
    error: null,
    message:null
  },
  reducers: {
    // signUpStart(state) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // signUpSuccess(state, action) {
    //   state.currentUser = action.payload;
    //   state.isLoading = false;
    // },
    // signUpFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // loginStart(state) {
    //   state.isLoading = true;
    //   state.error = null;
    // },

    // loginSuccess(state, action) {
    //   state.token = action.payload;
    //   state.isLoading = false;
    // },
    
    // loginFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // logout(state) {
    //   state.currentUser = null;
    // },
  },
  extraReducers:(builder) => {

   //login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })

  builder.addCase(login.fulfilled, (state, action) => {
    state.isLoading = false;
    state.token = action.payload
  })

  builder.addCase(login.rejected, (state,action) => {
    state.isLoading = false;
    state.error = action.payload
  })

  //sign up
  builder.addCase(signup.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  })

  builder.addCase(signup.fulfilled, (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  })
  builder.addCase(signup.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload
  })
  }
})


// export const {
//     signUpStart,
//     signUpSuccess,
//     signUpFailure,
//     loginStart,
//     loginSuccess,
//     loginFailure,
//     logout,
//   } = authSlice.actions;

  export default authSlice.reducer