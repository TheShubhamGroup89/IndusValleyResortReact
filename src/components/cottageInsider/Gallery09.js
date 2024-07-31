import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR_09_1BHK/InnerView/iv1.webp";
import img2 from "../cottageInsider/IVR_09_1BHK/InnerView/iv2.webp";
import img3 from "../cottageInsider/IVR_09_1BHK/InnerView/iv3.webp";
import img4 from "../cottageInsider/IVR_09_1BHK/InnerView/iv4.webp";
import img5 from "../cottageInsider/IVR_09_1BHK/InnerView/iv5.webp";
import img6 from "../cottageInsider/IVR_09_1BHK/InnerView/iv6.webp";
import img7 from "../cottageInsider/IVR_09_1BHK/InnerView/iv7.webp";
import img8 from "../cottageInsider/IVR_09_1BHK/InnerView/iv8.webp";


function Gallery09() {
  const images = [
    { src: img1, alt: "Living room with modern furniture and decor" },
    { src: img2, alt: "Bedroom with cozy bedding and large windows" },
    { src: img3, alt: "Kitchen area with appliances and dining table" },
    { src: img4, alt: "Bathroom with sleek fixtures and shower" },
    { src: img5, alt: "Dining area with table and chairs" },
    { src: img6, alt: "Outdoor view from inside the cottage" },
    { src: img7, alt: "cottage outer view" },
    { src: img8, alt: "outside view" },

  ];

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    focusOnSelect: true
  };

  return (
    <div className="w-full">
      <div className="py-5 px-6">
        <h3 className="w-fit text-[#40392d] mx-auto text-2xl md:text-4xl tracking-widest py-5 font-french-canon text-center">
          GALLERY
        </h3>
        <div className="md:py-10 md:mx-14">
          <Slider {...settings} className="md:w-11/12 lg:w-4/5 m-auto">
            {images.map((image, index) => (
              <Avatar
                key={index}
                src={image.src}
                alt={image.alt}
                className="h-52 md:h-[450px] xl:h-[500px] w-fit mx-auto rounded-tr-3xl rounded-bl-3xl object-cover"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery09;
