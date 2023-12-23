import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../MovieReducer";
import UserReducer from "../UserReducer";

export const Store = configureStore({
    reducer: {
        movie: MovieReducer,
        user: UserReducer
    }
})