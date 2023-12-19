import React from "react";
import { Link } from "react-router-dom";
import bgVideo from "../../assets1/red.mp4"; // Replace "video.mp4" with the actual video file name









const Banner = () => {







  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="text-white absolute z-30 top-20 text-5xl font-bold">
        Lets Scale it.
        </div>
        <div class="w-full h-full flex justify-center text-white absolute z-30 top-30 items-center">
         <h1 id="typewriter" class="text-4xl font-bold"></h1>
        </div>
      
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      
        <video
          className="min-w-full min-h-full absolute object-cover"
          src={bgVideo}
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="video-content space-y-2 z-10">
      
      </div>
    </section>
  );
};

export default Banner;

