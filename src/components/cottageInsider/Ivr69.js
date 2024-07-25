import React from "react";
import Banner69 from "./Banner69";
import Gallery69 from "./Gallery69";
import bg from "../assets/bg/WebsiteBg3.avif";
import { Helmet } from "react-helmet";

function Ivr69() {
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
          1 BHK Apartment Stay In Mukteshwar | Unforgettable Journey
        </title>
        <meta
          name="description"
          content="Elevate your Mukteshwar experience with our 1 BHK apartment stay, tailored for comfort."
        />
        <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/1-bhk-apartment-stay-in-mukteshwar"
        />
      </Helmet>

      <section className="bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
        <Banner69 />
        {/* <h1 className="sr-only">1 BHK Apartment homestay In Mukteshwar</h1> */}
        <h1 className="text-2xl md:pt-20 pt-10 md:text-4xl text-center   font-french-canon">
          <span className="font-sans font-semibold">1 </span>BHK APARTMENT FOR
          STAY
        </h1>
        <p className="text-3xl md:text-4xl  font-french-canon p-10  text-center">
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
              <span> &#10146;</span> ROOM HEATER WASHROOM
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> ELECTRIC KETTLE
            </li>
          </ol>

          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-lg font-times md:text-2xl">
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> FREE TOIETRIES
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> SHOWER
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> COMMON BATHROOM
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> FREE WIFI
            </li>
          </ol>
        </div>
      </section>

      <section className="py-5 flex flex-col justify-center items-center mt-0 pb-5 bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
        {/* <h3 className="text-2xl md:text-4xl  font-french-canon my-10 md:mb-16 text-center">
          YOUTUBE LINK
        </h3>

        <div class="video-container">
          <iframe
            className="w-screen md:w-[800px] h-96"
            src="https://www.youtube.com/embed/YDk02xWiVKU" // Use the embed URL instead
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div> */}

        <Gallery69 />
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

export default Ivr69;
