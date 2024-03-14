import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowplayingMovies = ()=>{

  const dispatch = useDispatch();

  const getNowPlayingMovies = async()=> {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  }

  useEffect(()=> {
    getNowPlayingMovies();
  }, [])
}
export default useNowplayingMovies;