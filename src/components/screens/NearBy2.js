import React from 'react';
import bg from '../assets/bg/nearby_bg4.jpg';

import img1 from '../assets/photos/nearby/img1.1.webp';
import img2 from '../assets/photos/nearby/img2.webp';
import img3 from '../assets/photos/nearby/img3.png';
import img4 from '../assets/photos/nearby/img4.webp';
import img5 from '../assets/photos/nearby/img5.webp';
import img6 from '../assets/photos/nearby/img6.webp';
import img7 from '../assets/photos/nearby/img7.webp';
import img8 from '../assets/photos/nearby/img8.webp';
import img9 from '../assets/photos/nearby/img9.webp';
import img10 from '../assets/photos/nearby/img10.webp';
import img11 from '../assets/photos/nearby/img11.webp';
import img12 from '../assets/photos/nearby/img12.webp';

function NearBy() {
  return (
    <div>
      <h3 className="text-3xl md:text-5xl text-center mt-10 py-5 md:py-10 font-french-canon">
        NEARBY SITES
      </h3>
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-10 p-3 md:py-10 bg-center bg-cover"
      >
        {/* Card 1 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-white shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img1} alt="Card1" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Forest Trekking
            </h2>
            <p className="text-lg md:text-xl font-times">0 KM</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img2} alt="Card2" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Bhalu Gaad Waterfall
            </h2>
            <p className="text-lg md:text-xl font-times">12 KM</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img3} alt="Card3" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Mahadev Temple
            </h2>
            <p className="text-lg md:text-xl font-times">15 KM</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img4} alt="Card4" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Satkhol Ashram
            </h2>
            <p className="text-lg md:text-xl font-times">26 KM</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img5} alt="Card5" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Paragliding Adventure
            </h2>
            <p className="text-lg md:text-xl font-times">35 KM</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img6} alt="Card6" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Bhimtal
            </h2>
            <p className="text-lg md:text-xl font-times">31 KM</p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img7} alt="Card7" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Mall Road Nainital
            </h2>
            <p className="text-lg md:text-xl font-times">46 KM</p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img8} alt="Card8" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Almora
            </h2>
            <p className="text-lg md:text-xl font-times">59 KM</p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img9} alt="Card9" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Jageshwar Dham
            </h2>
            <p className="text-lg md:text-xl font-times">65 KM</p>
          </div>
        </div>

        {/* Card 10 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img10} alt="Card10" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              RaniKhet
            </h2>
            <p className="text-lg md:text-xl font-times">80 KM</p>
          </div>
        </div>

        {/* Card 11 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img11} alt="Card11" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Binsar
            </h2>
            <p className="text-lg md:text-xl font-times">80 KM</p>
          </div>
        </div>

        {/* Card 12 */}
        <div className="max-w-md w-full mx-auto rounded-xl border-2 bg-gradient-to-r from-[#D61F62] to-[#c7f2c1] shadow-lg shadow-slate-200 animate__zoomIn3">
          <img className="rounded-t-xl w-full h-64 object-cover" src={img12} alt="Card12" />
          <div className="p-4">
            <h2 className="text-2xl text-green-800 font-glacial">
              Kausani
            </h2>
            <p className="text-lg md:text-xl font-times">108 KM</p>
          </div>
        </div>

        {/* Add more cards as needed */}
      </section>
    </div>
  );
}

export default NearBy;
