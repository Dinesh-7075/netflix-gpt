import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langChangeReducer from "./langSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        languageChange: langChangeReducer,
    }
});

export default appStore;