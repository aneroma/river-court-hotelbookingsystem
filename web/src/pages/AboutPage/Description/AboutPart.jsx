import React from "react";
import {BsBuilding, BsClock, BsWifi} from "react-icons/bs";
import {GiFlowerPot, GiDesk} from "react-icons/gi";
import {RiParkingBoxLine} from "react-icons/ri";
import {MdOutlineFoodBank} from "react-icons/md";
import {v4} from "uuid";

const features = [
 
  {Icon: BsWifi, name: "Free Wifi"},
  {Icon: RiParkingBoxLine, name: "Free Parking"},
  {Icon: MdOutlineFoodBank, name: "Kitchen"},
  {Icon: GiDesk, name: "Dedicated Workspace"},
  {Icon: GiFlowerPot, name: "Garden View"},
];

const AboutPart = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* top part */}
      <div>
        <h2 className="text-textPrimary font-bold text-2xl mb-2 lg:max-w-[30ch]">
                Welcome to the
            Kilkenny River Court Hotel
        </h2>
        <div className="flex flex-row items-center text-sm text-textPrimary gap-1">
          <span>6 Guests</span>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <span>4 Bedrooms</span>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <span>6 Beds</span>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <span>5 Baths</span>
        </div>
      </div>

      <div className="w-full h-px bg-gray-400" />

      {/* Ambition part */}
      <div>
        <span className="block mb-4 text-4xl font-bold text-textPrimary">
          Our <span className="text-primary-400">ambition</span>
        </span>
        <p className="text-sm leading-[1.7]">
        On the banks of the River Nore in the heart of the medieval city of Kilkenny.

With magnificent views of the city's 12th-century Kilkenny Castle, The Kilkenny River Court Hotel has a quiet location set in a private courtyard and conveniently situated back from the busy Kilkenny streets. The main shopping areas, theatres, entertainment, tourist attractions and Kilkenny’s Medieval Mile are all close by right on the hotel’s doorstep.

Each of our large and comfortable guestrooms are stylishly decorated with beautiful fine furnishings, crisp white linens and soft relaxing tones, ensuring a restful night’s sleep. We also offer FREE Wi-Fi throughout this Kilkenny Hotel and complimentary car parking for our hotel residents and patrons. 

Some guestrooms overlook the River Nore and some with stunning views of Kilkenny Castle.   

Guests can dine at the award-winning Riverside Restaurant and Riverview Bar which offers an al fresco dining experience in the summertime. The hotel can also host weddings, corporate events and special family occasions. 

The Kilkenny River Court Hotel is part of the Neville Hotel Group with hotels located in Dublin, Wicklow and Waterford.
        </p>
      </div>

      <div className="w-full h-px bg-gray-400" />

      {/* Established part */}
      <div className="">
        <h6 className="font-bold text-sm text-textPrimary flex flex-row items-center gap-2 mb-1">
          <BsBuilding className="text-lg" />
          <span>Established in</span>
        </h6>
        <p className="text-sm">25 November 2009</p>
        <h6 className="font-bold text-sm text-textPrimary mt-4 flex flex-row items-center gap-2">
          <BsClock className="text-lg" />
          <span>Free cancellation for 48 hours</span>
        </h6>
      </div>

      <div className="w-full h-px bg-gray-400" />

      {/* Features */}
      <div className="flex flex-col">
        <h5 className="font-bold text-textPrimary mb-4">
          What this place offers
        </h5>
        <div className="grid grid-cols-2 gap-2">
          {features.map(({Icon, name}) => (
            <span
              key={v4()}
              className="text-sm text-textPrimary flex flex-row items-center gap-2"
            >
              <Icon className="text-lg" /> {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
