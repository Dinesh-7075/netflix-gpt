import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const BrowseElementButton = () => {
    const myContext = useContext(AppContext);
  return (
    <div
      className="flex items-center -mt-1 mr-5 cursor-pointer "
      onMouseOver={() => myContext.setIsHoverdToBrowseDropdown(true)}
      onMouseLeave={() => myContext.setIsHoverdToBrowseDropdown(false)}
    >
      <span className="text-white">Browse</span>
      {myContext.isHoveredToBrowse ? (
        <FontAwesomeIcon className={"mt-1 ml-1 text-white "} icon={faCaretUp} />
      ) : (
        <FontAwesomeIcon className={"mt-1 ml-1 text-white"} icon={faCaretDown} />
      )}

    </div>
  );
};

export default BrowseElementButton;
