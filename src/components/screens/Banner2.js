import React, { useState, useEffect } from "react";
import Banner_1 from "../assets/photos/gallery/Gallery_IMG_2.webp";
import Banner_2 from "../assets/photos/gallery/Gallery_IMG_4.webp";
import Banner_3 from "../assets/photos/gallery/Gallery_IMG_18.webp";
import Banner_4 from "../assets/photos/gallery/Gallery_IMG_7.webp";
import Banner_5 from "../assets/photos/gallery/Gallery_IMG_9.webp";
import Banner_6 from "../assets/photos/gallery/Gallery_IMG_19.webp";
// import { TypeAnimation } from "react-type-animation";

// const imageUrls = [
//   "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717567396/Gallery_IMG_2_udexch.webp",
//   "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717567673/IndusValleyResort/Gallery_IMG_4_pq9xol.webp",
//   "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717567777/IndusValleyResort/Gallery_IMG_18_pjrmwu.webp",
//   "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717567830/IndusValleyResort/Gallery_IMG_7_exkjzs.webp",
//   "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717567887/IndusValleyResort/Gallery_IMG_9_ei34up.webp",
//   "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717567930/IndusValleyResort/Gallery_IMG_19_v9odlq.webp"
// ];
const imageUrls = [Banner_1, Banner_2, Banner_3, Banner_4, Banner_5, Banner_6];

const imageAlts = [
  "Resort in Mukteshwar",
  "Homestay in Mukteshwar",
  "Resort in Mukteshwar Nainital",
  "Homestay in Mukteshwar Nainital",
  "Mukteshwar Resort",
  "Resort near Nainital"
];

const Banner2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentAnimation, setCurrentAnimation] = useState("animate-popUp");
  const [nextAnimation, setNextAnimation] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnimation("animate-disappear");
      setNextAnimation("animate-popUp");

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        setNextIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        setCurrentAnimation("animate-popUp");
        setNextAnimation("");
      }, 1000); // Duration of the disappear animation
    }, 4000); // Change background every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-[50vw] overflow-hidden">
      <div className="image-container">
        <div
          className={`image ${currentAnimation}`}
          style={{ backgroundImage: `url(${imageUrls[currentIndex]})` }}
          aria-label={imageAlts[currentIndex]}
          role="img"
        ></div>
        <div
          className={`image ${nextAnimation}`}
          style={{ backgroundImage: `url(${imageUrls[nextIndex]})` }}
          aria-label={imageAlts[nextIndex]}
          role="img"
        ></div>
      </div>
      <div className="flex justify-center items-center m-auto text-white bg-gradient-to-r from-transparent via-neutral-500 to-transparent  w-full absolute top-10 md:top-20 mx-auto">
        <p className="text-lg md:text-5xl tracking-wide p-2 font-merriweather text-center">
          8000  FEET
        </p>
        <p className="text-lg md:text-5xl tracking-wide p-2 font-merriweather text-center ">
          ABOVE THE
        </p>
        <p className="text-lg md:text-5xl tracking-wide p-2 font-merriweather text-center ">
          ORDINARY
        </p>
      </div>
      {/* <TypeAnimation
        className="text-yellow-200 text-center text-2xl md:text-4xl font-extrabold font-times"
        sequence={[
          `"15 Years of Excellence: A Legacy of Success, A Journey of Achievements"`,
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

export default Banner2;
