import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Helmet } from "react-helmet";

import bg from "../assets/bg/bgHome2.jpg";
import pic1 from "../assets/photos/restaurant/asset-4.png";
import BannerAbout from "./BannerAbout";

function AboutUs() {
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
    <div
      ref={containerRef}
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Helmet>
        <title>About Indus Valley Homestay: A Tale of Hospitality Excellence</title>
        <meta
          name="description"
          content="Explore hospitality of Indus Valley Homestay and learn about our commitment to tradition and luxury, ensuring every guest experiences an unforgettable stay."
        />
        <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/about-us"
        />
      </Helmet>
      <BannerAbout />
      <section className="w-full bg-[#d2d2b4] bg-cover bg-opacity-80 text-[#40392d]">
        <div className="flex flex-col gap-3 md:gap-0">
          <div className="md:pt-10 flex">
            <img className="h-28 md:h-32" src={pic1} alt="leaf" />
            <h1 className="w-fit flex justify-center items-end mx-auto text-2xl md:text-4xl tracking-wider font-french-canon text-center">
              <span className="py-5 pr-5 text-[#40392d]">
                Indus Valley Homestay: Your Perfect Retreat in Mukteshwar
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-5 p-3 md:pb-10 shadow-lg">
            <section className="flex flex-col gap-5 md:xl-16 px-3">
              <p className="hover:shadow-md text-lg md:text-2xl md:px-3 font-serif text-justify">
                Indus Valley Homestay, the best hotel in Mukteshwar, offers a peaceful retreat with breathtaking panoramic views of the Nanda Devi Himalayas. This resort combines modern comforts with rustic charm, providing cozy rooms and delicious food. As an ideal homestay, it's perfect for both relaxation and adventure.
              </p>
              <div className="flex gap-0">
                <img className="h-28 w-20" src={pic1} alt="leaf" />
                <p className="w-fit flex justify-center items-end mx-auto text-2xl md:text-4xl tracking-wider font-french-canon text-center">
                  <span className="py-5 pr-5 text-[#40392d] font-semibold">
                    Accommodations and Amenities:
                  </span>
                </p>
              </div>
              <ol className="flex flex-col gap-3 mx-auto md:pb-5 w-full md:w-5/6 text-lg font-glacial md:text-2xl">
                <li className="flex flex-col bg-opacity-80 p-2 rounded-xl gap-5">
                  <span className="text-[#40392d] font-semibold">
                    &#10146; Cozy Rooms and Villas:
                  </span>
                  &#x2022; Whether you're seeking the intimacy of a 1 BHK apartment or the spaciousness of a 2, 3, or 4 BHK villa, we have the ideal accommodation tailored to your needs.
                  <br />
                  &#x2022; Our accommodations include couple-friendly and pet-friendly options, each with personal parking spaces.
                </li>
                <li className="flex flex-col bg-opacity-80 p-2 rounded-xl gap-5">
                  <span className="text-[#40392d] font-semibold">
                    &#10146; Security:
                  </span>
                  &#x2022; Your safety is our top priority. We have two vigilant guards working round-the-clock to ensure your peace of mind during your stay.
                  <br />
                  &#x2022; Our gated township adds an extra layer of security, coupled with secured barricades for added protection.
                  <br />
                  &#x2022; 24/7 Assistance: Our friendly team is always available to assist you throughout your stay.
                </li>
                <li className="flex flex-col bg-opacity-80 p-2 rounded-xl gap-5">
                  <span className="text-[#40392d] font-semibold">
                    &#10146; Convenience:
                  </span>
                  &#x2022; Order groceries and essentials right from your room.
                </li>
                <li className="flex flex-col bg-opacity-80 p-2 rounded-xl gap-5">
                  <span className="text-[#40392d] font-semibold">
                    &#10146; Clubhouse:
                  </span>
                  &#x2022; Recreational Activities: Explore our clubhouse with open green areas for badminton, kabaddi, and volleyball.
                  <br />
                  &#x2022; Cozy Bonfire Evenings: When the sun goes down, join us around the bonfire for warm and cozy evenings.
                  <br />
                  &#x2022; Musical Nights: Enjoy unforgettable musical nights that will add an extra touch of magic to your stay.
                </li>
              </ol>
              <div className="flex gap-0">
                <img className="h-28 w-20" src={pic1} alt="leaf" />
                <p className="w-fit flex justify-center items-end mx-auto text-2xl md:text-4xl tracking-wider font-french-canon text-center">
                  <span className="pb-10 pr-5 text-[#40392d]">Activities:</span>
                </p>
              </div>
              <p className="hover:shadow-md text-lg md:text-2xl md:px-3 font-serif text-justify">
                Guests can enjoy trekking, bird watching, exploring lush orchards, and visiting local attractions like Mukteshwar Temple, Chauli Ki Jali, and Bhalu Gaad Waterfalls. Additionally, there's a 5-10 km trek path available from the resort leading towards a forest and a beautiful small lake.
              </p>
              <div className="flex gap-0">
                <img className="h-28 w-20" src={pic1} alt="leaf" />
                <h2 className="w-fit flex justify-center items-end mx-auto text-2xl md:text-4xl tracking-wider font-french-canon text-center">
                  <span className="pb-10 pr-5 text-[#40392d]">Hillcrest Cafe:</span>
                </h2>
              </div>
              <p className="hover:shadow-md text-lg md:text-2xl md:px-3 font-serif text-justify">
                Hillcrest Cafe, the best cafe and a standout eatery in Mukteshwar, offers a delightful dining experience with panoramic views of the Nanda Devi Himalayas. As a premier restaurant in Mukteshwar, guests can savor a variety of delicious local and Indian dishes made from fresh, locally sourced ingredients. The cozy ambiance and stunning scenery makes Hillcrest Cafe the perfect spot to relax and enjoy a memorable meal during your stay in Mukteshwar Nainital. We at Indus Valley Resort are proud to be the <a href="/hillcrest-cafe-in-mukteshwar">best restaurant in Mukteshwar</a>, serving delicious food in an amazing location.
              </p>
              <div className="flex gap-0">
                <img className="h-28 w-20" src={pic1} alt="leaf" />
                <h3 className="w-fit flex justify-center items-end mx-auto text-2xl md:text-4xl tracking-wider font-french-canon text-center">
                  <span className="py-5 pr-5 text-[#40392d]">Events and Celebrations:</span>
                </h3>
              </div>
              <p className="hover:shadow-md text-lg md:text-2xl md:px-3 font-serif text-justify">
                Indus Valley Mukteshwar Homestay offers a range of top-notch services and amenities to ensure a memorable stay. Guests can take advantage of the best venue in Mukteshwar for hosting events. This versatile event place in Mukteshwar serves as an ideal celebration venue and party place. Whether you're planning a special celebration or a casual get-together, our facilities provide the perfect setting.
              </p>
              <p className="hover:shadow-md text-lg md:text-2xl md:px-3 font-serif text-justify">
                Indus Valley Homestay in Mukteshwar is the perfect spot for people who feel at home amidst nature and outdoor enthusiasts. With its blend of comfort, adventure, and stunning Himalayan scenery, your stay in Mukteshwar Nainital promises to be truly unforgettable. Come and experience the best of Mukteshwar with us!
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
