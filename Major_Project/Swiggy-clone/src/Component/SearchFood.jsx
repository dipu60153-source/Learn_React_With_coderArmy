import React from "react";
import { useState } from "react";
import { data, useParams } from "react-router";
import { useEffect } from "react";
import { LogIn } from "./../../../../UseContextPractice/useContext/src/Component/LogIn";

export const SearchFood = () => {
  const [food, setFood] = useState("");
  const [RestData, SetRestData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const SwiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=${id}`;
      const proxyServer = "https://cors-anywhere.herokuapp.com/";

      const responce = await fetch(proxyServer + SwiggyAPI);
      const data = await responce.json();
      //   console.log(data);

      let temData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      let filterData = temData?.filter((item) => "title" in item?.card?.card);
    //   console.log(filterData);]
      
      SetRestData(filterData);
    }
    if (food.length > 1) {
      fetchData();
    }
  }, [food]);
  return (
    <div className="w-[800px] mx-auto mt-20">
      <input
        className="w-full pl-10 py-3 text-2xl bg-gray-200 rounded-3xl"
        type="text"
        placeholder="search here"
        onChange={(e) => setFood(e.target.value)}
      />
    </div>
  );
};
