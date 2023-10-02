import { createSlice } from "@reduxjs/toolkit";
import { add_to_cart, decrease_qty,create_order } from "../actions";
import { useNavigate } from "react-router-dom";

// let navigate = useNavigate()

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    is_loading: false,
    error: false,
    cartItems: [],
    order_filled:false
  },
  reducers: {
    // addToCart: (state,action) => {
    //     state.items.push(action.payload)
    // },
    // removeFromCart:(state, action) => {
    //     state.items = state.items.filter(item => item.id !== action.payload.id)
    // }
  },
  extraReducers: (builder) => {
    //add to cart
    builder.addCase(add_to_cart.pending, (state) => {
      state.is_loading = true;
      state.error = false;
    });

    builder.addCase(add_to_cart.fulfilled, (state, action) => {
      console.log("products in cart ==>", action.payload._id);
      state.is_loading = false;
      const data = action.payload;
      console.log("product id", data);

      const productExists = state.cartItems.find(
        (item) => item._id === data.product._id
      );

      if (productExists) {
        state.cartItems = state.cartItems.map((item) =>
          item._id === data.product._id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item
        );
      } else {
        state.cartItems.push({
          ...data.product,
          qty: 1,
          size: data.size,
          selectedImageURL: data.selectedImageURL,
          productId:data.product._id
        });

        // if (data.selectedImageURL && data.size) {
          
        // } else {
        //   state.cartItems.push({
        //     ...data.product,
        //     qty: 1,
        //   });
        // }
      }

    });

    builder.addCase(add_to_cart.rejected, (state, action) => {
      state.is_loading = false;
      state.error = action.payload;
    });

    //decrease qty
    builder.addCase(decrease_qty.pending, (state) => {
      state.is_loading = true;
      state.error = false;
    });

    builder.addCase(decrease_qty.fulfilled, (state, action) => {
      // console.log("payload ==>", action.payload)
      state.is_loading = false;
      const product = action.payload.product;
      const productExists = state.cartItems.find(
        (item) => item._id === product._id
      );

      if (productExists && productExists.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== product._id
        );
      } else if (productExists) {
        state.cartItems = state.cartItems.map((item) =>
          item._id === product._id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        );
      }
    });

    builder.addCase(decrease_qty.rejected, (state, action) => {
      state.is_loading = false;
      state.error = action.payload;
    });
`  
     `
    builder.addCase(create_order.pending, (state, action) => {
      state.is_loading = true;
      state.error = false;
    });

    builder.addCase(create_order.fulfilled, (state, action) => {
      state.is_loading = false;
      console.log("create order data",action.payload)
      // document.location.href = '/checkout'
      // if(action.payload.status)
    });
    builder.addCase(create_order.rejected, (state, action) => {
      // state.error = true
      console.log(action.payload)
    })
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
