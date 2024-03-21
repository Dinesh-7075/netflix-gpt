import React from 'react'
import MoviesCard from './MoviesCard';

const MoviesList = ({title, movies}) => {

    if(!movies) return;

    return (
        <div className='md:px-6 px-3 my-2'>
            <h1 className='text-lg text-white mb-2'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {
                        movies.map((movie)=> <MoviesCard key={movie.id} poster={movie?.poster_path} />)
                    }
                </div>
            </div>
        </div>
    )
    }

export default MoviesList