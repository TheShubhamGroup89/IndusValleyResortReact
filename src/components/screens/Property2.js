import React from "react";
// import { motion } from "framer-motion";
import img_a from "../assets/photos/display _img/P_42.jpg";
import discount from '../assets/icons/disc2.gif'

import apartment09 from "../../components/cottageInsider/IVR_09_1BHK/apartment09.webp";

// import img_b from "../assets/photos/display _img/P_27.jpg";
// import img_d from "../assets/photos/display _img/P_46.jpg";
import img_e from "../assets/photos/display _img/p-69.webp";

function Property2() {
  return (
    <div>
      {/* <div className="bg-yellow-500 ">
        <h2 className="text-2xl md:text-3xl font-semibold font-times p-3  moving-text">
          20% Seasonal Discounted Rates.{" "}
          <span className="text-3xl md:text-4xl font-serif font-bold text-red-600 hover:bg-white p-2">
            Book Now!
          </span>
        </h2>
      </div> */}
      <section className="flex flex-col justify-center gap-5 p-3 text-[#40392d]">
        {/* <p className="text-3xl md:text-5xl w-fit mx-auto tracking-wider font-french-canon text-center pt-10">
          INVENTORIES
        </p>
        <h2 className="w-fit mx-auto text-2xl md:text-4xl tracking-widest font-french-canon text-center ">
          HOMESTAY IN MUKTESHWAR NAINITAL
        </h2> */}
        {/* <h1 className="sr-only">APARTMENT IN NAINITAL</h1> */}

        {/* <h2 className="text-2xl mt-5 md:text-4xl text-center text-[#40392d] font-french-canon">
         <span className="font-times font-semibold"> 1</span>  BHK APARTMENTS
        </h2> */}
      </section>

      {/* (Project Component-1) */}
      <div className="flex flex-col gap-0 ">
        <section className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  place-content-center gap-10 md:gap-16 p-5 md:py-10 mx-auto ">
          {/* ....(1.1).... */}
          <div
          // style={{
          //   transformStyle: "preserve-3d",
          //   transform: "rotateY(-30deg) rotateX(15deg)",
          // }}
          // className="rounded-[24px] bg-gradient-to-r from-green-100 to-neutral-500"
          >
            {/* <motion.div
              initial={{
                transform: "translateZ(8px) translateY(-2px)",
              }}
              animate={{
                transform: "translateZ(32px) translateY(-8px)",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200"
            > */}
            <div className="relative w-fit md:w-80 xl:w-96 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-95 duration-700 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200">
              <a
                href="/1-bhk-cottage-stay-in-mukteshwar"
                // target="_blank"
                // rel="noreferrer"
              >
                <img
                  className="relative rounded-tr-3xl rounded-bl-3xl md:h-64"
                  src={img_a}
                  alt="1 BHK Cottage stay in mukteshhwar"
                />
         <img className="w-20 absolute bottom-0 right-0 z-10" src={discount} alt="discount%" />

                <div>
                  <div className="mx-auto border-b-2 border-gray-600 my-2 p-3">
                    <h2 className=" text-xl md:text-2xl text-center text-green-800 font-times font-semibold">
                      IVR - 42
                    </h2>
                    <p className="text-2xl md:text-3xl text-center font-bold font-times">
                      1 BHK COTTAGE
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mx-auto p-3">
                    <p className="animate__zoomIn text-lg md:text-3xl text-center font-bold font-times">
                      ₹5,000/ <span className="font-extralight">Night</span>
                    </p>
                    <div className="flex gap-5 justify-center items-center">
                      {/* <a
                      href="/1-bhk-cottage-stay-in-mukteshwar"
                      // target="_blank"
                      // rel="noreferrer"
                    >
                      <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                        Explore
                      </button>
                    </a> */}
                      <a href="/booknow" target="_blank" rel="noreferrer">
                        <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                          BOOK NOW
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ....(1.2).... */}
          <div
          // style={{
          //   transformStyle: "preserve-3d",
          //   transform: "rotateY(-30deg) rotateX(15deg)",
          // }}
          // className="rounded-[24px] bg-gradient-to-r from-green-100 to-neutral-500"
          >
            {/* <motion.div
              initial={{
                transform: "translateZ(8px) translateY(-2px)",
              }}
              animate={{
                transform: "translateZ(32px) translateY(-8px)",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200"
            > */}
            <div className="relative w-fit md:w-80 xl:w-96 rounded-tr-3xl rounded-bl-3xl border-2 md:hover:scale-95 duration-700 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200">
              <a
                href="/1-bhk-apartment-homestay-near-nainital"
                // target="_blank"
                // rel="noreferrer"
              >
                <img
                  className="relative rounded-tr-3xl rounded-bl-3xl md:h-64"
                  src={apartment09}
                  alt="1 BHK Cottage stay in mukteshhwar"
                />
         <img className="w-20 absolute bottom-0 right-0 z-10" src={discount} alt="discount%" />

                <div>
                  <div className="mx-auto border-b-2 border-gray-600 my-2 p-3">
                    <h2 className=" text-xl md:text-2xl text-center text-green-800 font-times font-semibold">
                      IVR - 09
                    </h2>
                    <p className="text-2xl md:text-3xl text-center font-bold font-times">
                      1 BHK APARTMENT
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mx-auto p-3">
                    <p className="animate__zoomIn text-lg md:text-3xl text-center font-bold font-times">
                      ₹6,000/ <span className="font-extralight">Night</span>
                    </p>
                    <div className="flex gap-5 justify-center items-center">
                      {/* <a
                      href="/1-bhk-cottage-stay-in-mukteshwar"
                      // target="_blank"
                      // rel="noreferrer"
                    >
                      <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                        Explore
                      </button>
                    </a> */}
                      <a href="/booknow" target="_blank" rel="noreferrer">
                        <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                          BOOK NOW
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* ....(1.2).... */}
          <div
          // style={{
          //   transformStyle: "preserve-3d",
          //   transform: "rotateY(-30deg) rotateX(15deg)",
          // }}
          // className="rounded-[24px] bg-gradient-to-r from-green-100 to-neutral-500"
          >
            {/* <motion.div
              initial={{
                transform: "translateZ(8px) translateY(-2px)",
              }}
              animate={{
                transform: "translateZ(32px) translateY(-8px)",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200"
            > */}

            <div className="relative w-fit  md:w-80 xl:w-96 rounded-tr-3xl rounded-bl-3xl md:hover:scale-95 duration-700  border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200">
              <a
                href="/1-bhk-apartment-stay-in-mukteshwar"
                // target="_blank"
                // rel="noreferrer"
              >
                <img
                  className="relative rounded-tr-3xl rounded-bl-3xl md:h-64"
                  src={img_e}
                  alt="1 BHK Apartment stay in mukteshhwar"
                />
         <img className="w-20 absolute bottom-0 right-0 z-10" src={discount} alt="discount%" />


                <div>
                  <div className="mx-auto border-b-2 border-gray-600 my-2 p-3">
                    <h2 className=" text-xl md:text-2xl text-center text-green-800 font-times font-semibold">
                      IVR - 69
                    </h2>
                    <p className="text-2xl md:text-3xl font-bold text-center font-times">
                      1 BHK APARTMENT
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mx-auto p-3">
                    <p className="animate__zoomIn text-lg md:text-3xl text-center font-bold font-times">
                      ₹5,000/ <span className="font-extralight">Night</span>
                    </p>
                    <div className="flex gap-5 justify-center items-center">
                      {/* <a
                      href="/1-bhk-apartment-stay-in-mukteshwar"
                      // target="_blank"
                      // rel="noreferrer"
                    >
                      <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                        Explore
                      </button>
                    </a> */}
                      <a href="/booknow" target="_blank" rel="noreferrer">
                        <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                          BOOK NOW
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ....(1.3).... */}
          {/* <div className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-red-300 shadow-slate-200">
            <img
              className="rounded-t-xl md:h-64 md:w-96"
              src={img_b}
              alt="Card1"
            />

            <div>
              <div className="mx-auto border-b-2 border-green-300 my-2 p-3">
                <h2 className=" text-xl md:text-2xl text-green-800 font-times font-semibold">
                  IVR - 36
                </h2>
                <p className="text-2xl md:text-3xl font-bold font-times">
                  1 BHK APARTMENT
                </p>
              </div>

              <div className="flex flex-col gap-3 mx-auto p-3">
                <p className="animate__zoomIn text-sm md:text-3xl font-bold font-times">
                  ₹2,500/ <span className="font-extralight">Night</span>
                </p>
                <div className="flex gap-5 justify-between">
                  {" "}
                  <a
                    href="http://www.indusvalleymukteshwar.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                      Explore
                    </button>
                  </a>
                  <a
                    href="http://www.indusvalleymukteshwar.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* ....(1.4).... */}
          {/* <div className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-red-300 shadow-slate-200">
            <img className="rounded-t-xl md:h-64" src={img_d} alt="Card1" />

            <div>
              <div className="mx-auto border-b-2 border-green-300 my-2 p-3">
                <h2 className=" text-xl md:text-2xl text-green-800 font-times font-semibold">
                IVR - 46
                </h2>
                <p className="text-2xl md:text-3xl font-bold font-times">
                2BHK COTTAGE
                </p>
              </div>

              <div className="flex flex-col gap-3 mx-auto p-3">
                <p className="animate__zoomIn text-sm md:text-3xl font-bold font-times">
                ₹6,000/ <span className="font-extralight">Night</span>
                </p>
                <div className="flex gap-5 justify-between"> <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                    Explore
                  </button>
                </a>
                <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                    BOOK NOW
                  </button>
                </a></div>
               
              </div>
            </div>
          </div> */}

          {/* ....(1.5)....*/}
          {/* <div className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-red-300 shadow-slate-200">
            <img className="rounded-t-xl md:h-64" src={img_e} alt="Card1" />

            <div>
              <div className="mx-auto border-b-2 border-green-300 my-2 p-3">
                <h2 className=" text-xl md:text-2xl text-green-800 font-times font-semibold">
                IVR - 47
                </h2>
                <p className="text-2xl md:text-3xl font-bold font-times">
                2BHK COTTAGE
                </p>
              </div>

              <div className="flex flex-col gap-3 mx-auto p-3">
                <p className="animate__zoomIn text-sm md:text-3xl font-bold font-times">
                ₹6,000/ <span className="font-extralight">Night</span>
                </p>
                <div className="flex gap-5 justify-between"> <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                    Explore
                  </button>
                </a>
                <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                    BOOK NOW
                  </button>
                </a></div>
               
              </div>
            </div>
          </div> */}

          {/* ....(1.6).... */}
          {/* <div className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-red-300 shadow-slate-200">
            <img className="rounded-t-xl md:h-64" src={img_f} alt="Card1" />

            <div>
              <div className="mx-auto border-b-2 border-green-300 my-2 p-3">
                <h2 className=" text-3xl text-green-800 font-times font-semibold">
                IVR - 47
                </h2>
                <p className="text-xl md:text-2xl font-times">
                (2BHK COTTAGE)
                </p>
              </div>

              <div className="flex flex-col gap-3 mx-auto p-3">
                <p className="animate__zoomIn text-sm md:text-xl font-bold font-times">
                ₹6,000/ <span className="font-extralight">Night</span>
                </p>
                <div className="flex gap-5 justify-between"> <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="bg-green-700 border-green-900 text-white p-2 rounded-lg hover:font-semibold border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                    Explore
                  </button>
                </a>
                <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="bg-green-700 border-green-900 text-white p-2 rounded-lg hover:font-semibold border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                    Book Now
                  </button>
                </a></div>
               
              </div>
            </div>
          </div> */}

          {/* ....(1.7).... */}
          {/* <div className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-red-300 shadow-slate-200">
            <img className="rounded-t-xl md:h-64" src={img_g} alt="Card1" />

            <div>
              <div className="mx-auto border-b-2 border-green-300 my-2 p-3">
                <h2 className=" text-3xl text-green-800 font-times font-semibold">
                IVR - 47
                </h2>
                <p className="text-xl md:text-2xl font-times">
                (2BHK COTTAGE)
                </p>
              </div>

              <div className="flex flex-col gap-3 mx-auto p-3">
                <p className="animate__zoomIn text-sm md:text-xl font-bold font-times">
                ₹6,000/ <span className="font-extralight">Night</span>
                </p>
                <div className="flex gap-5 justify-between"> <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="bg-green-700 border-green-900 text-white p-2 rounded-lg hover:font-semibold border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                    Explore
                  </button>
                </a>
                <a href="http://www.indusvalleymukteshwar.com" target="_blank" rel="noreferrer">
                  <button className="bg-green-700 border-green-900 text-white p-2 rounded-lg hover:font-semibold border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                    Book Now
                  </button>
                </a></div>
                
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default Property2;
