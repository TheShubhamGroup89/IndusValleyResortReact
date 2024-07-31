import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Rating } from "@material-tailwind/react";
// Avatar,

function Testimonials() {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true, // Enable keyboard navigation
    focusOnSelect: true, // Enable focusing on selected slide
  };
  return (
    <div className="w-full text-[#d2d2b4]  bg-cover md:bg-opacity-80 py-5 md:py-10"  >
      <h3 className="text-xl md:text-3xl text-center  font-merriweather">
        Testimonial
      </h3>
      <h3 className="text-2xl md:text-4xl text-center py-5  font-merriweather">
        What Guests Say?
      </h3>
      <div className=" md:p-5 md:mx-14 bg-[#d2d2b4] text-[#40392d]   bg-opacity-90">
        <Slider {...settings} className=" md:w-5/6 xl:w-2/3 m-auto ">
          <section className="text-center p-8 md:py-16 font-glacial">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-6 text-xl md:text-2xl font-medium text-center md:text-justify"
            >
              &quot;A serene escape, this cottage resort blends rustic charm with modern comfort. Impeccable service, beautiful landscapes, and cozy cottages make it a dreamy retreat. Perfect for unwinding and reconnecting with nature. Highly recommend&quot;
            </Typography>
            {/* <Avatar
            className="w-52 flex mx-auto"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image"
            size="sm"
          /> */}
            <Typography variant="h6" className="mt-4">
              Gaurav Gandhi
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              Noida
            </Typography>
            <Rating
              className="flex items-center justify-center"
              value={5}
              readonly
            />
          </section>

          <section className="p-8 md:py-16 text-center font-glacial">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-6 text-xl md:text-2xl font-medium text-center md:text-justify"
            >
              &quot;Everything comes along wonderfully. The work progress is
              remarkable and the contractors are very mindful and respectful to
              their environment. They kept the job site clean and safe, working
              with them was nothing short of a first class experience.&quot;
            </Typography>
            {/* <Avatar
            className="w-52 flex mx-auto"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image"
            size="sm"
          /> */}
            <Typography variant="h6" className="mt-4">
              Rohit Dubey
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              Gorakhpur
            </Typography>
            <Rating
              className="flex items-center justify-center"
              value={5}
              readonly
            />
          </section>

          <section className="p-8 md:py-16 text-center font-glacial">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-6 text-xl md:text-2xl font-medium text-center md:text-justify"
            >
              &quot;Booked a fully furnished Studio apartment and was delighted
              with the on time delivery and quality of the furnishings and the
              fixtures. Really appreciate their attention to detail.&quot;
            </Typography>
            {/* <Avatar
            className="w-52 flex mx-auto"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image"
            size="sm"
          /> */}
            <Typography variant="h6" className="mt-4">
              Sagar Singh
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              Delhi
            </Typography>
            <Rating
              className="flex items-center justify-center"
              value={5}
              readonly
            />
          </section>

          <section className="p-8 text-center font-glacial">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-6 text-lg md:text-2xl font-medium text-center md:text-justify"
            >
              &quot;Nestled in nature, this cottage resort offers tranquility and charm. Cozy interiors, stunning views, and exceptional service create a perfect getaway. Ideal for relaxation and rejuvenation, it's a hidden gem worth every moment.&quot;
            </Typography>
            {/* <Avatar
            className="w-52 flex mx-auto"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image"
            size="sm"
          /> */}
            <Typography variant="h6" className="mt-4">
              Deepak
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              Siwan, Bihar
            </Typography>
            <Rating
              className="flex items-center justify-center"
              value={5}
              readonly
            />
          </section>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
