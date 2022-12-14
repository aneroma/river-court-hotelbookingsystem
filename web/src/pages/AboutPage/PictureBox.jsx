import React from "react";
import {aboutPictureState, aboutPicturesCollection} from "../../atoms";
import {useRecoilState, useRecoilValue} from "recoil";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import {v4} from "uuid";

const PictureBox = () => {
  const images = useRecoilValue(aboutPicturesCollection);
  const [activeIndex, setActiveIndex] = useRecoilState(aboutPictureState);

  // scroll left
  function scrollLeft() {
    setActiveIndex((prev) => {
      if (prev - 1 < 0) {
        return images.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  // scroll right
  function scrollRight() {
    setActiveIndex((prev) => {
      if (prev + 1 > images.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  return (
    <div className="picture-box-container">
      {images.map((img, index) => (
        <div
          key={v4()}
          className={`relative w-full ${
            activeIndex === index ? "block" : "hidden"
          } lg:block img${index + 1}`}
        >
          <img
            src={img}
            alt=""
            className="object-cover rounded-3xl lg:rounded-none max-h-[300px] w-full"
          />
          <button
            className="bg-white rounded-full p-2 lg:p-4 absolute top-1/2 shadow-md -translate-y-1/2 left-0 -translate-x-1/2 lg:hidden"
            onClick={scrollLeft}
          >
            <FaChevronLeft className="text-lg text-textPrimary" />
          </button>
          <button
            className="bg-white rounded-full p-2 lg:p-4 absolute top-1/2 shadow-md -translate-y-1/2 right-0 translate-x-1/2 lg:hidden"
            onClick={scrollRight}
          >
            <FaChevronRight className="text-lg text-textPrimary" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PictureBox;
