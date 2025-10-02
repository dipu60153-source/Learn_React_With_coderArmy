import React from "react";
import { imageGridCard } from "../../Utils/Grosary";
import { GroceryCard } from "./GroceryCard";
// import {Grosary} from "../../Utils/Grosary"

export const GroceryOption = () => {
  return (
    <div className="w-[85%] container mx-auto mt-20 ">
      <h1 className="font-bold font-serif text-[24px] text-[#02060CEB]">
        Shop groceries on Instamart
      </h1>
      <div className=" flex overflow-auto mt-10 gap-7 ">
        {imageGridCard.map((foodData) => (
          <GroceryCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  );
};
