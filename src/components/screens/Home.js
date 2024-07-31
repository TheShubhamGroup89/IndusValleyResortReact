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
import { Helmet } from "react-helmet";

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
       <Helmet>
        <title>Indus Valley Resort</title>
        <meta
          name="description"
          content=" Stay at the finest resort in Mukteshwar or a cozy homestay. Dine at our top restaurant for an unforgettable eatery experience. We serve the best food in Mukteshwar"
        />
        <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/about-us"
        />
      </Helmet>
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
