import React, { useContext } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'
import AppContext from '../utils/AppContext'
import { useSelector } from 'react-redux'
import GptMovieSuggestionShimmerUI from './GptMovieSuggestionShimmerUI'

const GptSearchPage = () => {
  const myContext = useContext(AppContext);
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearch);
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
          {(myContext.isClickedOnSearch && showGptSearchPage) ? <GptMovieSuggestionShimmerUI /> : <GptMovieSuggestions />}
        </div>
    </>
  )
}

export default GptSearchPage