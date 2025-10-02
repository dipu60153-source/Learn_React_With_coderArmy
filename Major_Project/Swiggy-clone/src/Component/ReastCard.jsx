import React from "react";
// import {FontAwesomeIcon}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

export const ReastCard = ({ restInfo }) => {
  return (
    <>
      <Link to={"/city/bhubaneswar/" + restInfo.info.id}>
        {/* <h1 className="">Top restaurant chains in Bhubaneswar</h1> */}
        <div className=" rounded-2xl shadow-[20px] w-[282px] h-[286px] transform transition duration-200 hover:scale-90 pl-8 mt-5">
          <img
            className="w-[260px] h-[150px] object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restInfo.info.cloudinaryImageId
            }
            alt="hghgchcc"
          />
          <div className=" w-[95%] mx-auto">
            <h1 className="text-[18px] text-[#02060ceb] font-[700]">
              {restInfo.info.name}
            </h1>
            <div className="text-[#02060ceb]  font-bold">
              <span className="w-4 h-4 bg-green-700 rounded-2xl text-[16px]  ">
                <FontAwesomeIcon className="text-amber-50" icon={faStar} />
              </span>{" "}
              <span>{restInfo.info.avgRatingString} </span>{" "}
              <span>{restInfo.info.sla.slaString}</span>
            </div>
            <p className="text-[16px] text-[#02060c99] font-[200]">
              {restInfo.info.cuisines[0]}{" "}
            </p>
            <p className="text-[16px] text-[#02060c99] font-[200]">
              {restInfo.info.areaName}{" "}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
