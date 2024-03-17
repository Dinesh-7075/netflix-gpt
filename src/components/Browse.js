import React, { useContext } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowplayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import ProfileDropdown from "./ProfileDropdown";
import AppContext from "../utils/AppContext";

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useUpcomingMovies();

  const myContext = useContext(AppContext);

  return (
    <div>
      <Header />
      {myContext.isHovered ? <ProfileDropdown /> : <span></span>}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
