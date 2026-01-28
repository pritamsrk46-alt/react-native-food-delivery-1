import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import cartReducer from "./CartSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    }
})