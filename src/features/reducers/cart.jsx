import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        addToCart: (state,action) => {
            state.items.push(action.payload)
        },
        removeFromCart:(state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    }
})



// const fashDealsSlice = createSlice({
//     name:'flash',
//     initialState:{items:[]},

// })





export const {addToCart, removeFromCart} = cartSlice.actions;
// export {}
// export const {fetchProductStart, fetchProductSuccess, fetchProductFailure} = storeSlice.actions;


export default cartSlice.reducer


// const addItem = [];

// const addItems = (state = addItem, action) => {
//     switch (action.type) {
//         case "ADDITEM" : return [
//             ...state,
//             action.payload
//         ]
//         break;

//         case "DELITEM" :
//             return state = state.filter((x)=>{
//                 return x.id !== action.payload.id
//             })
//         break;

//         default: return state;
//         break;

        
//     }
// }

// export default addItems;