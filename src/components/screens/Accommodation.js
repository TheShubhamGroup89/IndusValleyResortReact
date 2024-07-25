import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Helmet } from "react-helmet";

import BannerAccommodation from "./BannerAccommodation";
import bg from "../assets/bg/bgHome2.jpg";
import BookNowBanner from "./BookNowBanner";
import gardenlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/garden ---.png'
import parkinglogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/parking.png'
import restaurantlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/restaurant.png'
import wifilogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/wifi.png'
import breakfastlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/breakfast.png'
import familyroomlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/family room.png'
import utensilslogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/utensils.png'
import roomservicelogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/room services.png'
import kitchenlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/kitchen.png'
import wardrobelogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/wardrobe.png'
import inductionlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/induction.png'
import housekeepinglogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/house keeping.png'
import showerlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/shower.png'
import geaserlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/geaser icon.png'
import electrickettlelogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/electrical kettle.png'

// import barbequelogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/barbeque stand.png'
// import trekkinglogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/trekking.png'
import roomheaterlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/room heater.png'
// import roomdininglogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/dinning room.png'
import couplefriendlylogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/couple friendly.png'
import traveldesclogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/travel desk.png'
import mirrorlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/mirror.png'
import toiletrieslogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/toiletries.png'
import doublebedlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/double beds.png'
import towelslogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/towel.png'
import gatedcommunitylogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/gated community.png'
import clubhouselogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/clubhouse.png'
import securitylogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/security.png'
// import landscapedlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/land'
import himalayanviewlogo from '../assets/Tropical-Resort-Hotel-Circle-Logo/hill view.png'

