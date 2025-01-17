import React from "react";
import Banner47 from "./Banner47";
import Gallery47 from "./Gallery47";
import bg from "../assets/bg/WebsiteBg3.avif";
import { Helmet } from "react-helmet";

function Ivr47() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "center top",
      }}
    >
      <Helmet>
        <title>
          2 BHK Cottage Stay In Mukteshwar | Best Stay Near Nainital
        </title>
        <meta
          name="description"
          content="Explore Mukteshwar's beauty with our spacious 2 BHK cottage stay, perfect for relaxation."
        />
        <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/2-bhk-cottage-for-stay-in-mukteshwar-nainital"
        />
      </Helmet>
      <section className="bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
        <Banner47 />
        {/* <h1 className="sr-only">2 BHK cottage homestay in Nainital</h1> */}
        <h1 className="text-2xl md:pt-20 pt-10 md:text-4xl text-center font-french-canon">
          <span className="font-sans font-semibold">2 </span>BHK COTTAGE FOR
          STAY
        </h1>
        <h5 className="text-3xl md:text-4xl  font-french-canon p-10 text-center">
          ROOMS DETAILS
        </h5>

        <p className="text-lg md:text-2xl md:mx-20 px-5 font-times text-justify">
          Escape to our 2BHK Nanda Devi View Villa - a perfect blend of modern
          comfort and breathtaking nature. Wake up to panoramic views, our 2 BHK
          family room features 2 bedrooms and a separate bathroom with a shower,
          and living area and a dining area with a kitchenette, a wardrobe, an
          electric kettle as well as a garden with mountain views. relax in
          spacious living areas, and indulge in the serenity of your private
          haven, you can enjoy your night with a bonfire and live barbeque in
          the garden. Book now for an unforgettable hillside retreat!
        </p>

        <p className="text-3xl md:text-4xl  font-french-canon p-10 md:pt-20 text-center">
          FACILITIES
        </p>

        <div className=" flex flex-col md:flex-row justify-center gap-3 md:gap-16 md:px-20">
          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-lg font-times md:text-2xl">
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> ROOM DINING
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span>FREE PARKING
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> ROOM HEATER
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> ELECTRIC KETTLE
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> FREE TOIETRIES
            </li>
          </ol>

          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-white text-lg font-times md:text-2xl">
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> FREE WIFI
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> SHOWER
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> T.V.
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> INDOOR BONFIRE
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> CHAIR, SOFA
            </li>
          </ol>
        </div>
        <Gallery47 />
      </section>

      <section className="flex justify-center gap-5 p-10 bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
        <a
          href="/" // Replace "/ready-to-move" with your actual route
          className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white"
        >
          Go Back
        </a>

        <a href="/booknow" target="_blank" rel="noreferrer">
          <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 py-1 text-sm md:text-lg hover:text-white ">
            BOOK NOW
          </button>
        </a>
      </section>
    </div>
  );
}

export default Ivr47;
