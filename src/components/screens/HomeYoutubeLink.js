import React from 'react'

const HomeYoutubeLink = () => {
  return (
    <div>
        <section className="py-5 flex flex-col justify-center items-center mt-0 pb-5 bg-cover md:bg-opacity-90 text-[#d2d2b4] ">
        <h3 className="w-fit mx-auto text-2xl md:text-4xl tracking-widest font-merriweather text-center py-10">
          Walk Through
        </h3>

        <div class="video-container">
          <iframe
            className="w-screen md:w-[75vw] h-96 md:h-[35vw]"
            src="https://www.youtube.com/embed/iSrSzcV5dVc" // Use the embed URL instead
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        https://www.youtube.com/watch?v=
      </section>
    </div>
  )
}

export default HomeYoutubeLink
