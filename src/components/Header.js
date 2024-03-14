import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_URL, LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       // User is Signed in
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        console.log(uid, email);
        navigate("/browse");
      } 
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>{
      // unSubscribe when it unMounts
      unSubscribe();
    }
  }, []); //eslint-disable-line

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-bl from-black px-8 py-2 z-10 flex justify-between">
      <img
        // className="w-2/12 m-4"
        className={(user?"w-1/12 ":"w-2/12 ") + "m-4"}
        src={LOGO}
        alt="logo"
      ></img>
      {user && <div className="flex p-2 w-30 h-10">
        <img
          src={AVATAR_URL}
          alt="user_logo"
        ></img>
        <button onClick={handleSignOut} className="mx-2 cursor-pointer">Sign out</button>
      </div>}
    </div>
  );
};

export default Header;
