import React, { useState, useEffect } from "react";
import img1 from "../assets/photos/restaurant/restaurantImg1.webp";
import img2 from "../assets/photos/restaurant/restaurantImg2.webp";
import img3 from "../assets/photos/restaurant/restaurantImg3.webp";
import img4 from "../assets/photos/restaurant/restaurantImg4.webp";
import pic1 from "../assets/photos/restaurant/asset-4.png";
import ov1 from "../assets/photos/restaurant/restaurant1.webp";
import ov2 from "../assets/photos/restaurant/restaurant2.webp";
import ov3 from "../assets/photos/restaurant/restaurant3.webp";
import ov4 from "../assets/photos/restaurant/restaurant4.webp";

const images = [img1, img2, img3, img4];
const imageAlts = [
  "mukteshwar hotel",
  "Restaurant in mukteshwar",
  "Cafe in mukteshwar",
  "Eatery in mukteshwar",
];

const outerviews = [ov1, ov2, ov3, ov4];
const outerviewAlts = [
  "Best cafe in mukteshwar",
  "Best hotel in mukteshwar",
  "Hotel in mukteshwar uttarakhand",
  "Best restaurant in mukteshwar",
];

const AboutRestaurant = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOuterView, setIsOuterView] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (fullscreenImage) {
        if (event.key === "ArrowRight") {
          showNextImage();
        } else if (event.key === "Escape") {
          closeFullscreen();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenImage]);

  const openFullscreen = (image, index, isOuter) => {
    setFullscreenImage(image);
    setCurrentIndex(index);
    setIsOuterView(isOuter);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % (isOuterView ? outerviews.length : images.length);
    const nextImages = isOuterView ? outerviews : images;
    setCurrentIndex(nextIndex);
    setFullscreenImage(nextImages[nextIndex]);
  };

  const renderFullscreenImage = () => (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
      <button
        className="absolute bottom-28 left-20 bg-[#d2d2b4] md:hover:bg-white text-green-950 md:hover:text-black border-2 border-yellow-600 duration-700 font-semibold text-sm md:text-xl font-serif m-3 p-2 rounded-lg my-auto md:mr-8 md:px-8 hover:font-bold focus:outline-none"
        onClick={closeFullscreen}
      >
        Back
      </button>
      <button
        className="absolute bottom-28 right-20 bg-[#d2d2b4] md:hover:bg-white text-green-950 md:hover:text-black border-2 border-yellow-600 duration-700 font-semibold text-sm md:text-xl font-serif m-3 p-2 rounded-lg my-auto md:mr-8 md:px-8 hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
        onClick={showNextImage}
      >
        Next
      </button>
      <img
        src={fullscreenImage}
        alt={isOuterView ? outerviewAlts[currentIndex] : imageAlts[currentIndex]}
        className="max-h-full max-w-full cursor-pointer md:p-16 md:pt-32"
        onClick={closeFullscreen}
      />
    </div>
  );

  return (
    <div className="w-full bg-[#d2d2b4] bg-cover bg-opacity-90">
      <div className="flex flex-col gap-3 md:gap-0 text-[#40392d]">
        <div className="w-fit flex items-center mx-10 md:mx-28 pt-10">
          <img className="h-20 md:h-28" src={pic1} alt="leaf" />
          <h1 className="w-fit text-xl md:text-3xl tracking-wider font-french-canon text-center">
            Experience Exceptional Dining - Your Go-To Eatery in Mukteshwar
          </h1>
        </div>

        <div className="flex flex-col gap-5 p-3 md:m-14 md:mt-0">
          <p className="text-lg md:text-2xl xl:mx-16 px-3 font-glacial text-justify">
            Welcome to Indus Valley Resort in Mukteshwar, Uttarakhand. Situated
            against the stunning backdrop of the Nanda Devi mountain range, our
            luxury resort in Mukteshwar offers a perfect blend of comfort and
            elegance. Whether it's accommodation or dining you seek, we have got
            it all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-content-center gap-10 md:gap-16 p-5 md:py-10 mx-auto">
            {outerviews.map((image, index) => (
              <img
                key={index}
                className="shadow-md border border-zinc-400 p-1 h-64 md:w-64 m-auto md:hover:scale-90 shadow-black md:hover:shadow-white md:duration-700 cursor-pointer"
                src={image}
                alt={outerviewAlts[index]}
                onClick={() => openFullscreen(image, index, true)}
              />
            ))}
          </div>

          {fullscreenImage && renderFullscreenImage()}

          <p className="text-lg md:text-2xl xl:mx-16 px-3 font-glacial text-justify">
            Our <a href="/">homestay in Mukteshwar</a> is not just a place to stay but a
            destination for memorable gatherings and celebrations. With ample
            outdoor space, we cater to private parties, ensuring an exclusive
            experience for you and your guests at our restaurant in Mukteshwar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-content-center gap-10 md:gap-16 p-5 md:py-10 mx-auto">
            {images.map((image, index) => (
              <img
                key={index}
                className="shadow-md border border-zinc-400 p-1 h-64 md:w-64 m-auto md:hover:scale-90 shadow-black md:hover:shadow-white md:duration-700 cursor-pointer"
                src={image}
                alt={imageAlts[index]}
                onClick={() => openFullscreen(image, index, false)}
              />
            ))}
          </div>

          {fullscreenImage && renderFullscreenImage()}

          <div className="w-fit flex items-center mx-10 md:mx-28">
            <img className="h-20 md:h-28" src={pic1} alt="leaf" />
            <h2 className="w-fit text-lg md:text-2xl tracking-wider font-french-canon text-center">
              Where Flavor Meets Elegance: Mukteshwar's Best Restaurant Experience
            </h2>
          </div>

          <p className="text-lg md:text-2xl mxl:mx-16 px-3 font-glacial text-justify">
            Savor the authentic taste of home-cooked meals seasoned with unique
            Pahadi spices at our restaurant. Our chefs are passionate about
            crafting local delicacies and personalized dishes to fulfill your
            desires. Enjoy your dining experience with stunning panoramic
            mountain views enhancing the ambiance.
          </p>
          <p className="text-lg md:text-2xl xl:mx-16 px-3 font-glacial text-justify">
            So, if you're seeking a cozy cafe in Mukteshwar to unwind, Indus
            Valley Mukteshwar Resort welcomes you to a world of luxury and
            tranquility amidst the beauty of Uttarakhand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutRestaurant;
