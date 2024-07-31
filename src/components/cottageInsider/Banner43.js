import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR- 43-4BKH/ov1.webp";
import img2 from "../cottageInsider/IVR- 43-4BKH/ov2.webp";
import img3 from "../cottageInsider/IVR- 43-4BKH/ov3.webp";
import img4 from "../cottageInsider/IVR- 43-4BKH/ov4.webp";
import img5 from "../cottageInsider/IVR- 43-4BKH/ov5.webp";
import img6 from "../cottageInsider/IVR- 43-4BKH/ov6.webp";
import img7 from "../cottageInsider/IVR- 43-4BKH/ov7.webp";
import img8 from "../cottageInsider/IVR- 43-4BKH/ov8.webp";
import img9 from "../cottageInsider/IVR- 43-4BKH/ov9.webp";
import img10 from "../cottageInsider/IVR- 43-4BKH/ov10.webp";
import img11 from "../cottageInsider/IVR- 43-4BKH/ov11.webp";
import img12 from "../cottageInsider/IVR- 43-4BKH/ov12.webp";
import img13 from "../cottageInsider/IVR- 43-4BKH/ov13.webp";
import img14 from "../cottageInsider/IVR- 43-4BKH/ov14.webp";
import img15 from "../cottageInsider/IVR- 43-4BKH/ov15.webp";
import img16 from "../cottageInsider/IVR- 43-4BKH/ov16.webp";
import img17 from "../cottageInsider/IVR- 43-4BKH/ov17.webp";
import img18 from "../cottageInsider/IVR- 43-4BKH/ov18.webp";
import img19 from "../cottageInsider/IVR- 43-4BKH/ov19.webp";
import img20 from "../cottageInsider/IVR- 43-4BKH/ov20.webp";
import img21 from "../cottageInsider/IVR- 43-4BKH/ov21.webp";
import img22 from "../cottageInsider/IVR- 43-4BKH/ov22.webp";
import img23 from "../cottageInsider/IVR- 43-4BKH/ov23.webp";





  function Banner43() {

    const images = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23
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