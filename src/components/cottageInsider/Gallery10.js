import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR_10_2BKH/iv1.jpg";
import img2 from "../cottageInsider/IVR_10_2BKH/iv2.jpg";
import img3 from "../cottageInsider/IVR_10_2BKH/iv3.jpg";
import img4 from "../cottageInsider/IVR_10_2BKH/iv4.jpg";
import img5 from "../cottageInsider/IVR_10_2BKH/iv5.jpg";
import img6 from "../cottageInsider/IVR_10_2BKH/iv6.jpg";
import img7 from "../cottageInsider/IVR_10_2BKH/iv7.jpg";
import img8 from "../cottageInsider/IVR_10_2BKH/iv8.jpg";
import img9 from "../cottageInsider/IVR_10_2BKH/iv9.jpg";
import img10 from "../cottageInsider/IVR_10_2BKH/iv10.jpg";
import img11 from "../cottageInsider/IVR_10_2BKH/iv11.jpg";
import img12 from "../cottageInsider/IVR_10_2BKH/iv12.jpg";
import img13 from "../cottageInsider/IVR_10_2BKH/iv13.jpg";
import img14 from "../cottageInsider/IVR_10_2BKH/iv14.jpg";
import img15 from "../cottageInsider/IVR_10_2BKH/iv15.jpg";



  function Gallery10() {


    const images = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,
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
           <div className="py-5">
               <h3 className="w-fit text-[#d2d2b4] md:text-[#40392d] mx-auto text-2xl md:text-4xl tracking-widest py-5 font-french-canon text-center ">
            GALLERY
        </h3>
        <div className="md:py-10 px-6 md:mx-14">
            <Slider {...settings} className="md:w-11/12 lg:w-4/5 m-auto">
                {images.map((img, index) => (
                    <Avatar
                        key={index}
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className="h-52 md:h-[500px] w-fit mx-auto rounded-tr-3xl rounded-bl-3xl object-cover"
                    />
                ))}
            </Slider>
        </div>
        </div>
    </div>
  
  );
}


export default Gallery10