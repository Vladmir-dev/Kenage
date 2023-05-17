import { createSlice } from "@reduxjs/toolkit";
import { add_to_cart,decrease_qty } from "../actions";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        is_loading:false,
        error:false,
        cartItems:[]
    },
    reducers:{

        // addToCart: (state,action) => {
        //     state.items.push(action.payload)
        // },

        // removeFromCart:(state, action) => {
        //     state.items = state.items.filter(item => item.id !== action.payload.id)
        // }

    },
    extraReducers: (builder) =>{
        //add to cart
        builder.addCase(add_to_cart.pending, (state) => {
            state.is_loading = true;
            state.error = false;
        })

        builder.addCase(add_to_cart.fulfilled, (state, action) => {
            // console.log("payload ==>", action.payload)
            state.is_loading = false;
            const product = action.payload;
            const productExists = state.cartItems.find((item) => item.id === product.id);

            if (productExists) {
                state.cartItems = state.cartItems.map((item) =>
                  item.id === product.id ? { ...productExists, qty: productExists.qty + 1 } : item
                );
              } else {
                state.cartItems.push({ ...product, qty: 1 });
              }

        })

        builder.addCase(add_to_cart.rejected, (state, action) => {
            state.is_loading = false;
            state.error = action.payload;
        } )

    //decrease qty
    builder.addCase(decrease_qty.pending, (state) => {
        state.is_loading = true;
        state.error = false;
    })

    builder.addCase(decrease_qty.fulfilled, (state, action) => {
        // console.log("payload ==>", action.payload)
        state.is_loading = false;
        const product = action.payload;
        const productExists = state.cartItems.find((item) => item.id === product.id);

        if (productExists && productExists.qty === 1) {
            state.cartItems = state.cartItems.filter((item) => item.id !== product.id);
          } else if (productExists) {
            state.cartItems = state.cartItems.map((item) =>
              item.id === product.id ? { ...productExists, qty: productExists.qty - 1 } : item
            );
        }
    })

    builder.addCase(decrease_qty.rejected, (state, action) => {
        state.is_loading = false;
        state.error = action.payload;
    } )


    } 
})



export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer
