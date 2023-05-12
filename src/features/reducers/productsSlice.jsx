import { createSlice } from "@reduxjs/toolkit";
import {
     fetch_flash_deals, 
     fetch_men_clothes,
     fetch_men_shoes, 
     fetch_women_clothes, 
     fetch_women_shoes,
     fetch_boys_clothes,
     fetch_boys_shoes,
     fetch_girls_clothes,
     fetch_girls_shoes
    } from "../actions";

const initialState = {
    is_loading : false,
    error : false,
    products:[],
    men_shoes:[],
    women_shoes:[],
    boy_shoes:[],
    girl_shoes:[],
    men_clothes:[],
    women_clothes:[],
    boy_clothes:[],
    girl_clothes:[],
    newArrivals:[],
    flashDeals:[]
}

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
      
    },
    extraReducers:(builder) => {
        //flash deals
        builder.addCase(fetch_flash_deals.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_flash_deals.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.flashDeals = action.payload
        })

        builder.addCase(fetch_flash_deals.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

        //men's clothes
        builder.addCase(fetch_men_clothes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_men_clothes.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.men_clothes = action.payload;
        })

        builder.addCase(fetch_men_clothes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

        
        //men's shoes
        builder.addCase(fetch_men_shoes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_men_shoes.fulfilled, (state, action) => {
            console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.men_shoes = action.payload;
        })

        builder.addCase(fetch_men_shoes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

        //women's shoes
        builder.addCase(fetch_women_shoes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_women_shoes.fulfilled, (state, action) => {
            console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.women_shoes = action.payload;
        })

        builder.addCase(fetch_women_shoes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

        //women's clothes
        builder.addCase(fetch_women_clothes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_women_clothes.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.women_clothes = action.payload;
        })

        builder.addCase(fetch_women_clothes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

        //boys clothes
        builder.addCase(fetch_boys_clothes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_boys_clothes.fulfilled, (state, action) => {
            console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.boy_clothes = action.payload;
        })

        builder.addCase(fetch_boys_clothes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

        //boys shoes
        builder.addCase(fetch_boys_shoes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_boys_shoes.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.boy_shoes = action.payload;
        })

        builder.addCase(fetch_boys_shoes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )


        //girls' clothes
        builder.addCase(fetch_girls_clothes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_girls_clothes.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.girl_clothes = action.payload;
        })

        builder.addCase(fetch_girls_clothes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

        //girls shoes
        builder.addCase(fetch_girls_shoes.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(fetch_girls_shoes.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            state.girl_shoes = action.payload;
        })

        builder.addCase(fetch_girls_shoes.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

    }
})

// export const {} = productsSlice.actions;
export default productsSlice.reducer