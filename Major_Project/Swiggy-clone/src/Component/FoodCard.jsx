import React from "react";
import { Like } from "./../../../../Web_Dev_Day9/stopeWatch-project/src/like";

export const FoodCard = ({ foodData }) => {
  return (
    <div>
      <a href={foodData?.action.link}>
        <img
          className="w-40 h-50 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
          alt=""
        />
      </a>

    </div>
  );
};
