import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useSelector } from 'react-redux';

const MoviesCard = ({poster, title}) => {
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearch);
  if (!poster) return null;

  return (
    <div className={(!showGptSearchPage ? "w-[220px] " : "md:w-[220px] ") + "pr-2 object-contain"}>
        {title && <h1 className='text-white text-lg mb-[2px] px-1 line-clamp-1'>{title}</h1>}
        <img alt="poster" className='w-[210px] h-[120px] rounded-sm cursor-pointer'
        src={IMG_CDN_URL + poster}
        />
    </div>
  )
}

export default MoviesCard