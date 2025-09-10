import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Increment } from "../../../Web_Dev_Day10/state-listting/src/Increment";
import { Increment,Decrement,Reset } from "./Slice";

export const Counting = () => {
  const count = useSelector((state) => state.slice1.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>counting is : {count}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
};
