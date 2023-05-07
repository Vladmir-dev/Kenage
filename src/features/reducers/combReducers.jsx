// import addItem from "./addItem";
import { combineReducers } from "redux";
import usersReducer from "./users"
import cartReducer from "./cart"
import storeReducer from './shop'
// import Cart from "../../common/Cart/Cart";
// import userReducer from './addItem/userSlice'

const rootReducer = combineReducers({
    users:usersReducer,
    cart:cartReducer,
    store:storeReducer
})

export default rootReducer;