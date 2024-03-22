import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { movieNamesByGpt, movieResultsFromTmdb } = useSelector(
    (store) => store.gpt
  );

  if (!movieNamesByGpt) return null;

  return (
    <div className="absolute z-30 mx-2 md:mx-14 text-white top-44 md:top-56 lg:top-44 h-fit">
      <div className="p-5 my-2 overflow-y-scroll fixed h-full bg-black rounded-md mr-2 md:mx-0 bg-opacity-80 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
        <div className="grid">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-x-2 md:gap-y-3">
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
