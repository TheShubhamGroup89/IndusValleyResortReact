import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR- 43-4BKH/Banner_1.webp";
import img2 from "../cottageInsider/IVR- 43-4BKH/Banner_2.webp";
import img3 from "../cottageInsider/IVR- 43-4BKH/Banner_3.webp";
import img4 from "../cottageInsider/IVR- 43-4BKH/Banner_4.webp";
import img5 from "../cottageInsider/IVR- 43-4BKH/Banner_5.webp";
import img6 from "../cottageInsider/IVR- 43-4BKH/Banner_6.webp";
import img7 from "../cottageInsider/IVR- 43-4BKH/Banner_7.webp";
import img8 from "../cottageInsider/IVR- 43-4BKH/Banner_8.webp";
import img9 from "../cottageInsider/IVR- 43-4BKH/Banner_9.webp";
import img10 from "../cottageInsider/IVR- 43-4BKH/Banner_10.webp";
import img11 from "../cottageInsider/IVR- 43-4BKH/Banner_11.webp";




  function Banner43() {

    const images = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
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
    <div className="w-full">
        <div className="md:pb-5 px-6">
            <Slider {...settings} className="md:w-11/12 lg:w-4/5 m-auto">
                {images.map((img, index) => (
                    <Avatar
                        key={index}
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className="h-52 md:h-[550px] w-fit mx-auto  object-cover"
                    />
                ))}
            </Slider>
        </div>
    
     
    </div>
  
  );
}


export default Banner43