import React from "react";

function GoogleMap({ google_map }) {
  return (
    <div className="margin-lg-115t margin-sm-50t no-padd">
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="true"
        data-vc-stretch-content="true"
        className="contact_map row-fluid no-padd margin-lg-115t margin-sm-50t no-padd relative box-border"
      >
        <div className="google-maps w-full">
          <h3 className="w-fit mx-auto text-2xl md:text-4xl  p-5 hover:underline font-times font-bold text-center">
            GOOGLE LOCATION
          </h3>
          <iframe
            src="https://www.google.com/maps/dir//Poetry+By+The+Hills+Dhanachuli,+Mukteshwar,+Nainital,+43,+The+Indus+Valley,+Near+Dhanachuli+Bend,+Sunderkhal,+Mukteshwar,+Uttarakhand+263132,+India/@29.3987129,79.5944484,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39a0bf1f10742455:0xba59eaa7c84ae26a!2m2!1d79.6768498!2d29.3987382?hl=en&entry=ttu"
            className="w-full h-52 md:min-h-screen border-0"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
