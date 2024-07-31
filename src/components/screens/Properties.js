import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Helmet } from "react-helmet";
import Property1 from "./Property1";
import BannerP1 from "./BannerP1";
import Property2 from "./Property2";
import { Link } from "react-router-dom";
import bg from "../assets/bg/bgHome2.jpg";

import BookNowBanner from "./BookNowBanner";
import Property3 from "./Property3";
import NoticeBanner from "./NoticeBanner";

function Properties() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      // Add any other options you need here
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div ref={containerRef} className="min-h-screen" style={{ 
      backgroundImage: `url(${bg})`, 
      backgroundAttachment: 'fixed', 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'auto', 
      backgroundPosition: 'center',
    }}>
      <Helmet>
        <title>
        Homestay in Mukteshwar
        </title>
        <meta
          name="description"
          content="Our Inventory in Mukteshwar offers luxurious cottages and apartments stay with beautiful views and tasty food. We have 1 BHK, 2 BHK and 4 BHK homestay available"
        />
        {/* <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/cottages-for-stay-in-mukteshwar"
        /> */}
      </Helmet>
      <div className="w-full bg-[#d2d2b4] bg-cover bg-opacity-80 text-[#40392d] ">
        <BannerP1 />
        <BookNowBanner />
        <NoticeBanner/>
        <Property3 />
        <Property2 />
        <Property1 />
        <div className="flex justify-center p-5">
          <Link
            to="/" // Replace "/ready-to-move" with your actual route
            className="bg-[#3E6527] border-2 w-fit font-semibold font-serif px-4 py-2.5 rounded-md hover:bg-black text-white hover:font-bold focus:outline-none focus:bg-blue-600"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Properties;
