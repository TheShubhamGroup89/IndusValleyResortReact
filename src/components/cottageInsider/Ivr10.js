import React from "react";
import Banner43 from "./Banner43";
import Gallery43 from "./Gallery43";

function Ivr10() {
  return (
    <div className="bg-slate-200">
      <Banner43 />
      <section>
      <h1 className="sr-only">
      2 BHK cottage homestay in Uttarakhand
    </h1>
        <p className="text-3xl md:text-4xl  font-french-canon p-10 md:pt-20 text-center">
        FACILITIES
        </p>

        <div className=" flex flex-col md:flex-row justify-center gap-3 md:gap-16 md:px-20">
          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-lg font-times md:text-2xl">
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> CAR PARKING
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span>PERSONAL GARDEN
            </li>
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> ATTACHED
              WASHROOM
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> HOT WATER
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> HEATER
            </li>
          </ol>

          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3  xl:w-1/3 text-lg font-times md:text-2xl">
           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> MICROWAVE
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> KETTLE
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> HIMALAYAN VIEW
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> INDUCTION
            </li>

           <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span className="text-yellow-400"> &#10146;</span> HOUSE KEEPING
            </li>
          </ol>
        </div>
      </section>

      <Gallery43 />

      <section className="flex justify-center gap-5 p-10">
        <a
          href="/" // Replace "/ready-to-move" with your actual route
          className="bg-[#3E6527] border-2 w-fit font-semibold font-serif px-4 py-2.5 rounded-lg hover:bg-black text-white hover:font-bold focus:outline-none focus:bg-blue-600"
        >
          Go Back
        </a>

        <a href="/booknow" target="_blank" rel="noreferrer">
          <button className="animate__zoomIn3 bg-[#F1B516] border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1.5 md:py-1 md:text-2xl hover:text-green-900 hover:bg-white">
            BOOK NOW
          </button>
        </a>
      </section>
    </div>
  );
}

export default Ivr10;
