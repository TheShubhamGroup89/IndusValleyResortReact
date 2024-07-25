import React from "react";
import bank from "../assets/icons/bank.png";
import message from "../assets/icons/message.gif";
import phone from "../assets/icons/phone.gif";
// import icon_facebook from "../assets/icons/icon_facebook.png";
// import icon_youtube from "../assets/icons/icon_youtube.png";
// import icon_insta from "../assets/icons/icon_insta.png";
// import icon_linkdin from "../assets/icons/icon_linkdin.png";
import bgContact from "../assets/bg/bankbg2.jpg";
import { Helmet } from "react-helmet";

function BookNowForm() {
  const phoneNumber = "8744989989";
  return (
    <div
      style={{ backgroundImage: `url(${bgContact})` }}
      className="bg-cover mt-5 md:mt-0 flex flex-col justify-center items-center mx-auto bg-center pt-14 md:pb-20 pb-0 md:p-5"
    >
      <Helmet>
        <title>Book Your Stay Now At The Luxury Hotel In Mukteshwar</title>
        <meta
          name="description"
          content="Ready for an unforgettable trip? Book your luxury stay now at best resort in Mukteshwar Uttarakhand"
        />
        {/* <link
          rel="canonical"
          href="https://www.indusvalleyresort.com/booknow"
        /> */}
      </Helmet>
      <p className="animate__zoomIn text-2xl md:text-5xl text-center px-3 bg-white bg-opacity-35 rounded-xl justify-center font-serif p-5 ">
        PAYMENTS IN FAVOUR OF : SUBHAM BUILDTECH LLP
      </p>

      <section className="w-full flex flex-col md:flex-row md:mx-auto p-5 md:backdrop:pt-14 rounded-xl md:gap-10 bg-black bg-opacity-30">
        <div className="flex w-fit md:w-2/3 md:py-5 xl:py-10 md:pl-20 flex-col px20">
          <div className="flex flex-col ">
            <div className="flex gap-3 md:gap-5 py-3 md:py-5 px-5 md:px-0 items-center">
              <img
                className="w-10 p-1 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                src={bank}
                alt="bank"
              />
              <div className="flex flex-col">
                <p className="text-base md:text-xl font-semibold text-white w-fit pl-0 md:p-3font-semibold hover:text-blue-400 ">
                  BANK : HDFC BANK
                </p>
                <p className="text-base md:text-xl font-semibold text-white w-fit pl-0 md:p-3font-semibold hover:text-blue-400 ">
                  IFSC CODE : HDFC0002091
                </p>
                <p className="text-base md:text-xl font-semibold text-white w-fit pl-0 md:p-3font-semibold hover:text-blue-400 ">
                  ACCOUNT NUMBER : 50200011542667
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-5 py-3 md:py-5 px-5 md:px-0 items-center">
              <a href="mailto:info@theshubhamgoc.com">
                <img
                  className="w-10 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={message}
                  alt="message"
                />
              </a>
              <a
                className="text-base md:text-xl font-semibold text-white w-fit pl-0 md:p-3font-semibold hover:text-blue-400 "
                href="mailto:ivmr@tsgoc.in"
              >
                EMAIL : {"ivmr@tsgoc.in"}
              </a>
            </div>

            <div className="flex gap-3 md:gap-5 p-3 px-5 md:px-0 items-center">
              <a href={`tel:${phoneNumber}`}>
                <img
                  className="w-10 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={phone}
                  alt="message"
                />
              </a>
              <p className="text-base md:text-xl font-semibold text-white w-fit pl-0 ">
                PHONE | WHATSAPP :{" "}
                <a
                  className="hover:text-yellow-300 hover:underline"
                  href={`tel:${phoneNumber}`}
                >
                  <span className="text-yellow-400">8744</span> 989 989
                </a>
              </p>
              {/* <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> */}
            </div>
          </div>

          {/* <div className="flex flex-col ">
            <p className="text-2xl text-white font-semibold w-fit md:text-3xl py-3 md:py-5 px-5 md:px-0 font-serif">
              Connect with us:
            </p>

            <div className="flex w-fit md:gap-8 px-5 md:px-0 gap-3 py-3">
              <a
                href="https://www.facebook.com/theshubhamGroup/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 p-2 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={icon_facebook}
                  alt="Facebook Link.."
                />
              </a>

              <a
                href="https://www.youtube.com/@indusvalleymukteshwar"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 p-2 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={icon_youtube}
                  alt="Youtube Link.."
                />
              </a>

              <a
                href="https://www.instagram.com/theshubhamgroup/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={icon_insta}
                  alt="Insta Link.."
                />
              </a>

              <a
                href="https://www.linkedin.com/company/shubham-group-of-companies/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 p-2 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={icon_linkdin}
                  alt="Linkdin Link.."
                />
              </a>
            </div>
          </div> */}
        </div>

        <iframe
          className="pt-5 md:pt-10 md:pr-20"
          title="CRM-Form"
          id="BOOK NOW!"
          src="https://account.solidperformers.com/capture_form_data/OTg5"
          border="0"
          style={{ border: 0, height: "450px", width: "100%" }}
        ></iframe>

        {/* <iframe
          className="text-3xl md:text-4xl w-full md:w-2/4 py-10 pb-0 md:py-32 md:px-20 text-white rounded-2xl font-semibold font-serif"
          title="CRM-Form"
          id="Contact_Form"
          src="https://account.solidperformers.com/capture_form_data/OTM3"
          border="0"
          style={{ border: 0, height: "600px", }}
        ></iframe> */}
      </section>
    </div>
  );
}

export default BookNowForm;
