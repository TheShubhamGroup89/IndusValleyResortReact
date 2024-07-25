import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR_42_1BKH/Banner_1.jpg";
import img2 from "../cottageInsider/IVR_42_1BKH/Banner_2.jpg";


  function Banner42() {

    const images = [
      img1, img2
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
            <Slider {...settings} className="md:w-11/12 xl:w-4/5 m-auto">
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


export default Banner42