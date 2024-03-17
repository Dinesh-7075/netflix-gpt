import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const VideoTitleData = ({ title, overview }) => {
  return (
    <div className="absolute w-screen text-white pt-[11%] px-20 pl-16 bg-gradient-to-r from-black aspect-video">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg w-5/12 py-6">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-70">
          {" "}
          <FontAwesomeIcon className={"mr-1 "} icon={faPlay} />
          Play
        </button>
        <button className="mx-2 bg-gray-700 text-white p-4 px-12 text-xl rounded-lg hover:bg-opacity-55">
          <FontAwesomeIcon className={"mr-1 "} icon={faInfoCircle} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleData;
