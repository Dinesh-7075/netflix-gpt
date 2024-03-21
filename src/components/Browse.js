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
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import BrowseDropdownForMobile from "./BrowseDropdownForMobile";
import ErrorPage from "./ErrorPage";

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useUpcomingMovies();

  const myContext = useContext(AppContext);
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      {/* <Header />
      {myContext.isHoveredToProfile ? <ProfileDropdown /> : <span></span>}
      {myContext.isHoveredToBrowse ? <BrowseDropdownForMobile /> : <span></span>}
      {showGptSearchPage ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )} */}
      <ErrorPage />
    </div>
  );
};

export default Browse;
