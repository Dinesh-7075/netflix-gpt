import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MoviesCard = ({poster}) => {

  return (
    <div className='w-[220px] pr-2 object-contain'>
        <img alt="poster" className='w-[210px] h-[120px] rounded-sm cursor-pointer'
        src={IMG_CDN_URL + poster}
        />
    </div>
  )
}

export default MoviesCard