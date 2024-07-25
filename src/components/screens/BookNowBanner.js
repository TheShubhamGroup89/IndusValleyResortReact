import React from "react";

const BookNowBanner = () => {
  return (
    <div className="bg-[#394422] border-y-8 border-yellow-600">
      <div className="flex flex-col justify-center items-center p-5 gap-5">
        <p className="text-xl font-glacial font-semibold text-center text-white tracking-widest">
          RESERVE YOUR NEXT STAY WITH US
        </p>
        <a
          className=" bg-[#d2d2b4] md:hover:bg-white text-green-950 md:hover:text-black border-2 border-yellow-600 duration-700 p-2 px-4  font-glacial"
          href="/contact-indus-valley-resort"
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOK NOW
        </a>
      </div>
    </div>
  );
};

export default BookNowBanner;