const Accommodation = () => {
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
        <title>Our Amenities And Services</title>
        <meta
          name="description"
          content=" If you are visiting Mukteshwar, our resort will be best for your stay where we offer amenities like family room, couple friendly room, free wifi, barbeque, bonfire, free parking and many more things"
        />
        <link rel="canonical" href="https://www.indusvalleyresort.com/amenities" />
      </Helmet>
      <BannerAccommodation />
      <BookNowBanner />
      <section  className="w-full bg-black bg-cover bg-opacity-30 text-white">
        <p className=" text-2xl md:text-3xl xl:text-4xl font-french-canon p-10 text-center">
         AMENITIES
        </p>

        <div className=" flex flex-col md:flex-row justify-center gap-3 md:gap-16 md:px-20">

          <ol className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 px-5 md:py-5 w-full  text-white text-base font-glacial md:text-lg">

          <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
             <img className="size-16" src={gatedcommunitylogo} alt="SECURE GATED COMMUNITY"/> SECURE GATED COMMUNITY
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
             <img className="size-16" src={clubhouselogo} alt="SECURE GATED COMMUNITY"/> EXCLUSIVE CLUBHOUSE
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
             <img className="size-16" src={restaurantlogo} alt="SECURE GATED COMMUNITY"/> RESTAURANT
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
              <img className="size-16" src={roomservicelogo} alt="ROOM SERVICE"/> ROOM SERVICE
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
              <img className="size-16" src={breakfastlogo} alt="parking"/>  BREAKFAST
            </li>
       <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
             <img className="size-16" src={gardenlogo} alt="parking"/> LANDSCAPED GARDENS
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
             <img className="size-16" src={parkinglogo} alt="parking"/> COMPLIMENTARY PARKING
            </li>
            <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
              <img className="h-16" src={wifilogo} alt="parking"/> WIFI
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
              <img className="h-16" src={securitylogo} alt="parking"/> 24*7 SECURITY SURVEILLANCE
            </li>

            <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
              <img className="h-16" src={himalayanviewlogo} alt="FAMILY ROOM"/>  PANORAMIC HIMALAYAN VIEWS
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
              <img className="h-16" src={familyroomlogo} alt="FAMILY ROOM"/>  SPACIOUS FAMILY ROOMS
            </li>
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
              <img className="h-16" src={couplefriendlylogo} alt="FAMILY ROOM"/> COUPLE FRIENDLY ROOMS
            </li>
          </ol>
        </div>


         <div className="flex flex-col md:px-5 py-5 md:flex-row md:pt-16 justify-around gap-3 text-white">
        <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-28">
          <section className="flex flex-col items-center">
              <p className=" text-2xl md:text-3xl xl:text-4xl font-french-canon p-10 text-center">
              BEDROOMS
            </p>
           <ol className="flex flex-col xl:flex-row gap-3 px-5 md:py-5 w-full text-white text-base font-glacial md:text-lg">
           <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={doublebedlogo} alt="WARDROBE"/> DOUBLE BEDS
              </li>
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={wardrobelogo} alt="WARDROBE"/>  WARDROBE
              </li>
             <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={roomheaterlogo} alt="parking"/> ROOM HEATER
              </li>
             <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={housekeepinglogo} alt="HOUSE KEEPING"/> HOUSE KEEPING
              </li>
             <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={traveldesclogo} alt="TRAVEL DESK"/> TRAVEL DESK
              </li>
            </ol>
          </section>
          <section className="flex flex-col items-center">
              <p className=" text-2xl md:text-3xl xl:text-4xl font-french-canon p-10 text-center">
              WASHROOM
            </p>
           <ol className="flex flex-col xl:flex-row gap-3 px-5 md:py-5 w-full justify-center text-white text-base font-glacial md:text-lg">
             
           
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16 text-white" src={toiletrieslogo} alt="FREE TOILETRIES"/> TOILETRIES
              </li>
             <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={towelslogo} alt="ROOM SERVICE"/>TOWELS
              </li>
             <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={mirrorlogo} alt="smokingarea"/>  MIRRORS
              </li>
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={showerlogo} alt=" SHOWER"/>  SHOWER
              </li>
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={geaserlogo} alt="parking"/> GEASER
              </li>
            </ol>
          </section>
        </div>

      
      </div>

      <div className="flex justify-around">
          <section className="flex flex-col items-center text-white">
            <p className=" text-2xl md:text-3xl xl:text-4xl font-french-canon p-10 text-center">
              KITCHEN
            </p>
            <ol className="flex flex-col xl:flex-row gap-3 px-5 md:py-5 w-full text-white text-base font-glacial md:text-lg">
            <li className="flex flex-col md:hover:scale-105 duration-500 items-center text-center p-2 rounded-xl gap-3 ">
                <img className="h-16" src={kitchenlogo} alt="INDUCTION"/>  CABINETS
              </li>
               <li className="flex flex-col md:hover:scale-105 duration-500 items-center text-center p-2 rounded-xl gap-3 ">
                <img className="h-16" src={inductionlogo} alt="INDUCTION"/>  INDUCTION, OVEN <br/>(ON REQUEST)
              </li>
               <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl gap-3 ">
                <img className="h-16" src={utensilslogo} alt="UTENSILS"/> BASIC UTENSILS & CUTLERY
              </li>
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl gap-3 ">
                <img className="h-16" src={electrickettlelogo} alt="UTENSILS"/> ELECTRIC KETTLE
              </li>
            </ol>
          </section>
          {/* <section className="flex flex-col items-center text-white">
              <p className=" text-2xl md:text-3xl xl:text-4xl font-french-canon p-10 pb-0 text-center">
              OUTDOOR
            </p>
           <ol className="flex gap-3 px-5 md:py-5 w-full text-white text-base font-glacial md:text-lg">
               <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl gap-3 ">
                <img className="h-16" src={gardenlogo} alt="GARDEN"/>  GARDEN
              </li>
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={bonfirelogo} alt=" BONFIRE"/> BONFIRE
              </li>

              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={barbequelogo} alt="BARBEQUE STAND"/>  BARBEQUE STAND
              </li>
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={trekkinglogo} alt="TREKKING"/> TREKKING
              </li>
            </ol>
          </section> */}
        </div>

        {/* <div className="flex justify-around">
          <section className="flex flex-col items-center text-white">
            <p className=" text-2xl md:text-3xl xl:text-4xl font-french-canon p-10 pb-0 text-center">
            WASHROOM
            </p>
           <ol className="flex gap-3 px-5 md:py-5 w-full text-white text-base font-glacial md:text-lg">
              <li className="flex flex-col items-center md:hover:scale-105 duration-500  p-2 rounded-xl gap-3">
                <img className="h-16" src={toiletrieslogo} alt=" HOUSE KEEPING"/>TOILETRIES
              </li>
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={towelslogo} alt="ROOM SERVICE"/>TOWELS
              </li>
             <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={smokinglogo} alt="smokingarea"/>  MIRRORS
              </li>
             
            </ol>
          </section>

          <section className="flex flex-col items-center text-white">
              <p className=" text-2xl md:text-3xl xl:text-4xl font-french-canon p-10 pb-0 text-center">
              GENERAL
            </p>
           <ol className="flex gap-3 px-5 md:py-5 w-full text-white text-base font-glacial md:text-lg">
             
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={couplefriendlylogo} alt="COUPLE FRIENDLY"/>  COUPLE FRIENDLY
              </li>
              
              <li className="flex flex-col md:hover:scale-105 duration-500 items-center p-2 rounded-xl text-center gap-3">
                <img className="h-16" src={roomdininglogo} alt="ROOM DINING"/> ROOM DINING
              </li>
            </ol>
          </section>
        </div> */}
      </section>

     
    </div>
  );
};

export default Accommodation;
