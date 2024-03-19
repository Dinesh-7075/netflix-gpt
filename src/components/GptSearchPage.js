import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
       <div className="fixed">
          <img className="object-cover"
            src={BG_IMG_URL}
            alt="bg"
          />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage