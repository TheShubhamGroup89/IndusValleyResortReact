import React from "react";
import img1 from "../assets/photos/nearby/nearbyplaces.jpg";
import UseIsDesktop from "./UseIsDesktop"; // Adjust the import path if necessary

function Google_Map2({ google_map }) {
  const isDesktop = UseIsDesktop();

  return (
    <div className="margin-lg-115t margin-sm-50t no-padd">
        {/* data-scroll data-scroll-section data-scroll-speed={isDesktop ? ".3" : "0"} */}
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="true"
        data-vc-stretch-content="true"
        className="contact_map row-fluid no-padd margin-lg-115t margin-sm-50t no-padd md:bg-[#d2d2b4] text-[#d2d2b4] md:text-[#40392d]  md:bg-opacity-80 relative box-border"
      >
        <h3 className="w-fit mx-auto rounded-2xl text-2xl md:text-4xl md:mt-10 md:py-10 font-berkshire text-center tracking-widest bg-opacity-20 p-5">
          Project Location Advantage
        </h3>
        <div className="md:px-10 pb-10 md:mx-14  flex justify-center">
           <div className="google-maps w-full md:w-11/12 flex flex-col justify-center items-center md:flex-row gap-5 py-5 md:p-3 bg-white rounded-tr-3xl rounded-bl-3xl ">
          <iframe
           title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.0490906901196!2d79.67352231457781!3d29.39811995576963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7f7740c0bc9%3A0xe9baaef9dd824df2!2sIndus%20Valley%20Sunderkhal%20Mukteshwar%20District%20Nainital!5e0!3m2!1sen!2sin!4v1636700789384!5m2!1sen!2sin"
            className="w-full p-2 md:w-1/2 h-96 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <img className="w-full md:w-1/2 md:h-96" src={img1} alt="nearby sites" />
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Google_Map2;
