import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/photos/gallery2/InnerView/iv1.jpg";
import img2 from "../assets/photos/gallery2/InnerView/iv2.jpg";
import img3 from "../assets/photos/gallery2/InnerView/iv3.jpg";
// import img4 from "../assets/photos/gallery2/InnerView/iv4.jpg";
import img5 from "../assets/photos/gallery2/InnerView/iv5.jpg";
import img6 from "../assets/photos/gallery2/InnerView/iv6.jpg";
import img7 from "../assets/photos/gallery2/InnerView/iv7.jpg";
import img8 from "../assets/photos/gallery2/InnerView/iv8.jpg";
import img9 from "../assets/photos/gallery2/InnerView/iv9.jpg";
import img10 from "../assets/photos/gallery2/InnerView/iv10.jpg";
import img11 from "../assets/photos/gallery2/InnerView/iv11.jpg";
import img12 from "../assets/photos/gallery2/InnerView/iv12.jpg";
import img13 from "../assets/photos/gallery2/InnerView/iv13.jpg";
// import img14 from "../assets/photos/gallery2/InnerView/iv14.jpg";
import img15 from "../assets/photos/gallery2/InnerView/iv15.jpg";
import img16 from "../assets/photos/gallery2/InnerView/iv16.jpg";
import img17 from "../assets/photos/gallery2/InnerView/iv17.jpg";
import img18 from "../assets/photos/gallery2/InnerView/iv18.jpg";
import img19 from "../assets/photos/gallery2/InnerView/iv19.jpg";
import img20 from "../assets/photos/gallery2/InnerView/iv20.jpg";
import img21 from "../assets/photos/gallery2/InnerView/iv21.jpg";
import img22 from "../assets/photos/gallery2/InnerView/iv22.jpg";
import img23 from "../assets/photos/gallery2/InnerView/iv23.jpg";
import img24 from "../assets/photos/gallery2/InnerView/iv24.jpg";
import img25 from "../assets/photos/gallery2/InnerView/iv25.jpg";
import img26 from "../assets/photos/gallery2/InnerView/iv26.jpg";
import img27 from "../assets/photos/gallery2/InnerView/iv27.jpg";
import img28 from "../assets/photos/gallery2/InnerView/iv28.jpg";
import img29 from "../assets/photos/gallery2/InnerView/iv29.jpg";
import img30 from "../assets/photos/gallery2/InnerView/iv30.jpg";

const images = [
  { src: img1, alt: "Homestay in nainital uttarakhand" },
  { src: img2, alt: "Resort in nainital uttarakhand" },
  { src: img3, alt: "Inner View Image 3" },
  { src: img5, alt: "Inner View Image 5" },
  { src: img6, alt: "Inner View Image 6" },
  { src: img7, alt: "Inner View Image 7" },
  { src: img8, alt: "Inner View Image 8" },
  { src: img9, alt: "Inner View Image 9" },
  { src: img10, alt: "Inner View Image 10" },
  { src: img11, alt: "Inner View Image 11" },
  { src: img12, alt: "Inner View Image 12" },
  { src: img13, alt: "Inner View Image 13" },
  { src: img15, alt: "Inner View Image 15" },
  { src: img16, alt: "Inner View Image 16" },
  { src: img17, alt: "Inner View Image 17" },
  { src: img18, alt: "Inner View Image 18" },
  { src: img19, alt: "Inner View Image 19" },
  { src: img20, alt: "Inner View Image 20" },
  { src: img21, alt: "Inner View Image 21" },
  { src: img22, alt: "Inner View Image 22" },
  { src: img23, alt: "Inner View Image 23" },
  { src: img24, alt: "Inner View Image 24" },
  { src: img25, alt: "Inner View Image 25" },
  { src: img26, alt: "Inner View Image 26" },
  { src: img27, alt: "Inner View Image 27" },
  { src: img28, alt: "Inner View Image 28" },
  { src: img29, alt: "Inner View Image 29" },
  { src: img30, alt: "Inner View Image 30" },
  { src: img5, alt: "Inner View Image 5" },
  { src: img9, alt: "Inner View Image 9" },
];

function GalleryIv() {
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
    <>
      <section className="flex flex-col md:p-5 md:pt-0 lg:p-10  bg-[#d2d2b4] bg-cover bg-opacity-80 text-[#40392d] ">
        <video
          className="lg:object-cover w-full py-5 md:p-5 md:pt-0"
          autoPlay={true}
          muted={true}
          loop={true}
          src="/bg_video/Gallery2.mp4" type="video/mp4"
          // src="https://res.cloudinary.com/dqeka0ibm/video/upload/v1719483824/Gallery2_owyo52.mp4"
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

      {fullscreenImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center"
          onClick={closeFullscreen}
        >
          <button
            className="absolute bottom-28 left-20 text-black bg-white font-semibold text-sm md:text-xl font-serif m-3 p-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              showPreviousImage();
            }}
          >
            Prev
          </button>
          <button
            className="absolute bottom-28 right-20 text-black bg-white font-semibold text-sm md:text-xl font-serif m-3 p-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
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
    </>
  );
}

export default GalleryIv;

