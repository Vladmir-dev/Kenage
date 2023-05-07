import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name:'store',
    initialState:{products:[], loading:false, error:null},
    reducer:{
        fetchProductStart:(state) => {
            state.loading = true;
        },
        fetchProductSuccess:(state, action) => {
            state.loading = false;
            state.products = action.payload
        },

        fetchProductFailure:(state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export const {fetchProductFailure,fetchProductStart,fetchProductSuccess} = storeSlice.actions

export default storeSlice.reducer