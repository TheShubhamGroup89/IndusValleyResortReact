import { Carousel, IconButton } from "@material-tailwind/react";
import img1 from "../cottageInsider/COTTAGE_46_2BKH/Banner_1.jpg";
import img2 from "../cottageInsider/COTTAGE_46_2BKH/Banner_2.jpg";
import img3 from "../cottageInsider/COTTAGE_46_2BKH/Banner_3.jpg";
import img4 from "../cottageInsider/COTTAGE_46_2BKH/Banner_4.jpg";
import img5 from "../cottageInsider/COTTAGE_46_2BKH/Banner_5.jpg";



  function Banner46() {


  return (
          <Carousel
    className="rounded-xl items-center"
    autoplay={true}
    autoplayDelay={5000}
    loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-3 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-6 w-6 text-black "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-6 w-6 text-black "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={img1}
        alt="img 1"
        className="md:h-[600px] w-fit md:w-11/12 lg:w-4/5 mx-auto object-cover"
      />
   
      <img
        src={img2}
        alt="img 2"
        className="md:h-[600px] w-fit md:w-11/12 lg:w-4/5  mx-auto object-cover"
      />
      <img
        src={img3}
        alt="img 3"
        className="md:h-[600px] w-fit md:w-11/12 lg:w-4/5 mx-auto object-cover"
      />
      <img
        src={img4}
        alt="img 4"
        className="md:h-[600px] w-fit md:w-11/12 lg:w-4/5 mx-auto object-cover"
      />
      <img
        src={img5}
        alt="img 5"
        className="md:h-[600px] w-fit md:w-11/12 lg:w-4/5 mx-auto object-cover"
      />
    </Carousel>
  
  );
}


export default Banner46