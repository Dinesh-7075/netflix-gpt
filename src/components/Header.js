import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_URL, LOGO } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../utils/AppContext";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myContext = useContext(AppContext);
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearch);

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
    <div className="absolute z-10 flex justify-items-center justify-start">
      <img
        // className="w-2/12 m-4"
        className={(user ? "w-1/12 cursor-pointer " : "w-2/12 ") + "m-4"}
        src={LOGO}
        alt="logo"
      ></img>
      {user && (
        <div className={"flex p-2 w-30 h-10 my-4 text-white gap-5 " + (showGptSearchPage ? "ml-[600px]" : " ")}>
          { !showGptSearchPage &&
          <>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">TV Shows</p>
          <p className="cursor-pointer">Movies</p>
          <p className="cursor-pointer">New & Popular</p>
          <p className="cursor-pointer">My List</p>
          <p className="cursor-pointer">Browse by Languages</p> </>}
          <div className="flex cursor-pointer justify-center items-center ml-[200px] ">
            <button
              className="bg-purple-800 px-2 py-1 text-sm rounded-lg text-white"
              onClick={() => dispatch(toggleGptSearchView())}
            >
              {showGptSearchPage ? (<><FontAwesomeIcon icon={faHome} /> Home</>) : (<><FontAwesomeIcon icon={faSearch} /> GPT Search</>) }
            </button>
          </div>
          <div
            className="flex w-[100px] ml-[10px] cursor-pointer "
            onMouseOver={() => myContext.setIsHoverdToProfile(true)}
            onMouseLeave={() => myContext.setIsHoverdToProfile(false)}
          >
            <img src={AVATAR_URL} alt="user_logo" className="rounded-sm"></img>
            {myContext.isHovered ? (
              <FontAwesomeIcon className={"mt-1 ml-1 "} icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon className={"mt-1 ml-1 "} icon={faCaretDown} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
