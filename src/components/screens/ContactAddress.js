import React from 'react'
import message from "../assets/icons/message.gif";
import phone from "../assets/icons/phone.gif";
import icon_facebook from "../assets/icons/icon_facebook.png";
import icon_youtube from "../assets/icons/icon_youtube.png";
import icon_insta from "../assets/icons/icon_insta.png";
import icon_linkdin from "../assets/icons/icon_linkdin.png";
function ContactAddress() {
  const phoneNumber = "8744989989";
  return (
    <section className='w-full xl:w-2/3 flex flex-col md:flex-row md:m-3 p-5 gap-8 rounded-xl md:gap-10 bg-black bg-opacity-30'>
      <div className="flex w-full md:w-1/2  md:p-10 flex-col gap-6  ">
     
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-3 md:gap-5 py-3 px-5  md:p-0 items-center">
              <a href="mailto:info@theshubhamgoc.com">
                <img
                  className="w-10 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={message}
                  alt="message"
                />
              </a>
              <a
                className="text-base md:text-xl font-semibold text-white w-fit pl-0 md:p-3font-semibold hover:text-blue-400 "
                href="mailto:info@theshubhamgroup.com"
              >
                {"info@theshubhamgroup.com"}
              </a>
            </div>
            <div className="flex gap-3 md:gap-5 p-3 px-5 md:p-0 items-center">
              <a href={`tel:${phoneNumber}`}>
                <img
                  className="w-10 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={phone}
                  alt="message"
                />
              </a>
              <div className='flex flex-col'>
                {/* <p className="text-base md:text-xl font-semibold text-white w-fit pl-0 ">8448 962 689</p> */}
                {/* <a
                class=" text-base md:text-xl font-semibold text-white w-fit pl-0  hover:underline"
                href="tel:8448962689"
              >
               8448 962 689
              </a> */}
              <a
                class=" text-base md:text-xl font-semibold text-white w-fit pl-0  hover:underline"
                href="tel:8744989989"
              >
               8744 989 989
              </a>
              </div>
              
              {/* <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> */}
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-2xl text-white font-semibold w-fit md:text-3xl py-3 md:py-5 px-5 md:px-0 font-serif">Connect with us:</p>
            <div className="flex w-fit md:gap-8 px-5 md:px-0 gap-3 py-3">
              <a
                href="https://www.facebook.com/theshubhamGroup/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 p-1 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={icon_facebook}
                  alt="Facebook Link.."
                />
              </a>
              <a href="https://www.youtube.com/@indusvalleymukteshwar" target="_blank" rel="noreferrer">
                <img
                  className="w-10 p-1 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={icon_youtube}
                  alt="Youtube Link.."
                />
              </a>
              <a
                href="https://www.instagram.com/indusvalleyresort/?hl=en"
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
                href="https://www.linkedin.com/company/indus-valley-mukteshwar/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-10 p-1 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                  src={icon_linkdin}
                  alt="Linkdin Link.."
                />
              </a>
            </div>
          </div>
      </div>
      <iframe className="text-3xl md:text-4xl w-full md:w-1/2 md:p-10 text-white rounded-2xl font-semibold font-serif"
      title='CRM-Form'
        id="Contact_Form"
       src="https://account.solidperformers.com/capture_form_data/MTIzOA=="
        border="0"
        style={{ border: 0, height: "400px", }}
      ></iframe>
        </section>
  )
}

export default ContactAddress
