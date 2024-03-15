import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = ()=> {

    const dispatch = useDispatch();

    const getPopularMovies = async()=> {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?&page=2', API_OPTIONS);
        const data = await response.json();
        dispatch(addPopularMovies(data?.results));
    }

    useEffect(()=>{
        getPopularMovies();
    }, []);
}

export default usePopularMovies;