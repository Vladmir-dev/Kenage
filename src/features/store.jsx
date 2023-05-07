import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/combineReducers";
import rootReducer from "./reducers/combReducers";

const store = configureStore({
    reducer:rootReducer,
})

export default store

// import { createStore } from "redux";
// import rootReducers from "./reducers";

// const store = createStore(rootReducers);

// export default store;