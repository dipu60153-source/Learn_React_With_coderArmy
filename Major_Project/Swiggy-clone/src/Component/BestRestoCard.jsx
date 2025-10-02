import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPercent } from "@fortawesome/free-solid-svg-icons";

export const BestRestoCard = ({ ReastData }) => {
  return (
    <div className="max-w-sm flex-none shadow-2xl rounded-2xl">
      <a href={ReastData.cta.link}>
        <div className="relative">
          <img 
            className="w-80 h-50 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              ReastData?.info?.mediaFiles[0]?.url
            }
            alt=""
          />

          <p className=" absolute bottom-2  left-2  text-xl font-bold text-white z-10">
            {ReastData.info.name}
          </p>
          <p className=" absolute bottom-2  right-2 text-xl font-bold text-white z-10">
            {ReastData.info.rating.value}{" "}
          </p>
          <div className="absolute bg-gradient-to-t from-black h-10 bottom-0 left-0 right-0"></div>
        </div>
      </a>
      <div className="p-[10px]">
        <div className="flex  justify-between text-[13px] text-[#02060c99]">
          <p>
            {ReastData.info.cuisines[1]}.{ReastData.info.cuisines[0]}
          </p>
          <p className="fixd right-0">{ReastData.info.costForTwo}</p>
        </div>
        <div className="flex justify-between text-[13px] text-[#02060c99]">
          <p>{ReastData.info.locationInfo.formattedAddress}</p>
          <p>{ReastData.info.locationInfo.distanceString}</p>
        </div>
        <h1 className="bg-[#9b9ea299] text-white mt-3 px-3 rounded-2xl text-[13px] w-[130px] h-[21px]">
          <FontAwesomeIcon icon={faCircleCheck} />{" "}
          {ReastData.info.vendorOffer.offerHighlights[0].logoCtx.text}
        </h1>
        <div className="bg-[#1ba672] rounded-xl mt-3 pt-[6px] text-[14px] px-[12px] w-[302px] flex justify-between h-[36px] text-[#02060c99]">
          <p>
            {" "}
            <FontAwesomeIcon icon={faPercent} />{" "}
            {` ${ReastData.info?.offerInfoV3?.vendorOffer?.title} ${ReastData.info?.offerInfoV3?.vendorOffer?.subtitle}`}
          </p>
          <p>{ReastData.info?.offerInfoV3?.vendorOffer?.subtext}</p>
        </div>

        <h1 className=" bg-[#c8f9e5] rounded-xl text-[16px] px-[12px] pt-[6px] mt-3 w-[302px] h-[36px] text-[#02060c99]">
          {ReastData.info.customerOffer.infos[0].description}
        </h1>
      </div>
    </div>
  );
};
