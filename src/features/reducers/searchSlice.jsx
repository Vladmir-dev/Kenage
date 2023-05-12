import { createSlice } from "@reduxjs/toolkit";
import { fetch_results } from "../actions";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        results:[],
        is_loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetch_results.pending, (state) => {
            state.is_loading = true;
            state.error = null;
        })

        builder.addCase(fetch_results.fulfilled, (state, action) => {
            state.is_loading = false;
            state.results = action.payload;
        })

        builder.addCase(fetch_results.rejected, (state,action) => {
            state.is_loading = false;
            state.error = action.payload;
        })
    }
})

export default searchSlice.reducer