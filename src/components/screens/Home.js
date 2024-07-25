import React, { useEffect, useRef } from "react";
import bg from "../assets/bg/bgHome2.jpg";
import AboutBanner from "./AboutBanner";
import Testimonials from "./Testimonials";
import LocomotiveScroll from 'locomotive-scroll';
import GoogleMap from "./Google_Map2";
import GallerySlider from "./GallerySlider";
import Banner2 from "./Banner2";
import HomeStay from "./HomeStay";
import BookNowBanner from "./BookNowBanner";
import HomeYoutubeLink from "./HomeYoutubeLink";

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
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
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }}>
      <Banner2 />
      <BookNowBanner />
      <AboutBanner />
      <HomeStay />
      <div className="px-6 md:px-0 py-2 md:py-0">
        <GallerySlider />
      </div>
      <HomeYoutubeLink />
      <GoogleMap />
      <div className="px-6 md:px-0 py-2 md:py-0">
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
