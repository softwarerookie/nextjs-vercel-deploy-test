import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="w-full h-[200px] border border-red-600 text-center leading-[200px]">
        <p className="text-[30px]">
          page界面嵌套在template中，template界面嵌套在layout中
        </p>
      </div>
    </div>
  );
}
