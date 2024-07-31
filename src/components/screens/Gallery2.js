import React, { useState, useEffect, useRef } from "react";
// import bg from "../assets/bg/bgHome2.jpg";

import { Helmet } from "react-helmet";
import line from "../assets/photos/gallery2/underline.png";
import gal_img1 from "../assets/photos/gallery2/OuterView/ov1.jpg";
import gal_img2 from "../assets/photos/gallery2/OuterView/ov2.jpg";
import gal_img3 from "../assets/photos/gallery2/OuterView/ov3.jpg";
import gal_img4 from "../assets/photos/gallery2/OuterView/ov4.jpg";
import gal_img5 from "../assets/photos/gallery2/OuterView/ov5.jpg";
import gal_img6 from "../assets/photos/gallery2/OuterView/ov6.jpg";
import gal_img7 from "../assets/photos/gallery2/OuterView/ov7.jpg";
import gal_img8 from "../assets/photos/gallery2/OuterView/ov8.jpg";
import gal_img9 from "../assets/photos/gallery2/OuterView/ov9.jpg";
import gal_img10 from "../assets/photos/gallery2/OuterView/ov10.jpg";
import gal_img11 from "../assets/photos/gallery2/OuterView/ov11.jpg";
import gal_img12 from "../assets/photos/gallery2/OuterView/ov12.jpg";
import gal_img13 from "../assets/photos/gallery2/OuterView/ov13.jpg";
import gal_img14 from "../assets/photos/gallery2/OuterView/ov14.jpg";
import gal_img15 from "../assets/photos/gallery2/OuterView/ov15.jpg";
import GalleryIv from "./GalleryIv";
import BannerP4 from "./BannerP4";
import BookNowBanner from "./BookNowBanner";

const images = [
  { src: gal_img1, alt: "Cottage for stay in mukteshwar" },
  { src: gal_img2, alt: "Villa for stay in nainital" },
  { src: gal_img3, alt: "Gallery Image 3" },
  { src: gal_img4, alt: "Gallery Image 4" },
  { src: gal_img5, alt: "Gallery Image 5" },
  { src: gal_img6, alt: "Gallery Image 6" },
  { src: gal_img7, alt: "Gallery Image 7" },
  { src: gal_img8, alt: "Gallery Image 8" },
  { src: gal_img9, alt: "Gallery Image 9" },
  { src: gal_img10, alt: "Gallery Image 10" },
  { src: gal_img11, alt: "Gallery Image 11" },
  { src: gal_img12, alt: "Gallery Image 12" },
  { src: gal_img13, alt: "Gallery Image 13" },
  { src: gal_img14, alt: "Gallery Image 14" },
  { src: gal_img15, alt: "Gallery Image 15" },
  // ... add more paths as needed
];

function Gallery2() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullscreen = (image, index) => {
    setFullscreenImage(image);
    setCurrentIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setFullscreenImage(images[nextIndex].src);
    setCurrentIndex(nextIndex);
  };

  const showPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setFullscreenImage(images[prevIndex].src);
    setCurrentIndex(prevIndex);
  };

  const handleKeyDown = (event) => {
    if (fullscreenImage) {
      if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPreviousImage();
      } else if (event.key === "Escape") {
        closeFullscreen();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenImage, currentIndex]);

  return (
    <div className="min-h-screen " 
    // style={{ 
    //   backgroundImage: `url(${bg})`, 
    //   backgroundAttachment: 'fixed', 
    //   backgroundRepeat: 'no-repeat', 
    //   backgroundSize: 'cover', 
    //   backgroundPosition: 'center',
    // }}
    >
      <Helmet>
        <title>Our Resort Gallery With Himalayan View In Mukteshwar</title>
        <meta
          name="description"
          content="Indulge in the allure of Indus Valley Resort with our captivating gallery. Immerse yourself in the scenic vistas and peace. Book your Mukteshwar retreat now"
        />
        {/* <link rel="canonical" href="https://www.indusvalleyresort.com/gallery" /> */}
      </Helmet>
      <BannerP4 />
      <BookNowBanner />
      <div className="flex flex-col justify-center items-center py-5  bg-[#d2d2b4] bg-cover bg-opacity-80 text-[#40392d] ">
        <div className="flex flex-col md:flex-row pt-5 lg:pt-10 justify-center items-center  text-[#40392d] ">
          <div className="w-fit mx-auto md:mx-0 text-2xl md:text-4xl font-merriweather text-center px-3">
            THE GALLERY :
          </div>
          <div className="w-fit mx-auto md:mx-0 text-2xl md:text-4xl font-merriweather text-center px-3 md:pl-0">
            ORIGINAL SITE PICS
          </div>
        </div>
        <img className="w-96 md:w-[700px]" src={line} alt="underline" />
        <h1 className="w-fit  mx-auto text-sm md:text-xl font-merriweather text-center px-3">
          (HOMESTAY IN UTTARAKHAND HILLS)
        </h1>
      </div>

      <section className="flex flex-col md:p-5 md:pb-0 lg:p-10 lg:pb-0 bg-[#d2d2b4] bg-cover bg-opacity-80 text-[#40392d]">
        <video
          className="lg:object-cover w-full md:p-5 md:pb-0"
          autoPlay
          muted
          loop
          src="/bg_video/GalleryOv.mp4" type="video/mp4"
          // "https://res.cloudinary.com/dqeka0ibm/video/upload/v1719482609/GalleryOv_g2382b.webm"
        />

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-5 pb-0 w-full bg-cover mx-auto">
          {images.map((image, index) => (
            <img
              key={index}
              className="p-1 gap-5 md:hover:shadow-yellow-600 md:hover:shadow-md lg:hover:scale-110 md:duration-700 cursor-pointer aspect-wide w-full odd:rotate-6 md:odd:rotate-0 even:-rotate-6 md:even:rotate-0 l:w-72"
              src={image.src}
              alt={image.alt}
              onClick={() => openFullscreen(image.src, index)}
            />
          ))}
        </div>
      </section>
      <div className="py-10 md:py-0">
        <GalleryIv />
      </div>

      {fullscreenImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center"
          onClick={closeFullscreen}
        >
          <button
            className="absolute bottom-28 left-20 text-black bg-white font-semibold text-sm md:text-xl font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              showPreviousImage();
            }}
          >
            Prev
          </button>
          <button
            className="absolute bottom-28 right-20 text-black bg-white font-semibold text-sm md:text-xl font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
          >
            Next
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen Img"
            className="max-h-full max-w-full cursor-pointer md:p-20 md:pt-32"
            onClick={closeFullscreen}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery2;
