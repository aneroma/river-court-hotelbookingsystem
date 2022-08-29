import React from "react";
// import {heroImg} from '../../images';
import QuickBookingCard from "../../modules/QuickBookingCard";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <img
        src="https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/conference_space_1600_x_900_2.jpg"
        alt=""
        className="rounded-3xl h-[80vh] w-full object-cover"
      />
      <QuickBookingCard className="-translate-y-1/4" />

      <div className="flex flex-col justify-center items-center lg:mt-[10vh]">
        <span className="font-extrabold text-2xl lg:text-4xl text-textPrimary">
          Make your holidays
        </span>
        <span className="font-extrabold leading-[0.9] text-[68px] lg:text-8xl text-primary-400">
          Amazing
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
