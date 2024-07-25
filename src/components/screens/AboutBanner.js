import React from "react";
import UseIsDesktop from "./UseIsDesktop"; // Adjust the import path if necessary

function AboutBanner() {
  const isDesktop = UseIsDesktop();

  return (
    <div className="w-full bg-[#d2d2b4] bg-cover bg-opacity-80">
      <div className="flex flex-col gap-3 md:gap-0 py-10 text-[#40392d]">
        <div className="py-5">
          <h1 className="w-fit mx-auto text-2xl md:text-4xl tracking-widest font-berkshire text-center">
            Indulge in Peace: Your Premier HomeStay in Mukteshwar
          </h1>
        </div>
        <div className="flex flex-col gap-5 p-3 md:py-10 md:m-14 md:mb-0 md:mt-0">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <p className="w-full text-lg md:text-2xl px-3 font-glacial text-justify">
              Seeking a resort or hotel in Mukteshwar? Then Indus Valley Resort can be the perfect choice for you. Situated in the heart of nature's embrace, our resort offers bliss for those seeking a revive escape from the hustle and bustle of daily life. Whether you're looking for a family adventure, a romantic getaway, or just a peaceful hideout, Indus Valley Resort promises an unforgettable experience. It's the best place to find cozy cottages in Mukteshwar and treat you to luxury at Divine Retreat. This resort is one of the best tourist spots.
            </p>
            <video
              className="lg:object-cover w-full md:w-1/3 xl:w-1/2 md:h-96 md:rounded-full border-4 border-yellow-600"
              autoPlay
              muted
              loop
              src="/bg_video/Gallery2.mp4" type="video/mp4"
              // src="https://res.cloudinary.com/dqeka0ibm/video/upload/v1719483824/Gallery2_owyo52.mp4"
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-5 items-center justify-center">
            <div className="w-full flex flex-col gap-5 mt-10">
              <h2 className="w-fit mx-auto px-3 text-xl md:text-3xl tracking-widest font-berkshire text-center md:text-left lg:text-justify">
                Discover the Ultimate Retreat in the best Hotel in Mukteshwar
              </h2>
              <p className="text-lg md:text-2xl px-3 font-glacial text-justify">
                Experience the best homestay in Mukteshwar with a beautiful Himalayan view. Our resort and cottages have everything you need for a comfy stay. Here, every aspect of your stay is precisely organized to ensure utmost comfort and satisfaction. Apart from cozy cottages, we have the finest restaurant- Hillcrest cafe where you can have delicious dining options showcasing local flavors and a party venue where you can make your gathering a special and precious moment.
              </p>
              <a
                className="bg-[#434E57] w-fit md:mx-20 px-3 text-center md:hover:bg-white mx-auto md:hover:text-black text-white border-2 border-yellow-600 duration-700 rounded-tr-2xl rounded-bl-2xl p-3 font-glacial"
                href="/contact"
                aria-label="Book Now"
              >
                Book now for an unforgettable experience.
              </a>
            </div>
            <video
              className="lg:object-cover w-full md:w-1/3 xl:w-1/2 md:h-96 md:rounded-full border-4 border-yellow-600"
              autoPlay
              muted
              loop
              src="/bg_video/GalleryOv.mp4" type="video/mp4"
              // src="https://res.cloudinary.com/dqeka0ibm/video/upload/v1719482609/GalleryOv_g2382b.webm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
