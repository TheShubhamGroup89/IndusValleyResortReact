import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR_69_1BKH/iv1.webp";
import img2 from "../cottageInsider/IVR_69_1BKH/iv2.webp";
import img3 from "../cottageInsider/IVR_69_1BKH/iv3.jpg";
import img4 from "../cottageInsider/IVR_69_1BKH/iv4.webp";
import img5 from "../cottageInsider/IVR_69_1BKH/iv5.jpg";
import img6 from "../cottageInsider/IVR_69_1BKH/iv6.webp";
import img7 from "../cottageInsider/IVR_69_1BKH/iv7.jpg";


  function Gallery69() {


    const images = [
      img1, img2, img3, img4, img5, img6, img7
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
           <div className="py-5 px-6">
               <h3 className="w-fit text-[#40392d] mx-auto text-2xl md:text-4xl tracking-widest py-5 font-french-canon text-center ">
            GALLERY
        </h3>
        <div className="md:py-10 md:mx-14">
            <Slider {...settings} className="md:w-11/12 lg:w-4/5 m-auto">
                {images.map((img, index) => (
                    <Avatar
                        key={index}
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className="h-52 md:h-[450px] lg:w-[500px] w-fit mx-auto rounded-tr-3xl rounded-bl-3xl object-cover"
                    />
                ))}
            </Slider>
        </div>
        </div>
    
     
    </div>
  
  );
}

export default Gallery69