import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "../cottageInsider/IVR- 43-4BKH/iv1.webp";
import img2 from "../cottageInsider/IVR- 43-4BKH/iv2.webp";
import img3 from "../cottageInsider/IVR- 43-4BKH/iv3.webp";
import img4 from "../cottageInsider/IVR- 43-4BKH/iv4.webp";
import img5 from "../cottageInsider/IVR- 43-4BKH/iv5.webp";
import img6 from "../cottageInsider/IVR- 43-4BKH/iv6.webp";
import img7 from "../cottageInsider/IVR- 43-4BKH/iv7.webp";
import img8 from "../cottageInsider/IVR- 43-4BKH/iv8.webp";
import img9 from "../cottageInsider/IVR- 43-4BKH/iv9.webp";
import img10 from "../cottageInsider/IVR- 43-4BKH/iv10.webp";
import img11 from "../cottageInsider/IVR- 43-4BKH/iv11.webp";
import img12 from "../cottageInsider/IVR- 43-4BKH/iv12.webp";
import img13 from "../cottageInsider/IVR- 43-4BKH/iv13.webp";
import img14 from "../cottageInsider/IVR- 43-4BKH/iv14.webp";
import img15 from "../cottageInsider/IVR- 43-4BKH/iv15.webp";
import img16 from "../cottageInsider/IVR- 43-4BKH/iv16.webp";
import img17 from "../cottageInsider/IVR- 43-4BKH/iv17.webp";
import img18 from "../cottageInsider/IVR- 43-4BKH/iv18.webp";
import img19 from "../cottageInsider/IVR- 43-4BKH/iv19.webp";
import img20 from "../cottageInsider/IVR- 43-4BKH/iv20.webp";

  function Gallery43() {
    const images = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
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
               <h3 className="w-fit text-[#40392d]text-[#d2d2b4]  mx-auto text-2xl md:text-4xl tracking-widest py-5 font-french-canon text-center ">
            GALLERY
        </h3>
        <div className="md:py-10 px-6 md:mx-14">
            <Slider {...settings} className="md:w-11/12 lg:w-4/5 m-auto">
                {images.map((img, index) => (
                    <Avatar
                        key={index}
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className="h-56 md:h-[500px] w-fit mx-auto rounded-tr-3xl rounded-bl-3xl object-cover"
                    />
                ))}
            </Slider>
        </div>
        </div>
     
    </div>
  
  );
}


export default Gallery43