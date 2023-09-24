"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { decrement, increment } from "@/redux/features/counterSlice";
import React from "react";

const Counter = () => {
  const { value } = useAppSelector((state) => state.counterSliceReducer);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {value}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
