import React from "react";
import ReviewCard from "./ReviewCard";
import {v4} from "uuid";

const reviews = [
  {
    name: "John Sheehan",
    comment:
      "We stayed in the hotel in April as we were guests at a wedding in the hotel. We had a fabulous time! The wedding we attended started at 2.30pm and we emailed ahead to see if we could check into our room early, the reception staff were very obliging and allowed us to check in at 2pm, which gave us time to unpack and get ready for the wedding. "
  },
  {
    name: "Diana Tifrea",
    comment:
      "We booked 4 rooms and stayed here at weekend 2 nights, for a family christening nearby, we got an upgrade which was lovely, can't fault this hotel one bit, the intire staff were very helpful and obliging to everything including travel cots at a whim, food was excellent too, will definately return",
    img: null,
  },
  {
    name: "Nicola Finnegan",
    comment:
      "Stayed for 3 nights in this lovely Central hotel. The rooms were clean and we had a great view of the castle . The hotel is so handy to all Kilkenny has to offer, we ate in the bar one evening and had great breakfasts each morning. Staff were friendly and more than helpful.",
    img: null,
  },
  {
    name: "WChloe Vundla",
    comment:
      "Lovely hotel, really central. We parked and didn't move the car until we left. Keep driving round to the back of the hotel for parking though, don't bother squeezing into a spot in the front carpark..",
    img: null,
  },
];

const ReviewsSection = () => {
  return (
    <div className="flex flex-col max-w-[100%]">
      <h3 className="text-xl text-center max-w-[60vw] mx-auto font-bold text-textPrimary mb-8">
        Some of our satisfied visitors
      </h3>
      {/* cards */}
      <div className="flex flex-row overflow-x-auto gap-6 p-2">
        {reviews.map((item) => (
          <ReviewCard key={v4()} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
