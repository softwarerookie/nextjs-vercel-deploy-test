"use client";
import React from "react";

/**
 * template与layout的区别：
 * 1、layout页面在导航跳转后不会重新渲染，会保留状态，template跳转后不会保留状态
 * **/
export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = React.useState(0);
  return (
    <div className="border-[1px] border-gray-500 p-[20px] mt-5">
      Root template:
      <button
        className="w-[100px] h-[46px] rounded-[10px] bg-gray-700 text-white"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <p className="text-[24px]">template页面中的状态在路由跳转后会重置</p>
      <p className="text-[24px]">count:{count}</p>
      {children}
    </div>
  );
}
