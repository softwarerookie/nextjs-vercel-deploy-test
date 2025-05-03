"use client";
import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button
        className="border border-red-400 p-1 text-xl text-red-400"
        onClick={() => setCount(count + 1)}
      >
        count++
      </button>
      <div className="text-2xl">count:{count}</div>
    </div>
  );
}
