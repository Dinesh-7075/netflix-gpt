import React, { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const handleSearchGptForm = async() => {
    const gptSearchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    try{
      const gptResponse = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptSearchQuery }],
      model: 'gpt-3.5-turbo',
    });
    // console.log(gptResponse.choices?.[0]?.message?.content);
  } catch(e){
    console.log("error ==>", e );
  }
  };

  return (
    <div className="absolute z-10 bg-black mx-auto right-0 left-0 w-[40%] top-[12%] rounded-lg shadow-lg shadow-gray-300">
      <form className="flex justify-start" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-1 px-2 m-4 mr-1 w-11/12 rounded-md focus:shadow-md focus:shadow-blue-600"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          type="submit"
          className="p-1.5 m-4 bg-red-700 rounded-md w-3/12"
          onClick={handleSearchGptForm}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
