import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MoviesCard = ({poster, title}) => {
  if (!poster) return null;

  return (
    <div className='w-[220px] pr-2 object-contain'>
        {title && <h1 className='text-white text-lg mb-2 px-1'>{title}</h1>}
        <img alt="poster" className='w-[210px] h-[120px] rounded-sm cursor-pointer'
        src={IMG_CDN_URL + poster}
        />
    </div>
  )
}

export default MoviesCard