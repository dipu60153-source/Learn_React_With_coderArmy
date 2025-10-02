import React, { useState } from "react";
import { data, useParams } from "react-router";
import { useEffect } from "react";
import { ManuItemes } from "./ManuItemes";

export const RestorantManue = () => {
  let { id } = useParams();
  // console.log(id)

  const [RestData, SetRestData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const SwiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=${id}`;
      const proxyServer = "https://cors-anywhere.herokuapp.com/";

      const responce = await fetch(proxyServer + SwiggyAPI);
      const data = await responce.json();
      let temData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      let filterData = temData?.filter((item) => "title" in item?.card?.card);

      SetRestData(filterData);
    }
    fetchData();
  }, []);

  // console.log(RestData)
  return (
    <>
      <div className="w-[85%] mx-auto">
        {RestData.map((manuItem) => (
          <ManuItemes
            key={manuItem?.card?.card?.title}
            manuItem={manuItem?.card?.card}
          />
        ))}
      </div>
    </>
  );
};
