import React from "react";
import bg from "../assets/bg/nearby_bg4.jpg";

import img1 from "../assets/photos/nearby/img1.1.webp";
import img2 from "../assets/photos/nearby/img2.webp";
import img3 from "../assets/photos/nearby/img3.png";
import img4 from "../assets/photos/nearby/img4.webp";
import img5 from "../assets/photos/nearby/img5.webp";
import img6 from "../assets/photos/nearby/img6.webp";
import img7 from "../assets/photos/nearby/img7.webp";
import img8 from "../assets/photos/nearby/img8.webp";
import img9 from "../assets/photos/nearby/img9.webp";
import img10 from "../assets/photos/nearby/img10.webp";
import img11 from "../assets/photos/nearby/img11.webp";
import img12 from "../assets/photos/nearby/img12.webp";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import BannerP3 from "./BannerP3";
import BookNowBanner from "./BookNowBanner";

function NearBy() {
  return (
    <div>
      <Helmet>
        <title>Places To Visit In Mukteshwar | Nearby Sites</title>
        <meta
          name="description"
          content="Our Resort has many beautiful places around like- Bhalu Gaad Waterfall, Mukteshwar Mahadev Temple, Satkhol Ashram, Bhimtal, Almora, Mall Road Nainital"
        />
        {/* <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/places-to-visit-in-mukteshwar"
        /> */}
      </Helmet>
      <BannerP3 />
      <BookNowBanner />
      {/* <h1 className="text-3xl md:text-5xl text-center mt-10 py-5 md:py-10  font-french-canon">
        NEARBY SITES/
        <Link to="/">
          <span className=" text-lg md:text-xl bg-yellow-300 hover:text-red-600 px-2 hover:bg-white underline">HOME</span>
          </Link> 
      </h1> */}
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  place-content-center mx-auto gap-5 md:gap-14 p-3 md:py-10 bg-center bg-cover"
      >
        {/* ....(1.1).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img1}
            alt="Forest Trekking in mukteshwar"
          />

          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                Forest Trekking
              </h2>
              <p className="text-lg md:text-2xl font-times">0 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.2).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img2}
            alt="Bhalu Gaad Waterfall"
          />
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                Bhalu Gaad Waterfall
              </h2>
              <p className="text-lg md:text-2xl font-times">12 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.3).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img3}
            alt="Mahadev Temple mukteshwar"
          />
          <div>
            <div className="flex flex-col justify-center text-center items-center">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                Mahadev Temple
              </h2>
              <p className="text-lg md:text-2xl font-times">15 KM</p>
            </div>
          </div>
        </div>
        {/* ....(1.4).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img4}
            alt="Satkhol Ashram"
          />

          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                Satkhol Ashram
              </h2>
              <p className="text-lg md:text-2xl font-times">26 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.5).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img6}
            alt="Bhimtal"
          />
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">Bhimtal</h2>
              <p className="text-lg md:text-2xl font-times">31 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.6).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img5}
            alt="Paragliding in nainital"
          />
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                Paragliding Adventure
              </h2>
              <p className="text-lg md:text-2xl font-times">35 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.7).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img7}
            alt="Mall Road Nainital"
          />

          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                Mall Road Nainital
              </h2>
              <p className="text-lg md:text-2xl font-times">46 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.8).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img8}
            alt=" Almora "
          />
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">Almora</h2>
              <p className="text-lg md:text-2xl font-times">59 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.9).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img9}
            alt="Jageshwar Dham"
          />
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                Jageshwar Dham
              </h2>
              <p className="text-lg md:text-2xl font-times">65 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.10).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img10}
            alt="RaniKhet"
          />

          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h2 className=" text-2xl text-[#40392d] font-glacial">
                RaniKhet
              </h2>
              <p className="text-lg md:text-2xl font-times">80 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.11).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img11}
            alt="Binsar"
          />
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h3 className=" text-2xl text-[#40392d] font-glacial">Binsar</h3>
              <p className="text-lg md:text-2xl font-times">80 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.12).... */}
        <div className="w-fit md:w-80 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-110 duration-700 shadow-lg shadow-black border-yellow-600 bg-[#d2d2b4] md:hover:shadow-xl md:hover:shadow-slate-400 m-auto">
          <img
            className="rounded-tr-3xl rounded-bl-3xl w-screen md:w-80 h-64"
            src={img12}
            alt=" Kausani "
          />
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <h3 className=" text-2xl text-[#40392d] font-glacial">Kausani</h3>
              <p className="text-lg md:text-2xl font-times">108 KM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NearBy;
