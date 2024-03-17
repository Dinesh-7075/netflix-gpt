import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import {addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = ()=> {

    const dispatch = useDispatch();
    const trendingMovies = useSelector(
        (store) => store.movies?.trendingMovies
      ); 
    const getTrendingMovies= async()=> {
      try{
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_OPTIONS);
        const data = await response.json();
        dispatch(addTrendingMovies(data?.results));
     }
      catch (e) {
        console.log(e);
      }
    }

    useEffect(()=>{
      !trendingMovies &&  getTrendingMovies();
    }, []);
}

export default useTrendingMovies;