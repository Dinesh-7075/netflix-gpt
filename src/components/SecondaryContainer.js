import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-60 pl-6 relative z-20">
          <MoviesList
            title="Now Playing Movies"
            movies={movies?.nowPlayingMovies}
          />
          <MoviesList title={"Trending"} movies={movies?.trendingMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MoviesList
            title={"Upcoming Movies"}
            movies={movies?.upcomingMovies}
          />
          <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
