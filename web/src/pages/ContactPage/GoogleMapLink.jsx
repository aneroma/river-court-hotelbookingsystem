import React from "react";
import {gmap} from "../../images";

const GoogleMapLink = () => {
  return (
    <div className="w-full relative rounded-3xl overflow-hidden before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-white/80 max-w-full">
      <img src={gmap} alt="" className="object-cover w-full h-auto" />
      <button className="absolute bottom-4 right-4 bg-primary-100 text-primary-400 font-bold px-6 py-3 rounded-3xl hover:text-primary-700">
      <a href="https://www.google.ie/maps/place/Kilkenny+River+Court+Hotel/@52.6515438,-7.2514511,923m/data=!3m2!1e3!4b1!4m8!3m7!1s0x4842c427e8f1d0bb:0xa964e5cba08d26b4!5m2!4m1!1i2!8m2!3d52.6515406!4d-7.2492571" className="btn btn-primary btn-lg"  role="button">Google Map Location</a>
      </button>
    </div>
  );
};

export default GoogleMapLink;
