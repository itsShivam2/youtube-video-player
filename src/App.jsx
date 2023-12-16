import React from "react";
import VideoPlayer from "./Components/VideoPlayer";

const App = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center font-serif">YouTube Video Player</h1>
      <VideoPlayer/>
    </div>
  );
};

export default App;
