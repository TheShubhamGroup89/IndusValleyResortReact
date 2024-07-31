import React from "react";
// import brand_logo from "../assets/logo/the-shubham-group1final.png";
import brand_logo from "../assets/logo/INDUS VALLETY HOMESTAY WATERMARK.png";

// import footer3 from "../assets/bg/footer5.png";
import footer3 from "../assets/bg/bgHome2.jpg";

const Footer = () => {

  return (
    <footer
      style={{ backgroundImage: `url(${footer3})` }}
      className=" bg-cover bg-bottom"
    >
      <div className="bg-[#d2d2b4] bg-opacity-40">
  <div className=" lg:pl-20 flex flex-col md:flex-row pl-10 justify-between md:p-10 p-5 gap-10 text-[#e9e9d0] bg-black bg-opacity-30 border-y-2 border-[#d2d2b4]">
        {/* <section className="flex flex-col md:w-1/4 w-full gap-5">
          <p className=" text-2xl md:text-3xl font-semibold">
            Registered Office
          </p>
          <p className=" text-base font-times font-thin hover:underline">
            The Shubham Group, A-24, Okhla Industrial Area, Phase-2, Delhi.
            Pincode - 110020
          </p>
        </section> */}
    <section className="flex flex-col md:w-1/4 w-full gap-5 font-merriweather">

          <p className=" text-2xl md:text-3xl">
            Site Address
          </p>
          <p className=" text-base font-merriweather">
            Managher, Near Dhanachuli Band,<br/> Village - Sunderkhal,<br/> Tehsil - Dhari,<br/>Nainital, Uttrakhand.<br/> Pincode - 263132
          </p>    

        </section>
        <section className="flex flex-col w-full md:w-1/4 gap-5 font-merriweather">

          <p className=" text-2xl md:text-3xl">
            Corporate Office
          </p>
          <p className=" text-base font-merriweather ">
            315, Block-B, Sector-105, Noida,<br/> Uttar Pradesh, Pincode - 201304
          </p>
        </section>
        <section className="flex flex-col w-full md:w-1/4 md:px-10 gap-5 ">

          <p className=" text-2xl md:text-3xl font-merriweather">
            Contact Us
          </p>
          <div className="flex flex-col">
            <a
              className=" text-base font-merriweather tracking-wide hover:text-blue-400 "
              href="mailto:info@theshubhamgroup.com"
            >
              info@theshubhamgroup.com
            </a>
            {/* <p className=" text-base font-semibold">
              <span className="text-yellow-400">8744</span> 989 989
            </p> */}
            <p className=" text-base font-merriweather pt-2">
               Tanushka Banerjee<br/> (Booking Manager)
              </p>
            {/* <a
                class=" text-base hover:text-yellow-400"
                href="tel:8448962689"
              >
               8448 962 689
              </a> */}
              <a
                class=" text-base font-semibold hover:text-yellow-400"
                href="tel:8744989989"
              >
               8744 989 989
              </a>
            <p className=" text-base font-merriweather pt-2">
               Prashant Sharma<br/> (Host)
              </p>
              <a
                class=" text-base font-semibold hover:text-yellow-400"
                href="tel:9711258989"
              >
                9711 258 989
              </a>  
          </div>
        </section>

        <section className="w-full md:w-1/4">
          {/* <a href="https://www.indusvalleymukteshwar.com/" target="_blank" rel="noreferrer"> */}
            <img
              className="w-56 md:w-60 bg-black bg-opacity-20 rounded-3xl mx-auto animate__zoomIn"
              // src={brand_logo}
              // src="https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717569577/IndusValleyResort/Logo/logoFooter_avg5h5.png"
              // src="https://res.cloudinary.com/dqeka0ibm/image/upload/v1719484991/logoFooter_bq1geb.png"
              src={brand_logo}
              alt="Indus Valley Resort Logo"
            />
          {/* </a> */}
        </section>
      </div>

      <section class="copy-right text-[#e9e9d0] bg-black bg-opacity-30 flex flex-col md:flex-row justify-center items-center pb-10 gap-1">

        <p className=" text-center text-sm font-merriweather ">
          Copyright © 2009 The Shubham Group
        </p>
        <p className=" text-center text-sm font-merriweather ">
          All rights reserved.
        </p>

      </section>
      </div>
    
    </footer>
  );
};

export default Footer;
