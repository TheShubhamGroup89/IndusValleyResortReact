import React from "react";
// import { motion } from "framer-motion";
import img_a from "../assets/photos/display _img/P_43.jpg";
// import img_b from "../assets/photos/display _img/P_27.jpg";
import img_c from "../assets/photos/display _img/P_10.jpg";
// import img_d from "../assets/photos/display _img/P_46.jpg";
import img_e from "../assets/photos/display _img/P_47.jpg";
// import img_d from "../assets/photos/display _img/P_42.jpg";
// import img_e from "../assets/photos/display _img/P_38.jpg";
import discount from '../assets/icons/disc2.gif'

function Property1() {
  return (
    <div>
      <section className="flex flex-col justify-center gap-5 p-3">
        
        <h3 className="text-2xl mt-5 md:text-4xl text-center text-[#40392d]  font-french-canon">
          INDEPENDENT COTTAGES
        </h3>
       
      </section>

      {/* (Project Component-1) */}
      <div className="flex flex-col gap-0">
        <section className="grid md:grid-cols-2 xl:grid-cols-3 mx-auto m-3 gap-5 md:gap-0">
            {/* ....(1.3).... */}
            <div>
       
       <div className="relative w-fit md:w-80 xl:w-96 rounded-tr-3xl rounded-bl-3xl border-2 md:scale-75 duration-700 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200">
        
       <a
                 href="/2-bhk-stay-in-mukteshwar"
                 // target="_blank"
                 // rel="noreferrer"
               >
<img
           className="relative rounded-tr-3xl rounded-bl-3xl md:h-64 md:w-96"
           src={img_c}
           alt="2 BHK Cottage homestay near nainital"
         />
    <img className="w-20 absolute bottom-0 right-0 z-10" src={discount} alt="discount%" />


         <div>
           <div className="mx-auto border-b-2 border-gray-600 my-2 p-3">
             <h2 className=" text-xl md:text-2xl text-center text-green-800 font-merriweather font-semibold">
             IVH - 10
           </h2>
             <p className="text-2xl md:text-3xl text-center font-bold font-merriweather">
               2 BHK COTTAGE
             </p>
           </div>

           <div className="flex flex-col gap-3 mx-auto p-3">
             <p className="animate__zoomIn text-lg md:text-3xl text-center font-bold font-merriweather">
               ₹10,000/ <span className="font-extralight">Night</span>
             </p>
             <div className="flex gap-5 justify-center items-center">
               {/* <a
                 href="/2-bhk-cottage-for-stay-in-mukteshwar-nainital"
                 // target="_blank"
                 // rel="noreferrer"
               >
                 <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                   Explore
                 </button>
               </a> */}
               <a href="/contact-indus-valley-resort" target="_blank" rel="noreferrer">
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
          {/* ....(1.1).... */}
          {/* <div className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-[#E4F7E8] shadow-slate-200">
            <img
              className="rounded-t-xl md:h-64 md:w-96"
              src={img_c}
              alt="Card1"
            />

            <div>
              <div className="mx-auto border-b-2 border-green-300 my-2 p-3">
                <h2 className=" text-xl md:text-2xl text-[#40392d] font-merriweather font-semibold">
                  IVH - 10
                </h2>
                <p className="text-2xl md:text-3xl font-bold font-merriweather">
                  2 BHK COTTAGE
                </p>
              </div>

              <div className="flex flex-col gap-3 mx-auto p-3">
                <p className="animate__zoomIn text-lg md:text-3xl font-bold font-merriweather">
                  ₹6,000/ <span className="font-extralight">Night</span>
                </p>
                <div className="flex gap-5 justify-between">
                  <a
                    href="/IVH10"
                    // target="_blank"
                    // rel="noreferrer"
                  >
                    <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                      Explore
                    </button>
                  </a>
                  <a href="/contact-indus-valley-resort" target="_blank" rel="noreferrer">
                    <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* ....(1.2).... */}
          {/* <div className="w-fit md:w-96 rounded-xl border-2 shadow-lg md:m-3 bg-[#E4F7E8] shadow-slate-200">
            <img
              className="rounded-t-xl md:h-64 md:w-96"
              src={img_d}
              alt="Card1"
            />

            <div>
              <div className="mx-auto border-b-2 border-green-300 my-2 p-3">
                <h2 className=" text-xl md:text-2xl text-green-800 font-merriweather font-semibold">
                  IVH - 46
                </h2>
                <p className="text-2xl md:text-3xl font-bold font-merriweather">
                  2 BHK COTTAGE
                </p>
              </div>

              <div className="flex flex-col gap-3 mx-auto p-3">
                <p className="animate__zoomIn text-lg md:text-3xl font-bold font-merriweather">
                  ₹6,000/ <span className="font-extralight">Night</span>
                </p>
                <div className="flex gap-5 justify-between">
                  {" "}
                  <a
                    href="/IVH46"
                    // target="_blank"
                    // rel="noreferrer"
                  >
                    <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                      Explore
                    </button>
                  </a>
                  <a href="/contact-indus-valley-resort" target="_blank" rel="noreferrer">
                    <button className="animate__zoomIn3 bg-gradient-to-r from-yellow-300 to-yellow-600 border-green-900 text-black p-2 rounded-lg font-bold border-2 text-lg py-1 md:text-2xl hover:text-white ">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* ....(1.3).... */}
          <div>
       
            <div className="relative w-fit md:w-80 xl:w-96 rounded-tr-3xl rounded-bl-3xl border-2 md:scale-75 duration-700 shadow-lg md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200">
             
            <a
                      href="/2-bhk-cottage-for-stay-in-mukteshwar-nainital"
                      // target="_blank"
                      // rel="noreferrer"
                    >
 <img
                className="relative rounded-tr-3xl rounded-bl-3xl md:h-64 md:w-96"
                src={img_e}
                alt="2 BHK Cottage homestay near nainital"
              />
         <img className="w-20 absolute bottom-0 right-0 z-10" src={discount} alt="discount%" />


              <div>
                <div className="mx-auto border-b-2 border-gray-600 my-2 p-3">
                  <h2 className=" text-xl md:text-2xl text-center text-green-800 font-merriweather font-semibold">
                  IVH - 47
                </h2>
                  <p className="text-2xl md:text-3xl text-center font-bold font-merriweather">
                    2 BHK COTTAGE
                  </p>
                </div>

                <div className="flex flex-col gap-3 mx-auto p-3">
                  <p className="animate__zoomIn text-lg md:text-3xl text-center font-bold font-merriweather">
                    ₹10,000/ <span className="font-extralight">Night</span>
                  </p>
                  <div className="flex gap-5 justify-center items-center">
                    {/* <a
                      href="/2-bhk-cottage-for-stay-in-mukteshwar-nainital"
                      // target="_blank"
                      // rel="noreferrer"
                    >
                      <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                        Explore
                      </button>
                    </a> */}
                    <a href="/contact-indus-valley-resort" target="_blank" rel="noreferrer">
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

          {/* ....(1.4).... */}
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

            <div className="relative w-fit md:w-80 xl:w-96 rounded-tr-3xl rounded-bl-3xl border-2 shadow-lg md:scale-75 duration-700 md:m-3 bg-gradient-to-r from-green-200 to-neutral-400 shadow-slate-200">
              
            <a
                      href="/4-bhk-cottage-for-stay-in-mukteshwar-nainital"
                      // target="_blank"
                      // rel="noreferrer"
                    >

                       <img
                className=" relative rounded-tr-3xl rounded-bl-3xl md:h-64 md:w-96"
                src={img_a}
                alt="4 BHK Cottage homestay near nainital"
              />
         <img className="w-20 absolute bottom-0 right-0 z-10" src={discount} alt="discount%" />


              <div>
                <div className="mx-auto border-b-2 border-gray-600 my-2 p-3">
                  <h2 className=" text-xl md:text-2xl text-center text-green-800 font-merriweather font-semibold">
                  IVH - 43
                </h2>
                  <p className="text-2xl md:text-3xl text-center font-bold font-merriweather">
                    4 BHK COTTAGE
                  </p>
                </div>

                <div className="flex flex-col gap-3 mx-auto p-3">
                  <p className="animate__zoomIn text-lg md:text-3xl text-center font-bold font-merriweather">
                    ₹20,000/ <span className="font-extralight">Night</span>
                  </p>
                  <div className="flex gap-5 justify-center items-center">
                    {/* <a
                      href="/4-bhk-cottage-for-stay-in-mukteshwar-nainital"
                      // target="_blank"
                      // rel="noreferrer"
                    >
                      <button className="bg-[#99B94A] border-green-900 text-white font-bold p-2 py-1.5 rounded-lg border-2 text-sm md:text-lg hover:text-green-900 hover:bg-white">
                        Explore
                      </button>
                    </a> */}
                    <a href="/contact-indus-valley-resort" target="_blank" rel="noreferrer">
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
        </section>
      </div>
    </div>
  );
}

export default Property1;
