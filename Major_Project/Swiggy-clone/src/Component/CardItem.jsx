import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faStairs,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const CardItem = ({ cardInfo }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {/* main card box */}
      <div className="flex  justify-between items-start w-[800px]">
        {/* Left side content  */}
        <div className="w-[70%] ">
          {/* Item Name  */}
          <p className="text-[#02060cbf] text-[16px] font-[600]  ">
            {cardInfo?.name}{" "}
          </p>
          {/* Item pries */}
          <span>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
          </span>{" "}
          <span className="text-[#02060cbf]  font-[600] mt-2">
            {cardInfo?.defaultPrice / 100}
          </span>
          {/* Item Rating */}
          <p className="w-[552px] h-[17px] mt-3 text-[13px] flex gap-1">
            <span className="text-green-800 w-[px] h-[10px] ">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              {cardInfo?.ratings?.aggregatedRating?.rating}
              {"(" + cardInfo?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
            </span>
          </p>
          {/* Item Description */}
          <p
            className={`"font-[200] text-[16px] text-[#02060c99] tracking-[-0.4px]  mt-3 text-sm  leading-snug ${
              showMore ? "" : "line-clamp-2"
            }`}
          >
            {cardInfo.description}{" "}
          </p>
          {/* Item Description Functionality */}
          {cardInfo.description.length > 150 && (
            <button
              className="text-green-600 text-xs font-medium mt-1"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "less" : "more"}
            </button>
          )}
        </div>

        {/* Right side content */}
        <div className="w-[20%] relative">
          {/* Item img */}
          <div className="w-[156px] h-[178px]">
          <img
            className="w-[156px] h-[144px] object-cover rounded-xl "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              cardInfo.imageId
            }
            alt=""
          />
          </div>

          {/* Item add button */}
          <button className=" absolute bottom-[15px] w-[120px] h-[38px] left-5 rounded-xl text-[#1ba672] text-[18px] font-[600]  bg-white px-4 py-2 shadow-xl border-[1px] ">
            ADD
          </button>

          <p className="text-[#02060c73] absolute left-10 bottom-[-4px] text-[13px]">
            Customisable
          </p>
        </div>
      </div>
      <p className="text-[4px] bg-gray-300 my-5 w-full h-[1px] text-gray-300"></p>
    </>
  );
};
