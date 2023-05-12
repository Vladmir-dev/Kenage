// import addItem from "./addItem";
import { combineReducers } from "redux";
import authReducer from "./authSlice"
import cartReducer from "./cart"
import storeReducer from './shop'
import productsReducer from './productsSlice'
// import Cart from "../../common/Cart/Cart";
// import userReducer from './addItem/userSlice'

const rootReducer = combineReducers({
    users:authReducer,
    cart:cartReducer,
    store:storeReducer,
    products:productsReducer
})

export default rootReducer;