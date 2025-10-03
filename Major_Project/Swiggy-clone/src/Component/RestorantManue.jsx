import React, { useState } from "react";
import { data, useParams } from "react-router";
import { useEffect } from "react";
import { ManuItemes } from "./ManuItemes";
import {Link} from 'react-router'

export const RestorantManue = () => {
  let { id } = useParams();
   const [selected,setSelected]=useState(null)
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
    <div className="w-[800px] mx-auto mt-20 mb-20">
      <Link to={`/city/bhubaneswar/${id}/search`}>
      <p className="text-2xl w-full text-center py-4 bg-gray-200 rounded-3xl ">search for dishes</p>
      </Link>
    </div>

    <div className="w-[800px] mx-auto my-4  mb-20 ">
      <button className={`text-2xl py-2 px-8 border rounded-2xl mr-4 ${selected==='veg'?  'bg-green-500':"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>veg</button>
      <button className={`text-2xl py-2 px-8 border rounded-2xl ${selected==='nonveg'? 'bg-red-500': 'bg-gray-300'}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>non veg</button>
    </div>

      <div className="w-[85%] mx-auto">
        {RestData.map((manuItem) => (
          <ManuItemes
            key={manuItem?.card?.card?.title}
            manuItem={manuItem?.card?.card} selected={selected}
          />
        ))}
      </div>
    </>
  );
};
