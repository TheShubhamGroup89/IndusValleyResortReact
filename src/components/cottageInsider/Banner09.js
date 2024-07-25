import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR_09_1BHK/OuterView/ov1.webp";
import img2 from "../cottageInsider/IVR_09_1BHK/OuterView/ov2.webp";
import img3 from "../cottageInsider/IVR_09_1BHK/OuterView/ov3.webp";
import img4 from "../cottageInsider/IVR_09_1BHK/OuterView/ov4.webp";
import img5 from "../cottageInsider/IVR_09_1BHK/OuterView/ov5.webp";

function Banner09() {
  const images = [
    { src: img1, alt: "1 BHK stay in mukteshwar" },
    { src: img2, alt: "Front view of the 1BHK cottage" },
    { src: img3, alt: "Side view showing the entrance of the cottage" },
    { src: img4, alt: "Cottage with surrounding trees and greenery" },
    { src: img5, alt: "Scenic view from the cottage" }
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
      <div className="md:pb-5 px-6">
        <Slider {...settings} className="md:w-11/12 lg:w-4/5 m-auto">
          {images.map((image, index) => (
            <Avatar
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-52 md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner09;
