import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieresult } from "../utils/gptSlice";
import lang from "../utils/languageConstants";


const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langChangeValue = useSelector(store => store.languageChange?.lang);

  const searchMovieInTMDB = async(movie)=> {
    try{
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
    
      const json = await data.json();
      return json.results;
      }
    
      catch (e){
        return console.error(e);
      }
  }

  const handleSearchGptForm = async() => {
  const gptSearchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 70 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  try{
      const gptResponse = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptSearchQuery }],
      model: 'gpt-3.5-turbo',
      });
      const gptSearchedMovies = gptResponse.choices?.[0]?.message?.content.split(",");
      const promisesArray = gptSearchedMovies.map((movie) => searchMovieInTMDB(movie));
      const tmdbResults = await Promise.all(promisesArray);
      let mergeTmdbResultsArray = [].concat.apply([], tmdbResults);
      // let mergeTmdbResultsArray = tmdbResults.flat(infinity);
      let filteredTmdbResults = [];
      gptSearchedMovies.forEach((suggestedMovie)=>{
          mergeTmdbResultsArray.forEach((movie)=>{
            if(suggestedMovie.trim() == movie?.title) filteredTmdbResults.push(movie);
          });
      });
      dispatch(addGptMovieresult({movieNamesByGpt: gptSearchedMovies, movieResultsFromTmdb: filteredTmdbResults}));
  }
  catch(e){
    console.log("error ==>", e );
  }
  };

  return (
    <div className="absolute bg-black mx-2 md:mx-auto right-0 left-0 md:w-[40%] top-[9%] md:top-[17%] rounded-lg shadow-lg shadow-gray-300">
      <form className="flex justify-start" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="text-sm md:text-md p-1 px-2 m-4 mr-1 w-11/12 rounded-md focus:shadow-md focus:shadow-blue-600"
          placeholder={lang[langChangeValue].gptSearchPlaceholder}
        ></input>
        <button
          type="submit"
          className="p-1.5 m-4 bg-red-700 rounded-md w-3/12"
          onClick={handleSearchGptForm}
        >
          {lang[langChangeValue].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
