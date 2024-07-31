import React from "react";
import img1 from "../cottageInsider/IVR_69_1BKH/Banner_1.webp";
import apartment09 from "../../components/cottageInsider/IVR_09_1BHK/apartment09.webp";
import img_a from "../assets/photos/display _img/P_42.jpg";
import img_b from "../assets/photos/display _img/p-69.webp";
import img_c from "../assets/photos/display _img/P_43.jpg";
import img_d from "../assets/photos/display _img/P_47.jpg";
import img_e from '../assets/photos/display _img/P_10.jpg';
import discount from '../assets/icons/disc2.gif'


import useIsDesktop from "./UseIsDesktop"; // Adjust the path based on your directory structure
import NoticeBanner from "./NoticeBanner";

const HomeStayCard = ({ image, label, title, price, exploreLink, bookLink, altText }) => (
  <div className="relative w-80 lg:w-72 mx-auto md:h-[400px] rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-95 duration-700 shadow-lg shadow-black border-yellow-600 md:m-3 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400">
    <a href={exploreLink}>
      <img className="relative md:h-56 rounded-tr-3xl rounded-bl-3xl" src={image} alt={altText} />
      <img className="w-20 absolute bottom-0 right-0 z-10" src={discount} alt="discount%" />

      <div className="flex flex-col items-center justify-center">
        <p className="text-lg md:text-xl text-center font-merriweather font-semibold">{label}</p>
        <div className="mx-auto border-b-2 border-gray-600 p-1">
          <p className="text-lg md:text-2xl text-center font-merriweather">{title}</p>
        </div>
        <div className="flex flex-col gap-3 mx-auto p-3">
          <p className="animate__zoomIn text-lg md:text-2xl text-center font-bold font-merriweather">
            ₹{price}/ <span className="font-extralight">Night</span>
          </p>
          <div className="flex gap-5 justify-between">
            <a href={bookLink} target="_blank" rel="noreferrer">
              <button className="animate__zoomIn3 bg-gradient-to-r font-merriweather from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 py-1 text-sm md:text-lg hover:text-white">
                BOOK NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </a>
  </div>
);

const HomeStay = () => {
  const isDesktop = useIsDesktop();

  return (
    <div>
       <NoticeBanner/>
      <section className="flex flex-col justify-center p-3">
       
        <h3 className="text-2xl md:text-4xl w-fit mx-auto rounded-2xl text-[#d2d2b4] bg-black bg-opacity-20 tracking-widest font-merriweather text-center p-5">
          Pick Your Homestay In Mukteshwar Nainital
        </h3>
        <h3 className="w-fit mx-auto text-base md:text-lg xl:text-xl rounded-2xl text-[#d2d2b4] bg-black bg-opacity-20 tracking-widest font-french-canon text-center ">
          (DISCOUNT APPLICABLE ON ROOM TARIFF ONLY)
        </h3>
        
      </section>
      <div className="md:py-10 md:mx-14">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-content-center">
          <HomeStayCard
            image={img1}
            label="IVH - F1"
            title="STUDIO ROOM"
            price="4,000"
            exploreLink="/studio-apartment-for-stay-in-mukteshwar-nainital"
            bookLink="/contact-indus-valley-resort"
            altText="1 BHK Studio stay in mukteshhwar"
          />
          <HomeStayCard
            image={img1}
            label="IVH - F2"
            title="STUDIO ROOM"
            price="4,000"
            exploreLink="/studio-apartment-for-stay-in-mukteshwar-nainital"
            bookLink="/contact-indus-valley-resort"
            altText="1 BHK Studio stay in mukteshhwar"
          />
          <HomeStayCard
            image={img_a}
            label="IVH - 42"
            title="1 BHK COTTAGE"
            price="5,000"
            exploreLink="/1-bhk-cottage-stay-in-mukteshwar"
            bookLink="/contact-indus-valley-resort"
            altText="1 BHK Cottage stay in mukteshhwar"
          />
          <HomeStayCard
            image={apartment09}
            label="IVH - 09"
            title="1 BHK APARTMENT"
            price="6,000"
            exploreLink="/1-bhk-apartment-homestay-near-nainital"
            bookLink="/contact-indus-valley-resort"
            altText="1 BHK Apartment 09 stay in mukteshhwar"
          />
          <HomeStayCard
            image={img_b}
            label="IVH - 69"
            title="1 BHK APARTMENT"
            price="5,000"
            exploreLink="/1-bhk-apartment-stay-in-mukteshwar"
            bookLink="/contact-indus-valley-resort"
            altText="1 BHK Apartment stay in mukteshhwar"
          />
            <HomeStayCard
            image={img_e}
            label="IVH - 10"
            title="2 BHK COTTAGE"
            price="10,000"
            exploreLink="/2-bhk-stay-in-mukteshwar"
            bookLink="/contact-indus-valley-resort"
            altText="2 BHK Stay in Mukteshwar"
          />
          <HomeStayCard
            image={img_d}
            label="IVH - 47"
            title="2 BHK COTTAGE"
            price="10,000"
            exploreLink="/2-bhk-cottage-for-stay-in-mukteshwar-nainital"
            bookLink="/contact-indus-valley-resort"
            altText="2 BHK Cottage homestay near nainital"
          />
          <HomeStayCard
            image={img_c}
            label="IVH - 43"
            title="4 BHK COTTAGE"
            price="20,000"
            exploreLink="/4-bhk-cottage-for-stay-in-mukteshwar-nainital"
            bookLink="/contact-indus-valley-resort"
            altText="4 BHK Cottage homestay near nainital"
          />
        </section>
      </div>
    </div>
  );
};

export default HomeStay;
