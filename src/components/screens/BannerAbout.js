import React, { useState, useEffect } from "react";
// import { TypeAnimation } from 'react-type-animation';
// import Banner_1 from "../assets/photos/cottage1/banner2.jpg";
import Banner_1 from "../assets/bg/Mukteshwar-Where-to-stay-shop-Uttarakhand.jpg";


const imageUrls = [Banner_1,];

const BannerAbout = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change background every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="min-h-[400px] bg-cover bg-center flex justify-center items-center p-5"
      style={{ backgroundImage: `url(${imageUrls[backgroundIndex]})` }}
    >
      {/* <h1 className=" text-white text-2xl md:text-6xl font-french-canon bg-black bg-opacity-45 p-2 text-center md:p-4 rounded-xl ">
      RESORT IN MUKTESHWAR NAINITAL     
        </h1> */}
        <p className=" text-white text-2xl md:text-6xl font-french-canon p-2 text-center md:p-4 rounded-xl ">
        About Us
        </p>
        {/* <TypeAnimation className=" text-yellow-200 text-center  text-2xl md:text-4xl font-extrabold font-times"
        sequence={[
          `Connecting \You To Mother Nature...! (TSGOC)`,
          10000,
          "",
        ]}
        speed={10}
        style={{ whiteSpace: 'pre-line'}}
        repeat={Infinity}
      /> */}
     
     
    </div>
  );
};

export default BannerAbout;
