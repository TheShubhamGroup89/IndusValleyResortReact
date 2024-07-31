import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TiWeatherPartlySunny, TiWeatherWindyCloudy } from "react-icons/ti";
import bg from "../assets/bg/WebsiteBg3.avif";
import whatsapp from "../assets/icons/whatsapp3.png";
import logo from "../assets/logo/LastLogo.png"

function Header() {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full z-40 shadow-xl sticky top-0`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className={`bg-[#d2d2b4] ${
            scrolling ? "bg-opacity-90" : "bg-opacity-90"
          }`}
        >
          <div className="w-full flex justify-between h-20 md:h-28 lg:h-32 xl:h-28 items-center text-[#40392d]">
            <div className="flex flex-col justify-center items-center">
              <a href="/" onClick={() => setToggle(false)}>
                <img
                  className="w-24 h-20 md:w-40 md:h-28 lg:w-40 lg:h-28 p-2 pt-0 ml-2 md:ml-5 "
                  // src="https://res.cloudinary.com/dpkvvpwv6/image/upload/v1717569577/IndusValleyResort/Logo/logo_ue3n7t.png"
                  // src="https://res.cloudinary.com/dqeka0ibm/image/upload/v1719484988/logo_kisnzv.png"
                  src={logo}
                  alt="logo"
                />
              </a>
            </div>
            <div className="xl:hidden flex items-center gap-2">
              <a
                className="bg-[#434E57] text-sm md:text-xl text-white border-2 text-center border-yellow-600 duration-700 rounded-tr-2xl rounded-bl-2xl p-2 m-2 font-merriweather"
                href="https://wa.me/918744989989"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Call Now"
              >
                CALL NOW
              </a>
              <div className="text-xs md:text-lg mt-1">
                <p>Delhi - 45°c</p>
                <p>Mukteshwar - 18°c</p>
              </div>
            </div>
            {toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!toggle)}
                className="xl:hidden block text-2xl md:text-4xl mx-4"
                aria-label="Close Menu"
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className="xl:hidden block text-2xl md:text-4xl mx-4"
                aria-label="Open Menu"
              />
            )}
            <div className="hidden xl:flex flex-row z-30 text-base px-4 gap-6 lg:gap-8">
              <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/"
              >
                HOME
              </a>
              <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/indus-valley-resort"
              >
                ABOUT US
              </a>
              <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/hillcrest-cafe-in-mukteshwar"
              >
                DINING
              </a>
              <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/cottages-for-stay-in-mukteshwar"
              >
                STAY
              </a>
              <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/gallery"
              >
                GALLERY
              </a>
              <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/amenities"
              >
                AMENITIES
              </a>
              <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/places-to-visit-in-mukteshwar"
              >
                POINT OF INTEREST
              </a>
              {/* <a
                className="lg:hover:scale-110 duration-500 hover:text-yellow-600 py-3 font-merriweather"
                href="/contact-indus-valley-resort"
              >
                REACH US
              </a> */}
              <div className="flex gap-3 lg:gap-5 items-center">
                <a
                  className="bg-[#434E57] lg:hover:bg-white lg:hover:text-black text-white border-2 border-yellow-600 duration-700 rounded-tr-2xl rounded-bl-2xl p-3 font-merriweather"
                  href="/contact-indus-valley-resort"
                  aria-label="Book Now"
                >
                  BOOK NOW
                </a>
                <div className="text-sm flex flex-col items-start">
                  <p className="lg:hover:text-red-700 font-semibold flex gap-1 items-center">
                    Delhi - 45°c <TiWeatherPartlySunny className="text-lg" />
                  </p>
                  <p className="lg:hover:text-green-700 font-semibold flex gap-1 items-center">
                    Mukteshwar - 18°c{" "}
                    <TiWeatherWindyCloudy className="text-lg" />
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`xl:hidden flex flex-col fixed font-merriweather text-lg md:text-4xl bg-[#475357] text-white pt-8 md:pt-10 md:pl-5 lg:gap-5 bg-opacity-75 top-20 md:top-28 lg:top-32 w-full h-screen ${
                toggle ? "left-0" : "left-[-100%]"
              } duration-700`}
            >
              <a onClick={() => setToggle(false)} href="/" className="px-5 py-3 md:py-5">
                HOME
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/indus-valley-resort"
                className="px-5 py-3 md:py-5"
              >
                ABOUT US
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/hillcrest-cafe-in-mukteshwar"
                className="px-5 py-3 md:py-5"
              >
                DINING
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/cottages-for-stay-in-mukteshwar"
                className="px-5 py-3 md:py-5"
              >
                STAY
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/gallery"
                className="px-5 py-3 md:py-5"
              >
                GALLERY
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/amenities"
                className="px-5 py-3 md:py-5"
              >
                AMENITIES
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/places-to-visit-in-mukteshwar"
                className="px-5 py-3 md:py-5"
              >
                POINT OF INTEREST
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/contact-indus-valley-resort"
                className="px-5 py-3 md:py-5"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 30 }}
      >
        <a
          href="https://wa.me/918744989989"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            style={{ width: "50px", height: "50px", borderRadius: "40%" }}
          />
        </a>
      </div>
    </>
  );
}

export default Header;
