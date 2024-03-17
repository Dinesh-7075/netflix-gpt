import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = ()=>{

  const dispatch = useDispatch();
  const topRatedMovies = useSelector(
    (store) => store.movies?.topRatedMovies
  ); 
  const getTopRatedMovies = async()=> {
    try {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data?.results));
  }
  catch (e) {
    console.log(e);
  }
  }
  useEffect(()=> {
   !topRatedMovies && getTopRatedMovies();
  }, [])
}
export default useTopRatedMovies;