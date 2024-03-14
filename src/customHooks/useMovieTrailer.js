import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
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
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieTrailer;
