import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="md:-mt-60 mt-[-70px] md:pl-6 relative z-30 md:ml-0 mr-0]">
          <MoviesList
            title="Now Playing Movies"
            movies={movies?.nowPlayingMovies}
          />
          <MoviesList title={"Trending"} movies={movies?.trendingMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
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
