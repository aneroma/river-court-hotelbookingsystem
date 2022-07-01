import React from "react";

/**
 * Logo component
 * separate logo component to use in the different sections of the page
 */
const Logo = () => {
  function onClick() {
    window.location.href = "/";
  }

  return (
    <button
      className="flex justify-center items-center text-black text-2xl font-extrabold gap-[2px]"
      onClick={onClick}
    >
      <span className="italic">River Court</span>
      <span>Hotel</span>
    </button>
  );
};

export default Logo;
