import React from "react";
import { imageGridCards } from "../../Utils/SwiggyData";
import { FoodCard } from "./FoodCard";

export const FootOption = () => {
  return (
    <>
      <h1 className=" w-[85%] container mx-auto font-bold  text-[24px] font-serif text-2xl text-[#02060CEB] mt-20">
        Order our best food options
      </h1>
      <div className=" w-[85%] container mx-auto flex  flex-wrap mt-10 gap-7 ">
        {imageGridCards.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </>
  );
};
