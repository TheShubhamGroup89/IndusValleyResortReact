// Import necessary dependencies
import React from "react";
import bgContact from "../assets/bg/SectionBgImage.jpg";
import ContactAddress from "./ContactAddress";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Define the functional component for the contact page
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Us To Book Your Stay At The Best Hotel In Mukteshwar
        </title>
        <meta
          name="description"
          content="Discover Mountains Magnetism at our Mukteshwar Uttarakhand hotel. Contact us for bookings and inquiries to stay in Mukteshwar"
        />
        {/* <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/contact"
        /> */}
      </Helmet>

      <div
        style={{ backgroundImage: `url(${bgContact})` }}
        className="md:bg-cover flex flex-col justify-center items-center mx-auto md:bg-center pt-10 md:pb-20 pb-0 md:p-10"
      >
        <h2 className="w-full md:w-3/4 animate__zoomIn text-xl md:text-4xl text-center px-3 my-3 md:my-0 tracking-wider text-white bg-black bg-opacity-50 md:text-black md:bg-white md:bg-opacity-20 rounded-xl justify-center pb-5 font-french-canon">
          Come and engage in the peace, beauty, and atmosphere of Mukteshwar
        </h2>

        {/* Contact Address Component */}
        <ContactAddress />

        {/* Link to go back to the home page */}
        <Link
          to="/" // Replace "/" with your actual route if different
          className="bg-[#3E6527] border-2 w-fit font-semibold font-french-canon px-4 py-2.5 m-2 rounded-md hover:bg-black text-white hover:font-bold focus:outline-none focus:bg-blue-600"
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

// Export the component
export default Contact;
