import React from "react";
import { Header } from "./Header";
import { FootOption } from "./FootOption";
import { GroceryOption } from "./GroceryOption";
import { BestRestorant } from "./BestRestorent";
// import { BestRestorant } from "./BestRestOption";


export const Home = () => {
  return (
    <div>
      <Header />
      <FootOption />
      <GroceryOption />
      {/* <BestRestorant /> */}
      <BestRestorant/>
    </div>
  );
};
