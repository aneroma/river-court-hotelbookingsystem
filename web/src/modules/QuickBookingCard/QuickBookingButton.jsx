import React from "react";

const QuickBookingButton = ({
  primaryLabel,
  secondaryLabel,
  className,
  toggleShow,
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center w-full justify-between">
      <button
        className={`text-textPrimary flex flex-col gap-1 w-full flex-grow p-4 rounded-3xl hover:bg-gray-50 lg:w-max ${className}`}
        onClick={toggleShow}
      >
        <span className="font-bold text-sm">{primaryLabel}</span>
        <span className="text-xs">{secondaryLabel}</span>
      </button>
      <div className="h-px w-[90%] mx-auto lg:mx-0 lg:h-[3rem] bg-gray-200 lg:w-px" />
    </div>
  );
};

export default QuickBookingButton;
