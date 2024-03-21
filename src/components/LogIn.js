import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateEmail, validatePwd } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BG_IMG_URL } from "../utils/constants";

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState("true");
  let [emailErrorMessage, setEmailErrorMessage] = useState(null);
  let [pwdErrorMessage, setPwdErrorMessage] = useState(null);
  let [nameErrorMessage, setNameErrorMessage] = useState(null);
  let [authApiErrorMessage, setAuthApiErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch();
  const userFields = useSelector((store) => store.user); // eslint-disable-line

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    setNameErrorMessage(null);
    setEmailErrorMessage(null);
    setPwdErrorMessage(null);
    setAuthApiErrorMessage(null);
    let flagError = false;

    let emailValidate = validateEmail(email.current.value);
    if (emailValidate !== null) {
      setEmailErrorMessage(emailValidate);
      flagError = true;
    }
    if (!isSignIn && fullName.current.value === "") {
      setNameErrorMessage("Please Enter your Name ");
      flagError = true;
    }
    if (!isSignIn) {
      let pwdvalidate = validatePwd(password.current.value);
      if (pwdvalidate !== null) {
        setPwdErrorMessage(pwdvalidate);
        flagError = true;
      }
    }
    if (password.current.value === "") {
      setPwdErrorMessage("Please enter password");
      flagError = true;
      return;
    }

    if (flagError) {
      return;
    }

    if (!isSignIn) {
      //SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setAuthApiErrorMessage(null);
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
              );
            })
            .catch((error) => {
              setAuthApiErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthApiErrorMessage(errorCode + " => " + errorMessage);
        });
    } else {
      //SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          setAuthApiErrorMessage(null);
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthApiErrorMessage(errorCode + " => " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="absolute">
          <img
            src={BG_IMG_URL}
            alt="bg"
            className="h-screen object-cover w-screen"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute mx-[5%] md:w-4/12 lg:w-4/12 md:mx-auto lg:mx-auto right-0 left-0 bg-black text-white md:my-28 lg:my-28 my-36 md:p-12 lg:p-12 opacity-80 rounded-lg"
        >
          <h1 className="font-bold text-white text-3xl m-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <>
              <input
                type="text"
                ref={fullName}
                placeholder="Enter Name"
                className="p-2 md:m-2 lg:m-2 mx-5 my-3 w-11/12 md:w-full lg:w-full rounded-md bg-[#333] h-12"
              />
              <p className="text-[#e87c03] px-3 mx-3 md:px-2 md:mx-2 mb-1 text-sm/[15px]">
                {nameErrorMessage}
              </p>
            </>
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-2 lg:m-2 md:m-2 mx-5 my-3 w-11/12 md:w-full lg:w-full rounded-md bg-[#333] h-12"
          />
          <p className="text-[#e87c03] px-3 mx-3 md:px-2 md:mx-2 mb-1 text-sm/[15px]">
            {emailErrorMessage}
          </p>
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 mx-5 my-3 md:m-2 md:w-full lg:m-2 lg:w-full w-11/12 rounded-md bg-[#333] h-12"
          />
          <p className="text-[#e87c03] px-3 mx-3 md:px-2 md:mx-2 mb-1 text-sm/[15px]">
            {pwdErrorMessage}
          </p>
          <p className="text-[#e87c03] px-3 mx-3 md:px-2 md:mx-2 mb-1 text-sm/[15px]">
            {authApiErrorMessage}
          </p>
          <button
            type="submit"
            className="p-2 mx-5 my-4 w-11/12 md:m-2 md:my-5 md:w-full lg:m-2 lg:my-5 lg:w-full bg-red-700 rounded-lg"
            onClick={handleSubmit}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {isSignIn ? (
            <p
              onClick={toggleSignIn}
              className="text-gray-400 m-4 cursor-pointer"
            >
              New to Netflix?{" "}
              <span className="hover:underline text-white">Sign up now</span>.
            </p>
          ) : (
            <p
              onClick={toggleSignIn}
              className="text-gray-400 m-4 cursor-pointer"
            >
              Already a user?{" "}
              <span className="hover:underline text-white">Sign In now</span>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
