import React from "react";
import Chip from "../../components/Chip";
import {GrLocation} from "react-icons/gr";
import PictureBox from "./PictureBox";

const Carousal = () => {
  return (
    <div className="w-full py-4">
      <div className="mb-12">
        <h4 className="text-3xl font-bold text-textPrimary mb-4">
        River Court Hotel
        </h4>
        <div className="flex flex-row justify-start items-center gap-2">
        <Chip label={<GrLocation className="text-lg fill-textSecondary" />} />
          <Chip label="Leinster, Co. Kilkenny, R95 Y104 " />
        </div>
      </div>
      <PictureBox />
    </div>
  );
};

export default Carousal;
