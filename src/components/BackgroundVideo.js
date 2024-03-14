import React from "react";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const BackgroundVideo = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen top-0">
      <iframe
        className="w-screen aspect-video"
        src= {`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
