import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const defaultVideoId = "q966TbakCV0";
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [inputValue, setInputValue] = useState("");

  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  // Function to extract the video ID from YouTube URL
  const extractVideoId = (input) => {
    const urlPattern =
      /(?:youtube\.com\/(?:[^\/]+\/[^\/]+|(?:v|e(?:mbed)?)|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = input.match(urlPattern);
    return match ? match[1] : input; // If it's a valid URL, return the extracted ID; otherwise, assume it's already an ID.
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const playVideo = () => {
    const extractedId = extractVideoId(inputValue.trim());
    if (extractedId) {
      setVideoId(extractedId);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <YouTube videoId={videoId} opts={opts} className="rounded-md overflow-hidden" />
      </div>
      <h2 className="w-full flex justify-center text-xl font-semibold font-serif my-8">
        Enter Video ID or YouTube Link
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="text"
          placeholder="Enter Video ID or Link"
          value={inputValue}
          onChange={handleInputChange}
          className="mb-2 md:mr-2 md:mb-0 p-2 border border-gray-300 rounded-md"
        />
        <button onClick={playVideo} className="p-2 bg-sky-800 text-white rounded-md">
          Play Video
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
