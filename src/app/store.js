import { configureStore } from "@reduxjs/toolkit";
import accReducer from "../reduxState/accSlice"
import bookingReducer from "../reduxState/bookingSlice";
import searchReducer from "../reduxState/searchSlice"
import wishReducer from "../reduxState/wishSlice";

export const store = configureStore({
    reducer: {
        acc: accReducer,
        search: searchReducer,
        booking: bookingReducer,
        wish: wishReducer
    }
})