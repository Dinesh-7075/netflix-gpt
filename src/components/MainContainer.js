import React from 'react'
import VideoTitleData from './VideoTitleData'
import BackgroundVideo from './BackgroundVideo'
import { useSelector } from 'react-redux'
import ErrorPage from './ErrorPage'

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  
  if(!movies) return <ErrorPage />;

  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie;
  return (
    <div className='pt-0 max-w-full'>
        <VideoTitleData title={original_title} overview={overview}/>
        <BackgroundVideo movieId={id}/>
    </div>
  )
}

export default MainContainer