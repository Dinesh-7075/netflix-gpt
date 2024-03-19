import React from "react";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { movieNamesByGpt, movieResultsFromTmdb } = useSelector(
    (store) => store.gpt
  );
  if (!movieNamesByGpt) return null;

  return (
    <div className="fixed z-10 p-4 m-4 bg-black text-white bg-opacity-85 top-40 w-screen h-[210px] rounded-md">
      <div className="px-6 my-2">
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movieResultsFromTmdb.map((movie, index) => (
              <MoviesCard
                key={movie.id}
                poster={movieResultsFromTmdb[index]?.poster_path}
                title={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
