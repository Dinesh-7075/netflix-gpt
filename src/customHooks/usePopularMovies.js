import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const response = await fetch( "https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
      const data = await response.json();
      dispatch(addPopularMovies(data?.results));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
