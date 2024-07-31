import React from "react";
import Banner42 from "./Banner42";
import Gallery42 from "./Gallery42";
import bg from "../assets/bg/WebsiteBg3.avif";
import { Helmet } from "react-helmet";

function Ivr42() {
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
          1 BHK Cottage Stay In Mukteshwar | Best Resort Near Nainital
        </title>
        <meta
          name="description"
          content="Experience the best of both worlds: Nainital proximity and cozy 1 BHK cottages in Mukteshwar"
        />
        <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/1-bhk-cottage-stay-in-mukteshwar"
        />
      </Helmet>

      <section className="bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
      <h3 className=" text-3xl md:text-4xl  font-merriweather md:py-10 text-center p-3">
        1 BHK COTTAGE FOR
        STAY IN MUKTESHWAR
        <br />
        Plot No - 42
        <br />
      </h3>
        <Banner42 />
        {/* <h1 className="sr-only">1 BHK Apartment homestay in Nainital</h1> */}
        <h5 className="text-3xl md:text-4xl  font-french-canon p-10  text-center">
          ROOMS DETAILS
        </h5>
        <p className="text-lg md:text-2xl md:mx-20 px-5 font-times text-justify">
          Charm meets the mountains in our 1 BHK Nanda Devi View Cottage Snuggle
          up with nature’s beauty, and wake up to mountain magic. The 1 BHK room
          features 1 bedroom and 1 bathroom with a shower and free toiletries.
          The 1 BHK room offers a living area with a common bathroom and a
          dining area with a kitchenette, a wardrobe, and an electric kettle as
          well as a garden with mountain views. You can enjoy your night with a
          bonfire and live barbeque in the garden. Your cosy escape awaits -
          book now for a view that steals hearts!
        </p>

        <p className="text-3xl md:text-4xl  font-french-canon p-10 md:pt-20 text-center">
          FACILITIES
        </p>

        <div className=" flex flex-col md:flex-row justify-center gap-3 md:gap-16 md:px-20">
          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3 xl:w-1/3 text-lg font-times md:text-2xl">
            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> Room Dining
            </li>
            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span>Free Parking
            </li>
            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> Room Heater
            </li>

            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> Electric Kettle
            </li>
          </ol>

          <ol className="flex flex-col  gap-3 px-5 md:py-5 w-full md:w-2/3 xl:w-1/3 text-white text-lg font-times md:text-2xl">
            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> Free Toiletries
            </li>

            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> Shower
            </li>

            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> Common Bathroom
            </li>

            <li className="flex animate__zoomIn3  p-2 gap-5 text-[#394422]  md:hover:text-yellow-50 ">
              <span> &#10146;</span> Center Desk
            </li>
          </ol>
        </div>
        <Gallery42 />
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

export default Ivr42;
