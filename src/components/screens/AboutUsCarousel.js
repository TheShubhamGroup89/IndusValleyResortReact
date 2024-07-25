import { Carousel, IconButton } from "@material-tailwind/react";
import img1 from "../assets/photos/about_carousel_pic/resort-1.webp";
import img2 from "../assets/photos/about_carousel_pic/resort-2.webp";
import img3 from "../assets/photos/about_carousel_pic/resort-3.webp";
import img4 from "../assets/photos/about_carousel_pic/resort-4.webp";
import img5 from "../assets/photos/about_carousel_pic/resort-5.webp";
import img6 from "../assets/photos/about_carousel_pic/resort-6.webp";
import img7 from "../assets/photos/about_carousel_pic/resort-7.webp";
import img8 from "../assets/photos/about_carousel_pic/resort-8.webp";
import img9 from "../assets/photos/about_carousel_pic/resort-9.webp";
import img10 from "../assets/photos/about_carousel_pic/resort-10.webp";
import img11 from "../assets/photos/about_carousel_pic/resort-11.webp";
import img12 from "../assets/photos/about_carousel_pic/resort-12.webp";
import img13 from "../assets/photos/about_carousel_pic/resort-13.webp";
import img14 from "../assets/photos/about_carousel_pic/resort-14.webp";
import img15 from "../assets/photos/about_carousel_pic/resort-15.webp";
import img16 from "../assets/photos/about_carousel_pic/resort-16.webp";
import img17 from "../assets/photos/about_carousel_pic/resort-17.webp";

function AboutUsCarousel() {
  // const theme = {
  //   carousel: {
  //     defaultProps: {
  //       prevArrow: ({ loop, handlePrev, firstIndex }) => {
  //         return (
  //           <button
  //             onClick={handlePrev}
  //             disabled={!loop && firstIndex}
  //             className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
  //           ></button>
  //         );
  //       },
  //       nextArrow: ({ loop, handleNext, lastIndex }) => (
  //         <button
  //           onClick={handleNext}
  //           disabled={!loop && lastIndex}
  //           className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
  //         ></button>
  //       ),
  //       navigation: ({ setActiveIndex, activeIndex, length }) => (
  //         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
  //           {new Array(length).fill("").map((_, i) => (
  //             <span
  //               key={i}
  //               className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
  //                 activeIndex === i ? "bg-white" : "bg-white/50"
  //               }`}
  //               onClick={() => setActiveIndex(i)}
  //             />
  //           ))}
  //         </div>
  //       ),
  //       autoplay: true,
  //       autoplayDelay: 5000,
  //       transition: {
  //         type: "tween",
  //         duration: 0.5,
  //       },
  //       loop: true,
  //       className: "",
  //     },
  //     styles: {
  //       base: {
  //         carousel: {
  //           position: "relative",
  //           width: "w-full",
  //           height: "h-full",
  //           overflowX: "overflow-x-hidden",
  //           display: "flex",
  //         },

  //         slide: {
  //           width: "w-full",
  //           height: "h-full",
  //           display: "inline-block",
  //           flex: "flex-none",
  //         },
  //       },
  //     },
  //   },
  // };

  return (
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
            className="h-6 w-6 text-white "
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
            className="h-6 w-6 text-white "
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
      <img src={img1} alt="img 1" className=" w-full object-cover" />
      <img src={img2} alt="img 2" className=" w-full object-cover" />
      <img src={img3} alt="img 3" className=" w-full object-cover" />
      <img src={img4} alt="img 4" className=" w-full object-cover" />
      <img src={img5} alt="img 5" className=" w-full object-cover" />
      <img src={img6} alt="img 6" className=" w-full object-cover" />
      <img src={img7} alt="img 7" className=" w-full object-cover" />
      <img src={img8} alt="img 8" className=" w-full object-cover" />
      <img src={img9} alt="img 9" className=" w-full object-cover" />
      <img src={img10} alt="img 10" className=" w-full object-cover" />
      <img src={img11} alt="img 11" className=" w-full object-cover" />
      <img src={img12} alt="img 12" className=" w-full object-cover" />
      <img src={img13} alt="img 13" className=" w-full object-cover" />
      <img src={img14} alt="img 14" className=" w-full object-cover" />
      <img src={img15} alt="img 15" className=" w-full object-cover" />
      <img src={img16} alt="img 16" className=" w-full object-cover" />
      <img src={img17} alt="img 17" className=" w-full object-cover" />
    </Carousel>
  );
}

export default AboutUsCarousel;
