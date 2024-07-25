import React from "react";
import Gallery43 from "./Gallery43";
import Banner43 from "./Banner43";
import bg from "../assets/bg/WebsiteBg3.avif";
import { Helmet } from "react-helmet";

function Ivr43() {
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
          4 BHK Cottage Stay In Mukteshwar | Top Hotel In Mukteshwar
        </title>
        <meta
          name="description"
          content="Unwind in style at the top hotel in Mukteshwar, featuring our exclusive 4 BHK cottage stay"
        />
        <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/4-bhk-cottage-for-stay-in-mukteshwar-nainital"
        />
      </Helmet>
      <section className="bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
        <Banner43 />
        {/* <h1 className="sr-only">4 BHK cottage in Nainital</h1> */}
        <h1 className="text-2xl md:pt-20 pt-10 md:text-4xl text-center font-french-canon">
          <span className="font-sans font-semibold">4 </span>BHK COTTAGE FOR
          STAY
        </h1>
        <h5 className="text-3xl md:text-4xl  font-french-canon p-10 text-center">
          ROOMS DETAILS
        </h5>
        <p className="text-lg md:text-2xl md:mx-20 px-5 font-times text-justify">
          The 4 BHK is known as Mountain View Cottage. This duplex family room
          features 4 bedrooms. 2 bedrooms are on the ground floor and offer a
          separate bathroom with a shower, and living area with sofa cum bed and
          dining area, a wardrobe, an electric kettle and 2 bedrooms are on the
          upper floor with dining area and a huge balcony with Himalayan
          mountain view attached with both rooms, 2 separate gardens, and free
          personal parking. Experience comfort and elegance in this stylish 4BHK
          Villa, nestled in a serene location, the villa boasts modern
          amenities, spacious rooms, and a tranquil ambience. Ideal for a
          relaxing getaway, this well-appointed accommodation ensures a
          delightful stay for both leisure and business travellers. You can
          enjoy your night with a bonfire and live barbeque in the garden. Book
          now for a memorable retreat!
        </p>

        <p className="text-3xl md:text-4xl  font-french-canon p-10 md:pt-20 text-center">
          FACILITIES
        </p>

        <div className=" flex flex-col md:flex-row justify-center gap-3 md:gap-16 md:px-20">
          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-lg font-times md:text-2xl">
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> CAR PARKING
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span>PERSONAL GARDEN
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> ATTACHED WASHROOM
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> HOT WATER
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> HEATER
            </li>
          </ol>

          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-lg font-times md:text-2xl">
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> MICROWAVE
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> KETTLE
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> HIMALAYAN VIEW
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> INDUCTION
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> HOUSE KEEPING
            </li>
          </ol>
        </div>
      </section>

      <section className="py-5 flex flex-col justify-center items-center mt-0 pb-5 bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
        <h3 className="text-2xl md:text-4xl  font-french-canon my-10 md:mb-16 text-center">
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
        </div>

        <Gallery43 />
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

export default Ivr43;
