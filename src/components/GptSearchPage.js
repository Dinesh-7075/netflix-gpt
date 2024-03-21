import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <>
       <div className="fixed mb-10 w-full">
          <img className="h-screen object-cover w-screen"
            src={BG_IMG_URL}
            alt="bg"
          />
        </div>
        <div>
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
    </>
  )
}

export default GptSearchPage