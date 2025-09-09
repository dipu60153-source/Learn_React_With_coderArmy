import React from "react";
import { Outlet ,Link} from "react-router";
// import { Hello } from "./Hello";
// import { Hi } from "./Hi";

export const Detail = () => {
  return (
    <>
      <nav>
        <Link to="/Detail">Detail</Link>
        <Link to="Hello">Hello</Link>
        <Link to="Hi">Hi</Link>
      </nav>
      <h1>Detail</h1>
      <Outlet></Outlet>
    </>
  );
};
