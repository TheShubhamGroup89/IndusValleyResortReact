import React from "react";
// import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className="relative">
      <video
        className= " lg:object-cover top-0 z-20 md:w-screen min-h-[450px]"
        autoPlay
        loop
        muted
        playsInline
        poster="/bg_video/bg2_video.jpg"
      >
        <source src="/bg_video/bg4_video.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
      </video>

      
    
    </div>
  );
};

export default Banner;
