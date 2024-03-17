import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  const getTrailer = async () => {
    try{
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredData = data?.results.filter(
      (obj) => obj?.name === "Official Trailer"
    );
    const trailer = filteredData[0];
    dispatch(addTrailerVideo(trailer));
    }
    catch (e){
      console.log(e);
    }

  };
  useEffect(() => {
   !trailerVideo && getTrailer();
  }, []);
};

export default useMovieTrailer;
