import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTrendingMovies from '../customHooks/useTrendingMovies';

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  const movies = useSelector(store => store.movies);

  if(!movies) return;

  return (
    <div className="bg-black">
      <div className="mt-[-180px] pl-4 relative z-20">
          <MoviesList title="Now Playing Movies" movies={movies?.nowPlayingMovies}/>
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
}

export default SecondaryContainer