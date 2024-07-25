import React from "react";
import Banner46 from "./Banner46";
import Gallery46 from "./Gallery46";
import bg from "../assets/bg/WebsiteBg3.avif";

function Ivr46() {
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
      <section className="bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
        <Banner46 />
        <h1 className="sr-only">2 BHK cottage homestay in Mukteshwar</h1>
        <p className="text-3xl md:text-4xl  font-french-canon p-10 md:pt-20 text-center">
          FACILITIES
        </p>
        <div className=" flex flex-col md:flex-row justify-center gap-3 md:gap-16 md:px-20">
          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-white text-lg font-times md:text-2xl">
            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> CAR PARKING
            </li>
            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span>PERSONAL GARDEN
            </li>
            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> ATTACHED
              WASHROOM
            </li>

            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> HOT WATER
            </li>

            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> HEATER
            </li>
          </ol>

          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-white text-lg font-times md:text-2xl">
            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> MICROWAVE
            </li>

            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> KETTLE
            </li>

            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> HIMALAYAN VIEW
            </li>

            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> INDUCTION
            </li>

            <li className="flex animate__zoomIn3 bg-black bg-opacity-35 p-2 rounded-xl gap-5 hover:bg-yellow-50 hover:text-black">
              <span className="text-yellow-400"> &#10146;</span> HOUSE KEEPING
            </li>
          </ol>
        </div>
      </section>

      <Gallery46 />

      <section className="flex justify-center gap-5 p-10">
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

export default Ivr46;
