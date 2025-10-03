import React, { useState } from "react";
import { CardItem } from "./CardItem";
import { CategoriesItem } from "./CategoriesItem";

export const ManuItemes = ({ manuItem,selected }) => {
  const [isOpen, setOpen] = useState(true);
 

// If it has categories, render categories recursively

  if ("categories" in manuItem) {
    return (
      <div className="w-[800px] mx-auto m-4 mt-6">
        <p className="font-bold text-xl mb-4">{manuItem.title}</p>
        <div>
          {manuItem.categories.map((item) => (
            <CategoriesItem key={item.title} manuItem={item} selected={selected} />
          ))}
        </div>
      </div>
    );
  }

  if (selected==='veg') {
    return(
       <div className="w-[800px] mx-auto my-4">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold text-[#02060ceb]">
          {manuItem?.title}
        </p>
        <button
          className="text-2xl font-bold"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "⌄" : "⌃"}
        </button>
        
      </div>
      <div className="w-full h-2 bg-gray-200"></div>

      {isOpen && (
        <div className="mt-4">
          {manuItem?.itemCards?.filter((food)=>'isVeg' in food?.card?.info).map((Item) => (
            <CardItem
              key={Item?.card?.info?.id}
              cardInfo={Item?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
    )
  }
  
  if (selected==='nonveg') {
     return(
       <div className="w-[800px] mx-auto my-4">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold text-[#02060ceb]">
          {manuItem?.title}
        </p>
        <button
          className="text-2xl font-bold"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "⌄" : "⌃"}
        </button>
        
      </div>
      <div className="w-full h-2 bg-gray-200"></div>

      {isOpen && (
        <div className="mt-4">
          {manuItem?.itemCards?.filter((food)=>!('isVeg' in food?.card?.info)).map((Item) => (
            <CardItem
              key={Item?.card?.info?.id}
              cardInfo={Item?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
    )
  }

  return (
    <>
    <div className="w-[800px] mx-auto my-4">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold text-[#02060ceb]">
          {manuItem?.title}
        </p>
        <button
          className="text-2xl font-bold"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "⌄" : "⌃"}
        </button>
        
      </div>
      <div className="w-full h-2 bg-gray-200"></div>

      {isOpen && (
        <div className="mt-4">
          {manuItem?.itemCards?.map((Item) => (
            <CardItem
              key={Item?.card?.info?.id}
              cardInfo={Item?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
    </>
  );
};
