import React from 'react'
import { useSelector } from 'react-redux';

const GptMovieSuggestionShimmerUI = () => {
    const showGptSearchPage = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute z-10 mx-2 md:mx-14 text-white top-44 md:top-56 lg:top-60 h-full">
      <div className="p-5 my-2 overflow-y-scroll fixed h-full bg-black mx-2 rounded-md mr-2 ml-2 md:mx-0 bg-opacity-80 px-10 md:px-5 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
        <div className="grid">
          <div className={"grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-x-2 md:gap-y-3"}>
            {Array.from(Array(20).keys()).map((num, index) => (
              <div key={num} className={(!showGptSearchPage ? "w-[220px] h-[120px] " : "md:w-[220px] md:h-[120px] w-[100px] h-[60px] ") + "bg-gray-500 pr-2 object-contain rounded-md text-[15px] text-center text-[#39002e] mt-2 md:py-10 py-4 italic"}>loading...<div className='loader md:w-[130px]'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GptMovieSuggestionShimmerUI;