import React from "react";
import { Link } from "react-router";

export const Header = () => {
  return (
    <>
      <header className="bg-[#ff5200]">
        <div className=" flex justify-between container mx-auto py-8">
          <img
            className="w-42 h-13"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt=""
          />
          <div className="text-white flex gap-12 pointer-coarse: text-base font-bold items-center">
            <a target="_blank" href="https://www.swiggy.com/corporate/">
              Swiggy Corporate{" "}
            </a>
            <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
              Partner with us
            </a>
            <a target="_blank" className="border  rounded-2xl p-3" href="">
              Get the App
            </a>
            <a
              target="_blank"
              className="border-black bg-black  rounded-2xl p-3"
              href=""
            >
              Sign In
            </a>
          </div>
        </div>

        <div className="py-10 relative">
          <img
            className="h-110 w-60 absolute top-0 left-0"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt=""
          />
          <img
            className="h-110 w-60 absolute top-0 right-0"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt=""
          />
          <div className="text-5xl text-white font-bold max-w-[60%] container mx-auto text-center">
            Order Food and groceries. Descover best restorents.Swiggy it!
          </div>

          <div className="  max-w-[70%] container mx-auto flex gap-3 mt-8 ">
            <input
              className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"
              type="text"
              placeholder="Enter your delivery location"
            />
            <input
              className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl "
              type="text"
              placeholder="Search for restaurant, item or more"
            />
          </div>
          <div className="max-w-[80%] container mx-auto flex mt-10">
            <Link to="/RestorantOption">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
                alt=""
                />
              </Link>
            
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
                alt=""
              />
            </a>
            <a href="https://www.swiggy.com/dineouts">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
                alt=""
              />
            </a>
            
          </div>
        </div>
      </header>
    </>
  );
};
