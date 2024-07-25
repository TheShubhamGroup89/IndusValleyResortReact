import React from "react";

const Banner = () => {
  return (
    <div>
      <video
        className=" top-0 left-0 w-full lg:h-[650px] object-cover"
        autoPlay={true}
        muted={true}
        loop={true}
        src="/bg_video/restaurantBanner.mp4" type="video/mp4"
        // src="https://res.cloudinary.com/dqeka0ibm/video/upload/v1719484572/DinningBanner3_psx1vm.mp4"
      />
      {/* <div className="relative z-20 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h2 className="text-white text-3xl md:text-7xl tracking-wider font-french-canon text-center">
        Hillcrest Café
        </h2>
      </div> */}
    </div>
  );
};

export default Banner;
