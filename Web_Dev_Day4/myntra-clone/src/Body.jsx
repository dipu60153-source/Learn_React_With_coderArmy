import React from "react";
import styles from "./Body.module.css";

const Body = ({ cloth, discount, shop, image }) => {
  // const obj = [
  //   {
  //     cloth: "T-short",
  //     discount: "50-60% off",
  //     shop: "shop new",
  //   },
  //    {
  //     cloth: "T-short",
  //     discount: "50-60% off",
  //     shop: "shop new",
  //   },
  //    {
  //     cloth: "short",
  //     discount: "40-60% off",
  //     shop: "shop new",
  //   },
  //    {
  //     cloth: "pant",
  //     discount: "50-70% off",
  //     shop: "shop new",
  //   },
  //    {
  //     cloth: "show",
  //     discount: "30-40% off",
  //     shop: "shop new",
  //   },
  //    {
  //     cloth: "jeans",
  //     discount: "60-80% off",
  //     shop: "shop new",
  //   },
  // ];

  return (
    <div className={styles.card1}>
      <div className={styles.card}>
        <img src={image} alt="" />
        <h4>{cloth}</h4>
        <h2>{discount}</h2>
        <h4>{shop}</h4>
      </div>
    </div>
    
  );
};

export default Body;
