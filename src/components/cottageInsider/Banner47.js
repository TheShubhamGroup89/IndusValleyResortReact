import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/COTTAGE_47_2 BKH/Banner_1.webp";
import img2 from "../cottageInsider/COTTAGE_47_2 BKH/Banner_2.webp";
import img3 from "../cottageInsider/COTTAGE_47_2 BKH/Banner_3.jpg";
import img4 from "../cottageInsider/COTTAGE_47_2 BKH/Banner_4.jpg";
import img5 from "../cottageInsider/COTTAGE_47_2 BKH/Banner_5.jpg";
import img6 from "../cottageInsider/COTTAGE_47_2 BKH/Banner_6.jpg";

  function Banner47() {
    const images = [
      img1, img2, img3, img4,img5, img6
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
                        className="h-52 md:h-[450px] xl:h-[500px] w-fit mx-auto  object-cover"
                    />
                ))}
            </Slider>
        </div>
    
     
    </div>
  
  );
}


export default Banner47