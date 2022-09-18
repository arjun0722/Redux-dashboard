import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key : "root",
  version : 1,
  storage
}

 const reducer = combineReducers({
  cart: cartReducer,
 })

const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
  reducer: persistedReducer
});
export default store;
