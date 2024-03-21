import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const VideoTitleData = ({ title, overview }) => {
  return (
    <div className="absolute w-screen text-white pt-[22%] md:pt-[9%] md:px-16 pl-7 bg-gradient-to-r from-black aspect-video">
      <h1 className="text-xl mb-3 md:text-4xl font-bold md:mb-1">{title}</h1>
      <p className="text-lg w-5/12 py-4 hidden md:block">{overview}</p>
      <div className="md:my-4 my-3 mb-0">
        <button className="bg-white mr-2 text-black py-[2px] md:py-4 px-[10px] md:px-12 text-md md:text-lg rounded-lg hover:bg-opacity-70">
          {" "}
          <FontAwesomeIcon className={"mr-1 "} icon={faPlay} />
          Play
        </button>
        <button className="mx-2 bg-gray-800 text-white py-[2px] px-3 md:p-4 md:px-12 text-lg rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon className={"mr-1 "} icon={faInfoCircle} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleData;
