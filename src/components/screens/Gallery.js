import React, { useState, useEffect } from "react";
import bg2 from "../assets/bg/gallery_bg4.avif";
// import bg2 from  "../assets/bg/WebsiteBg3.avif";
import gal_img1 from "../assets/photos/gallery/Gallery_IMG_1.webp";
import gal_img2 from "../assets/photos/gallery/Gallery_IMG_2.webp";
import gal_img3 from "../assets/photos/gallery/Gallery_IMG_3.webp";
import gal_img4 from "../assets/photos/gallery/Gallery_IMG_4.webp";
import gal_img5 from "../assets/photos/gallery/Gallery_IMG_5.webp";
import gal_img6 from "../assets/photos/gallery/Gallery_IMG_6.webp";
import gal_img7 from "../assets/photos/gallery/Gallery_IMG_7.webp";
import gal_img8 from "../assets/photos/gallery/Gallery_IMG_8.webp";
import gal_img9 from "../assets/photos/gallery/Gallery_IMG_9.webp";
import gal_img10 from "../assets/photos/gallery/Gallery_IMG_10.webp";
import gal_img11 from "../assets/photos/gallery/Gallery_IMG_11.webp";
import gal_img12 from "../assets/photos/gallery/Gallery_IMG_12.webp";
import gal_img13 from "../assets/photos/gallery/Gallery_IMG_13.webp";
import gal_img14 from "../assets/photos/gallery/Gallery_IMG_14.webp";
import gal_img15 from "../assets/photos/gallery/Gallery_IMG_15.webp";
import gal_img16 from "../assets/photos/gallery/Gallery_IMG_16.webp";
import gal_img17 from "../assets/photos/gallery/Gallery_IMG_17.webp";
import gal_img18 from "../assets/photos/gallery/Gallery_IMG_18.webp";
import gal_img19 from "../assets/photos/gallery/Gallery_IMG_19.webp";
import gal_img20 from "../assets/photos/gallery/Gallery_IMG_20.webp";
import gal_img21 from "../assets/photos/gallery/Gallery_IMG_21.webp";

import { Link } from "react-router-dom";

const images = [
  gal_img1,
  gal_img2,
  gal_img3,
  gal_img4,
  gal_img5,
  gal_img6,
  gal_img7,
  gal_img8,
  gal_img9,
  gal_img10,
  gal_img11,
  gal_img12,
  gal_img13,
  gal_img14,
  gal_img15,
  gal_img16,
  gal_img17,
  gal_img18,
  gal_img19,
  gal_img20,
  gal_img21,
];

function Gallery() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (fullscreenImage) {
        if (event.key === "ArrowRight") {
          showNextImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },
  //  [fullscreenImage, currentIndex]
  );

  const openFullscreen = (image, index) => {
    setFullscreenImage(image);
    setCurrentIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const goBackToGallery = () => {
    setFullscreenImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setFullscreenImage(images[nextIndex]);
  };

  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${bg2})` }}>
      <div>
        <h1 className="text-3xl md:text-5xl text-[#bb9349] w-fit mx-auto md:pt-16  font-merriweather text-center p-5">
          GALLERY/
          <Link to="/">
            <span className="text-lg md:text-xl text-[#40392d] bg-[#d2d2b4] hover:text-red-600 px-2 hover:bg-white">
              HOME
            </span>
          </Link>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-24 md:pt-10 mx-auto">
          {images.map((image, index) => (
            <img
              key={index}
              className=" h-72 w-96 m-auto rounded-tr-3xl rounded-bl-3xl p-3 md:hover:scale-110 md:duration-700 cursor-pointer"
              src={image}
              alt={`Gallery Pic ${index + 1}`}
              onClick={() => openFullscreen(image, index)}
            />
          ))}
        </div>

        {fullscreenImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
            <button
              className="absolute bottom-28 left-20 bg-[#d2d2b4] md:hover:bg-white text-green-950 md:hover:text-black border-2 border-yellow-600 duration-700 font-semibold text-sm md:text-xl font-serif m-3 p-2 rounded-lg my-auto md:mr-8 md:px-8  hover:font-bold focus:outline-none"
              onClick={goBackToGallery}
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
              alt="Gallery Pic"
              className="max-h-full max-w-full cursor-pointer md:p-20 md:pt-32"
              onClick={closeFullscreen}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
