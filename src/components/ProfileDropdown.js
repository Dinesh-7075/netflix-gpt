import React, { useContext } from "react";
import { AVATAR_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faQuestionCircle,
  faRetweet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import AppContext from "../utils/AppContext";

const ProfileDropdown = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myContext = useContext(AppContext);
  if (!user) return;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
        myContext.setIsHoverdToProfileDropdown(false);
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };
  const { displayName } = user;
  return (
    <div
      className="absolute z-50 right-0 lg:right-6 md:right-6 top-[55px] md:top-[53px] w-[200px] h-[245px] bg-black text-sm text-white rounded-lg mx-2 border-[1px] border-gray-900 "
      onMouseOver={() => myContext.setIsHoverdToProfileDropdown(true)}
      onMouseLeave={() => myContext.setIsHoverdToProfileDropdown(false)}
    >
      <div>
        <ul className="list-disc my-2">
          <li className="flex p-2">
            <img
              src={AVATAR_URL}
              alt="user_logo"
              className="rounded-sm w-6 m-1"
            />
            <span className="px-1 pt-[5px]">{displayName}</span>
          </li>
          <li className="flex p-2">
            <FontAwesomeIcon className="mt-1 mx-1 ml-2" icon={faPencil} />
            <span className="px-2">Manage Profiles</span>
          </li>
          <li className="flex p-2">
            <FontAwesomeIcon className="mt-1 mx-1 ml-2" icon={faRetweet} />
            <span className="px-2">Transfer Profiles</span>
          </li>
          <li className="flex p-2">
            <FontAwesomeIcon className="mt-1 mx-1 ml-2" icon={faUser} />
            <span className="px-2">Account</span>
          </li>
          <li className="flex p-2">
            <FontAwesomeIcon
              className="mt-1 mx-1 ml-2"
              icon={faQuestionCircle}
            />
            <span className="px-2">Help Center</span>
          </li>
        </ul>
      </div>
      <div>
        <hr></hr>
        <p className="m-2 mx-6 cursor-pointer" onClick={handleSignOut}>
          Signout of Netflix
        </p>
      </div>
    </div>
  );
};

export default ProfileDropdown;
