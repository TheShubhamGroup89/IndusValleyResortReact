import React, { useState, useEffect } from "react";
import img1 from "../assets/photos/restaurant/MenuPage-1.webp";
import img2 from "../assets/photos/restaurant/MenuPage-2.webp";
import img3 from "../assets/photos/restaurant/MenuPage-3.webp";
import img4 from "../assets/photos/restaurant/MenuPage-4.webp";
import img5 from "../assets/photos/restaurant/MenuPage-5.webp";

import pic1 from "../assets/photos/restaurant/asset-4.png";
import pdf from "../assets/photos/restaurant/Taste Of Himalayas Menu.pdf";

const images = [img1, img2, img3, img4, img5];
const imageAlts = [
  "Hillcrest Cafe menu",
  "Best food in mukteshwar",
  "Best food in mukteshwar menu",
  "Best food in nainital",
  "Food menu in nainital hotel",
];

const RestaurantMenu = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openFullscreen = (image, index) => {
    setFullscreenImage(image);
    setCurrentIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setFullscreenImage(images[nextIndex]);
  };

  const openPdf = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div className="w-full bg-[#d2d2b4] bg-cover bg-opacity-90">
      <div className="flex flex-col gap-3 md:gap-0 pb-10 text-[#40392d]">
        <p className="w-fit flex justify-center items-end mx-auto text-2xl md:text-4xl tracking-wider font-french-canon text-center">
          <img className="h-28 md:h-32" src={pic1} alt="Leaf design" />
          <span className="py-10 pb-5 pr-10 md:pr-24">OUR MENU</span>
        </p>
        <h3 className="w-fit mx-auto text-lg md:text-xl tracking-wider font-french-canon text-center">
          Best Food In Mukteshwar
        </h3>
        <p
          className="w-fit flex justify-center items-end mx-auto pt-5 text-xl md:text-3xl tracking-wider font-french-canon text-center"
          // data-scroll
          // data-scroll-section
          // data-scroll-speed="-.04"
        >
          Hillcrest Café
        </p>

        <div className="flex flex-col gap-5 p-3 md:py-10 md:m-14 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  place-content-center gap-10 md:gap-16 p-5 md:py-10 mx-auto">
            {images.map((image, index) => (
              <img
                key={index}
                className="shadow-md border border-zinc-400 p-1 h-64 w-full md:h-60 m-auto md:hover:scale-90 shadow-black md:hover:shadow-white md:duration-700 cursor-pointer"
                src={image}
                alt={imageAlts[index]}
                onClick={() => openFullscreen(image, index)}
              />
            ))}
          </div>
          {fullscreenImage && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center">
              <button
                className="absolute bottom-10 md:bottom-28 left-20 bg-[#d2d2b4] md:hover:bg-white text-green-950 md:hover:text-black border-2 border-yellow-600 duration-700 font-semibold text-sm md:text-xl font-serif m-3 p-2 rounded-lg my-auto md:mr-8 md:px-8 hover:font-bold focus:outline-none"
                onClick={closeFullscreen}
              >
                Back
              </button>
              <button
                className="absolute bottom-10 md:bottom-28 right-20 bg-[#d2d2b4] md:hover:bg-white text-green-950 md:hover:text-black border-2 border-yellow-600 duration-700 font-semibold text-sm md:text-xl font-serif m-3 p-2 rounded-lg my-auto md:mr-8 md:px-8 hover:font-bold focus:outline-none"
                onClick={showNextImage}
              >
                Next
              </button>
              <img
                src={fullscreenImage}
                alt={imageAlts[currentIndex]}
                className="max-h-full max-w-full cursor-pointer py-10 pt-28 md:p-0"
                onClick={closeFullscreen}
              />
            </div>
          )}
          <section className="py-5 mx-auto flex">
            <button
              className="bg-green-900 text-white font-semibold text-xs md:text-xl font-serif m-3 p-3 md:p-4 my-auto md:mr-8 md:px-8 mr-5  hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
              onClick={openPdf}
            >
              Download Menu
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
