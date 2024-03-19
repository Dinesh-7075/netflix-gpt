import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false, 
        movieNamesByGpt: null,
        movieResultsFromTmdb: null,
    },
    reducers: {
        toggleGptSearchView: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieresult: (state, action)=>{
            const {movieNamesByGpt, movieResultsFromTmdb} = action.payload;
            state.movieNamesByGpt = movieNamesByGpt;
            state.movieResultsFromTmdb = movieResultsFromTmdb;
        }
    }
});

export const {toggleGptSearchView, addGptMovieresult} = gptSlice.actions;

export default gptSlice.reducer;