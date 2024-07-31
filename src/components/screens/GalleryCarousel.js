import { Carousel, IconButton } from "@material-tailwind/react";
// import img1 from "../assets/photos/gallery/Gallery_IMG_1.webp";
// import img3 from "../assets/photos/gallery/Gallery_IMG_3.webp";
// import img4 from "../assets/photos/gallery/Gallery_IMG_4.webp";
// import img5 from "../assets/photos/gallery/Gallery_IMG_5.webp";
// import img6 from "../assets/photos/gallery/Gallery_IMG_6.webp";
// import img7 from "../assets/photos/gallery/Gallery_IMG_7.webp";
// import img8 from "../assets/photos/gallery/Gallery_IMG_8.webp";
// import img9 from "../assets/photos/gallery/Gallery_IMG_9.webp";
// import img10 from "../assets/photos/gallery/Gallery_IMG_10.webp";
// import img11 from "../assets/photos/gallery/Gallery_IMG_11.webp";
// import img12 from "../assets/photos/gallery/Gallery_IMG_12.webp";
// import img13 from "../assets/photos/gallery/Gallery_IMG_13.webp";
// import img14 from "../assets/photos/gallery/Gallery_IMG_14.webp";
// import img15 from "../assets/photos/gallery/Gallery_IMG_15.webp";
// import img16 from "../assets/photos/gallery/Gallery_IMG_16.webp";
// import img17 from "../assets/photos/gallery/Gallery_IMG_17.webp";
// import img18 from "../assets/photos/gallery/Gallery_IMG_18.webp";
// import img19 from "../assets/photos/gallery/Gallery_IMG_19.webp";
// import img20 from "../assets/photos/gallery/Gallery_IMG_20.webp";
// import img21 from "../assets/photos/gallery/Gallery_IMG_21.webp";

function GalleryCarousel() {
  const images = [
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568208/IndusValleyResort/Gallery/Gallery_IMG_1_zatm5e.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568211/IndusValleyResort/Gallery/Gallery_IMG_3_lu7x1u.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568212/IndusValleyResort/Gallery/Gallery_IMG_4_dbpxya.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568213/IndusValleyResort/Gallery/Gallery_IMG_5_fbd6sy.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568214/IndusValleyResort/Gallery/Gallery_IMG_6_htc7e5.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568215/IndusValleyResort/Gallery/Gallery_IMG_7_buzxwp.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568216/IndusValleyResort/Gallery/Gallery_IMG_8_ic96vs.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568217/IndusValleyResort/Gallery/Gallery_IMG_9_eebqhr.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568218/IndusValleyResort/Gallery/Gallery_IMG_10_a0txnc.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568219/IndusValleyResort/Gallery/Gallery_IMG_11_d2avnx.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568220/IndusValleyResort/Gallery/Gallery_IMG_12_gvt4xd.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568220/IndusValleyResort/Gallery/Gallery_IMG_13_q62alz.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568220/IndusValleyResort/Gallery/Gallery_IMG_14_pyqbjg.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568220/IndusValleyResort/Gallery/Gallery_IMG_15_jpseb2.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568220/IndusValleyResort/Gallery/Gallery_IMG_16_ywwqaw.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568220/IndusValleyResort/Gallery/Gallery_IMG_17_ubh837.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568221/IndusValleyResort/Gallery/Gallery_IMG_18_r2ah0a.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568224/IndusValleyResort/Gallery/Gallery_IMG_19_kap2yd.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568225/IndusValleyResort/Gallery/Gallery_IMG_20_dv04wr.webp",
    "https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717568207/IndusValleyResort/Gallery/Gallery_IMG_21_rusnk3.webp",
    // Add other image paths here...
  ];

  return (
    <div className="flex flex-col justify-center gap-5 p-3">
      <h3 className="text-3xl md:text-5xl text-center pt-5 md:pt-10  font-merriweather">
        GALLERY
      </h3>
      <h2 className="text-xl md:text-3xl text-center pb-5 tracking-wider font-merriweather">
        RESORT IN MUKTESHWAR
      </h2>

      <Carousel
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
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img ${index + 1}`}
            className="md:h-[600px] w-fit mx-auto object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default GalleryCarousel;
