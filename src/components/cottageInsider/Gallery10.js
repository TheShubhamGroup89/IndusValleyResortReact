import { Carousel, IconButton } from "@material-tailwind/react";
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
import img16 from "../cottageInsider/IVR_10_2BKH/iv16.jpg";
import img17 from "../cottageInsider/IVR_10_2BKH/iv17.jpg";
import img18 from "../cottageInsider/IVR_10_2BKH/iv18.jpg";
import img19 from "../cottageInsider/IVR_10_2BKH/iv19.jpg";
import img20 from "../cottageInsider/IVR_10_2BKH/iv20.jpg";
import img21 from "../cottageInsider/IVR_10_2BKH/iv21.jpg";


  function Gallery10() {


    const theme = {
      carousel: {
        defaultProps: {
          prevArrow: ({ loop, handlePrev, firstIndex }) => {
            return (
              <button
                onClick={handlePrev}
                disabled={!loop && firstIndex}
                className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
              >
                
              </button>
            );
          },
          nextArrow: ({ loop, handleNext, lastIndex }) => (
            <button
              onClick={handleNext}
              disabled={!loop && lastIndex}
              className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
            >
           
            </button>
          ),
          navigation: ({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          ),
          autoplay: true,
          autoplayDelay: 5000,
          transition: {
            type: "tween",
            duration: 0.5,
          },
          loop: true,
          className: "",
        },
        styles: {
          base: {
            carousel: {
              position: "relative",
              width: "w-full",
              height: "h-full",
              overflowX: "overflow-x-hidden",
              display: "flex",
            },
     
            slide: {
              width: "w-full",
              height: "h-full",
              display: "inline-block",
              flex: "flex-none",
            },
          },
        },
      },
    };

  return (
    <div className="flex flex-col justify-center gap-5 p-3">
           <h2 className="text-3xl md:text-5xl text-center py-5 md:py-10  font-french-canon">
        GALLERY
        </h2>

          <Carousel
    className="rounded-xl items-center"
    autoplay={true}
    autoplayDelay={3000}
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
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
      <img
        src={img2}
        alt="img 2"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
   
      <img
        src={img3}
        alt="img 3"
        className="md:h-[450px] xl:h-[500px] w-fit  mx-auto object-cover"
      />
      <img
        src={img4}
        alt="img 4"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
      <img
        src={img5}
        alt="img 5"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
      <img
        src={img6}
        alt="img 6"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
      <img
        src={img7}
        alt="img 7"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
      <img
        src={img8}
        alt="img 8"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
      <img
        src={img9}
        alt="img 9"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img10}
        alt="img 10"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img11}
        alt="img 11"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img12}
        alt="img 12"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img13}
        alt="img 13"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img14}
        alt="img 14"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img15}
        alt="img 15"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img16}
        alt="img 16"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img17}
        alt="img 17"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img18}
        alt="img 18"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img19}
        alt="img 19"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img20}
        alt="img 20"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
       <img
        src={img21}
        alt="img 21"
        className="md:h-[450px] xl:h-[500px] w-fit mx-auto object-cover"
      />
    </Carousel>

    </div>
  
  );
}


export default Gallery10