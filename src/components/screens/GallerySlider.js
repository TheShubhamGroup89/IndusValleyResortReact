import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../assets/photos/gallery/Gallery_IMG_1.webp";
import img3 from "../assets/photos/gallery/Gallery_IMG_3.webp";
import img4 from "../assets/photos/gallery/Gallery_IMG_4.webp";
import img5 from "../assets/photos/gallery/Gallery_IMG_5.webp";
import img6 from "../assets/photos/gallery/Gallery_IMG_6.webp";
import img7 from "../assets/photos/gallery/Gallery_IMG_7.webp";
import img8 from "../assets/photos/gallery/Gallery_IMG_8.webp";
import img9 from "../assets/photos/gallery/Gallery_IMG_9.webp";
import img10 from "../assets/photos/gallery/Gallery_IMG_10.webp";
import img11 from "../assets/photos/gallery/Gallery_IMG_11.webp";
import img12 from "../assets/photos/gallery/Gallery_IMG_12.webp";
import img13 from "../assets/photos/gallery/Gallery_IMG_13.webp";
import img14 from "../assets/photos/gallery/Gallery_IMG_14.webp";
import img15 from "../assets/photos/gallery/Gallery_IMG_15.webp";
import img16 from "../assets/photos/gallery/Gallery_IMG_16.webp";
import img17 from "../assets/photos/gallery/Gallery_IMG_17.webp";
import img18 from "../assets/photos/gallery/Gallery_IMG_18.webp";
import img19 from "../assets/photos/gallery/Gallery_IMG_19.webp";
import img20 from "../assets/photos/gallery/Gallery_IMG_20.webp";
import img21 from "../assets/photos/gallery/Gallery_IMG_21.webp";

function GallerySlider() {
  const images = [
    { src: img1, alt: "Resort in nainital" },
    { src: img3, alt: "Resort in nainital mukteshwar" },
    { src: img4, alt: "homestay in nainital" },
    { src: img5, alt: "homestay in nainital uttarakhand" },
    { src: img6, alt: "Nainital hotel" },
    { src: img7, alt: "hotel in nainital" },
    { src: img8, alt: "restaurant in nainital" },
    { src: img9, alt: "cafe in nainital" },
    { src: img10, alt: "eatery in nainital" },
    { src: img11, alt: "best restaunrant in mukteshwar nainital" },
    { src: img12, alt: "Gallery Image 12" },
    { src: img13, alt: "Gallery Image 13" },
    { src: img14, alt: "Gallery Image 14" },
    { src: img15, alt: "Gallery Image 15" },
    { src: img16, alt: "Gallery Image 16" },
    { src: img17, alt: "Gallery Image 17" },
    { src: img18, alt: "Gallery Image 18" },
    { src: img19, alt: "Gallery Image 19" },
    { src: img20, alt: "Gallery Image 20" },
    { src: img21, alt: "Gallery Image 21" }
  ];

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true, // Enable keyboard navigation
    focusOnSelect: true  // Enable focusing on selected slide
  };

  return (
    <div className="w-full md:bg-[#d2d2b4] bg-cover md:bg-opacity-80">
      <div className="py-5">
        <h3 className="w-fit text-[#d2d2b4] md:text-[#40392d] mx-auto text-2xl md:text-4xl tracking-widest py-5 font-berkshire text-center">
          Gallery
        </h3>
        <div className="md:py-10 md:mx-14">
          <Slider {...settings} className="md:w-5/6 m-auto">
            {images.map((img, index) => (
              <Avatar
                key={index}
                src={img.src}
                alt={img.alt}
                className="h-fit md:h-[500px] w-fit mx-auto rounded-tr-3xl rounded-bl-3xl object-cover"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default GallerySlider;
