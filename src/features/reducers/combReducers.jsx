// import addItem from "./addItem";
import { combineReducers } from "redux";
import authReducer from "./authSlice"
import cartReducer from "./cartSlice"
import storeReducer from './shop'
import productsReducer from './productsSlice'
import searchReducer from './searchSlice'
import currencyReducer from './currencySlice';

// import Cart from "../../common/Cart/Cart";
// import userReducer from './addItem/userSlice'

const rootReducer = combineReducers({
    users:authReducer,
    cart:cartReducer,
    store:storeReducer,
    products:productsReducer,
    search:searchReducer,
    currency:currencyReducer
})

export default rootReducer;