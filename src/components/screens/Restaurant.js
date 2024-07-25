import React, { useEffect, useRef } from "react";
import bg from "../assets/bg/WebsiteBg3.avif";
import { Helmet } from "react-helmet";

import Banner from "../restaurantComponent/Banner";
import LocomotiveScroll from "locomotive-scroll";
import AboutRestaurant from "../restaurantComponent/AboutRestaurant";
import BookNowBanner from "./BookNowBanner";
import RestaurantMenu from "../restaurantComponent/RestaurantMenu";

const Restaurant = () => {
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
    <div
      ref={containerRef}
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
          Best Restaurant In Mukteshwar- Finest Cafe & Eatery In Town
        </title>
        <meta
          name="description"
          content="Dine at the best cafe and restaurant in Mukteshwar near Nainital. Our eatery offers best food in mukteshwar, while our resort provides the perfect homestay in Mukteshwar"
        />
        {/* <link rel="canonical" href="https://www.indusvalleyresort.com/hillcrest-cafe-in-mukteshwar" /> */}
      </Helmet>
      <Banner />
      <BookNowBanner />
      <AboutRestaurant />
      <RestaurantMenu />
    </div>
  );
};

export default Restaurant;
