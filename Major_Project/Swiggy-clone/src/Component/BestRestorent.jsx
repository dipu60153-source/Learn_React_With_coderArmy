import React from "react";
import { DineoutRestaurants } from "../../Utils/BestRastorantData";
import { BestRestoCard } from "./BestRestorentCard";
// import { DineoutRestaurants } from '../../Utils/BestRastorantData'

export const BestRestorant = () => {
  return (
    <>
      <div className="w-[85%] container mx-auto mt-20 mb-20">
        <h2 className="text-[24px] text-[#02060ceb] font-bold ">Discover best restaurants on Dineout</h2>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5">
          {DineoutRestaurants.map((ReastData) => (
            <BestRestoCard ReastData={ReastData} key={ReastData.info.id} />
          ))}
        </div>
      </div>
    </>
  );
};
