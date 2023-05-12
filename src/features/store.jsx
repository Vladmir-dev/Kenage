import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/combineReducers";
import rootReducer from "./reducers/combReducers";
import thunk from 'redux-thunk'

const store = configureStore({
    reducer:rootReducer,
    middleware:[thunk]
})

export default store

// import { createStore } from "redux";
// import rootReducers from "./reducers";

// const store = createStore(rootReducers);

// export default store;