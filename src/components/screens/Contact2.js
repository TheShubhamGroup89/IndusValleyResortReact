// Import necessary dependencies
import React from "react";
import bgContact from "../assets/bg/contact3_bg.jpg";
// import ContactForm from "./ContactForm";
// import CompanyDetail from "./CompanyDetail";
import ContactAddress from "./ContactAddress";


// Define the functional component for the form
const Contact = () => {
  return (
    <>
      {/* <CompanyDetail/> */}
      <div style={{ backgroundImage: `url(${bgContact})`}} className="bg-cover mt-5 md:mt-0 flex flex-col justify-center items-center mx-auto bg-center pt-14 md:pb-20 pb-0 md:p-10">
      <h2 className="animate__zoomIn text-xl md:text-4xl text-center px-3 bg-white bg-opacity-45 rounded-xl justify-center  font-french-canon ">
      Come and engage in the peace, beauty, and atmosphere of Mukteshwar
      </h2>
      {/* <p className="text-lg md:text-2xl font-mono my-2 mx-5 px-3 bg-white bg-opacity-35 rounded-xl text-center">
              We are here to help you get your Dream Home!
            </p> */}
        <ContactAddress/>
       
        {/* <ContactForm/> */}
      </div>      
    </>
  );
};

// Export the component
export default Contact;
