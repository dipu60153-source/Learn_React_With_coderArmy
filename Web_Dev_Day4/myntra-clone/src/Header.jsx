import React from "react";
import style from "./Header.module.css";

const Header = () => {
  const element = [
    "man",
    "woman",
    "kids",
    "home",
    "beauty",
    "studio",
    "contact",
    "gjktgjgf"
  ];
  const profile = ["profile", "whishList", "bag","jfhkshdfk"];
  return (
    <>
      <div className={style.Header}>
        <div className={style.logo}>
          <img
            className={style.img1}
            src="https://tse1.mm.bing.net/th/id/OIP.oXQULGrNzN5P091CI1hq2wHaHa?pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className={style.option}>
          {element.map((v) => (
            <button className={style.but}>{v}</button>
          ))}
          {/* <button className={style.but}>Man</button>
          <button className={style.but}>Woman</button>
          <button className={style.but}>Kids</button>
          <button className={style.but}>Home</button>
          <button className={style.but}>beauty</button>
          <button className={style.but}>Beauty</button>
          <button className={style.but}>Studio</button>
          <button className={style.but}>Geng</button> */}
        </div>

        <div className={style.searchbar}>
          <input
            className={style.inputSearch}
            type="text"
            placeholder="Search for products, brands and more.."
          />
        </div>

        <div className={style.profile}>
          {profile.map((l) => (
            <button className={style.btn_profile}>{l}</button>
          ))}
          {/* <button className={style.btn_profile}>Profile</button>
          <button className={style.btn_profile}>WhishList</button>
          <button className={style.btn_profile}>Bag</button> */}
        </div>
      </div>
    </>
  );
};

export default Header;
