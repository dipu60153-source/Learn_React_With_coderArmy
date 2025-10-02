import React from "react";

export const GroceryCard = ({ foodData }) => {
  return (
    <>
      <div className="w-40 h-65 flex-shrink-0">
        <a href={foodData?.action.link}>
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              foodData?.imageId
            }
            alt=""
          />
        </a>
        <h1 className="text-2xl font-sans text-[#02060cbf]">{foodData?.action?.text}</h1>
      </div>
    </>
  );
};
