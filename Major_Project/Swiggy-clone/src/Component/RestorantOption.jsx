import React, { useEffect, useState } from "react";
import { ReastCard } from "./ReastCard";
import { Shimmier } from "./Shimmier";

export const Restorant = () => {
  const [RestData, SetRestData] = useState([ ]);

  useEffect(() => {
    async function fetchData() {
      const SwiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2869515&lng=85.8152745&is-seo-homepage-enabled=true";
      const proxyServer = "https://cors-anywhere.herokuapp.com/";

      
        const responce = await fetch(proxyServer + SwiggyAPI);
        const data = await responce.json();
        
        SetRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      
    }
    fetchData();
  }, []);
  if (RestData.length==0) {
    return <Shimmier/>
    
  }

  return (
    <div className="flex flex-wrap w-[85%] mx-auto bg-amber-0 ">
      { 
        RestData.map((restInfo) => (
          <ReastCard key={restInfo.info.id} restInfo={restInfo} />
       )) }
    </div>
    // <h1 className="mb-40">jskfherhfihihe</h1>
  );
};
