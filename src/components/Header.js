import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_URL, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../utils/AppContext";
import { toggleGptSearchView } from "../utils/gptSlice";
import BrowseElementButton from "./BrowseElementButton";
import { changeLanguage } from "../utils/langSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myContext = useContext(AppContext);
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearch);
  const width = window.innerWidth;
  const breakpoint = 620;

  const handleLangChange = (e)=> {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is Signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      // unSubscribe when it unMounts
      unSubscribe();
    };
  }, []);

  return (
    <div className="absolute z-10 flex mt-0 md:flex-row w-screen">
      <div className="flex justify-start md:mx-10 lg:mx-10 mr-5">
        <img
          // className="w-2/12 m-4"
          className={((user || showGptSearchPage) ? "w-[80px] md:w-[100px] ml-2 " : "w-3/12 ")}
          src={LOGO}
          alt="logo"
        ></img>
      </div>

      {user && (width<breakpoint) && !showGptSearchPage && <BrowseElementButton />}

      {user && !showGptSearchPage &&
        (<div className={"p-2 w-30 h-10 my-4 text-white gap-5 flex justify-start mr-10 " + (showGptSearchPage ? "flex justify-between" : " ")}>
            <>
            <p className="cursor-pointer hidden md:inline">Home</p>
            <p className="cursor-pointer hidden md:inline">TV Shows</p>
            <p className="cursor-pointer hidden md:inline">Movies</p>
            <p className="cursor-pointer hidden md:inline">New & Popular</p>
            <p className="cursor-pointer hidden md:inline">My List</p>
            <p className="cursor-pointer hidden md:inline">Browse by Languages</p> 
            </>
        </div>)}

          {user && (<>
          <div className={"flex cursor-pointer justify-end items-center " + (showGptSearchPage ? "lg:ml-[700px]" : "ml-[-80px]")}>
              {
                showGptSearchPage && <>
                <select className="p-1 md:ml-0 rounded-lg ml-[-15px] md:m-2 md:mr-6 bg-gray-900 text-white" onChange={handleLangChange}>
                  {
                    SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                  }
                </select>
                </>
              }
              <button
                className={"bg-purple-800 md:p-2 m-1 md:px-2 md:py-1 text-xs md:text-sm rounded-lg md:w-[110px] text-white " + (!showGptSearchPage ? "md:mx-20 lg:ml-20 ": "")}
                onClick={() => dispatch(toggleGptSearchView())}
              >
                {showGptSearchPage ? (<><FontAwesomeIcon icon={faHome} />Home</>) : (<><FontAwesomeIcon icon={faSearch} /> GPT Search</>) }
              </button>
          </div>

          <div
            className={"flex text-white md:size-[8%] items-center my-5 md:w-[100px] md:ml-[10px] cursor-pointer " + (showGptSearchPage ? "ml-[30px]" : " ml-2")}
            onMouseOver={() => myContext.setIsHoverdToProfileDropdown(true)}
            onMouseLeave={() => myContext.setIsHoverdToProfileDropdown(false)}
          >
            <img src={AVATAR_URL} alt="user_logo" className="rounded-sm"></img>
            {myContext.isHoveredToProfile ? (
              <FontAwesomeIcon className={"mt-1 ml-1 "} icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon className={"mt-1 ml-1 "} icon={faCaretDown} />
            )}
          </div>
          </>)}
    </div>
  );
};

export default Header;
