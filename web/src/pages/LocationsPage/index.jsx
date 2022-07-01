import React from "react";
import PageMain from "../../components/PageMain";
import ArticleSection from "./ArticleSection";
import {v4} from "uuid";
import {Link} from "react-router-dom";

const articles = [
  {
    header: {
      title: "Druids Glen Hotel & Golf Resort",
    },
    desc: "At the 5 star Druids Glen Hotel & Golf Resort, nature and luxury meet to create a memorable escape. Nestled in 360 acres of countryside between the Wicklow Mountains and the Irish Sea, yet only thirty minutes from Dublin, Druids Glen provides a sanctuary from the hustle and bustle of everyday life",
    img: "https://www.druidsglenresort.com/cmsGallery/imagerow/8354/resized/800x800/presidential_suite_lounge_1200_x_600.jpg",
    reverse: true,
  },
  {
    header: {
      title: "Royal Marine Hotel",
    },
    desc: "The Luxury 4 Star Royal Marine Hotel, situated In Dún Laoghaire overlooking Dublin Bay. A historic and prestigious 4-star hotel in South Dublin. Complimentary Wifi. Free Cancellation. 4 Star Luxury Hotel. Best Rate Guaranteed. No Booking Fee. Complimentary Car Parking..",
    img: "https://www.royalmarine.ie/cmsGallery/photo/5315/resized/800x800/hotel_royal_marine_2.jpeg",
  },
  {
    header: {
      title: "The Tower Hotel",
    },
    desc: "Free WiFi, onsite parking, swimming pool & gym, and both informal & formal dining options. In the heart of Waterford an excellent location. Book Today and Save. Free Parking. 20m Pool, Leisure Club. Award Winning Restaurant. Free WiFi. Family Friendly Hotel.",
    img: "https://www.towerhotelwaterford.com/cmsGallery/photo/4394/resized/800x800/pier_37_bar_grill_waterford_city.jpg",
    reverse: true,
  },
  {
    header: {
      title: "The River Court Hotel",
    },
    desc: "Kilkenny River Court has magnificent views of the city's 12th-century Kilkenny Castle. Located on the banks of the River Nore in the heart of the medieval city of Kilkenny..",
    img: "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/riverside_restaurant_1600_x_900_2.jpg",
  },
];

const LocationsPage = () => {
  return (
    <PageMain className="pt-5 flex flex-col gap-12 justify-center items-start mb-12">
      {articles.map((article) => (
        <ArticleSection key={v4()} {...article} />
      ))}
      <div className="flex flex-col gap-6 justify-start">
        <span className="text-xl font-bold text-textPrimary">
          Sister hotels
        </span>
        <Link to="/rooms" className="btn-primary w-max">
          Check rooms
        </Link>
      </div>
    </PageMain>
  );
};

export default LocationsPage;
