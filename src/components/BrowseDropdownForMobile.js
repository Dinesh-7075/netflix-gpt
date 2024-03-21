import React, { useContext } from "react";
import AppContext from "../utils/AppContext";

const BrowseDropdownForMobile = () => {
  const myContext = useContext(AppContext);
  return (
    <div
      className="absolute z-40 left-16 top-[50px] w-[180px] h-[200px] bg-black text-sm text-white rounded-lg mx-2 border-[1px] border-gray-900 bg-opacity-90"
      onMouseOver={() => myContext.setIsHoverdToBrowseDropdown(true)}
      onMouseLeave={() => myContext.setIsHoverdToBrowseDropdown(false)}
    >
      <div>
        <ul className="my-2 flex flex-col items-center">
          <li className="flex p-1 border-b-[1px] border-gray-500 w-[90%] justify-center">
            <span className="px-1 pt-[5px]">Home</span>
          </li>
          <li className="flex p-1 border-b-[1px] border-gray-500 w-[90%] justify-center">
            <span className="px-2">TV Shows</span>
          </li>
          <hr className="border-gray-600"></hr>
          <li className="flex p-1 border-b-[1px] border-gray-500 w-[90%] justify-center">
            <span className="px-2">Movies</span>
          </li>
          <li className="flex p-1 border-b-[1px] border-gray-500 w-[90%] justify-center">
            <span className="px-2">New & Popular</span>
          </li>
          <li className="flex p-1 border-b-[1px] border-gray-500 w-[90%] justify-center">
            <span className="px-2">My List</span>
          </li>
          <li className="flex p-1">
            <span className="px-2">Browse by Languages</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrowseDropdownForMobile;
