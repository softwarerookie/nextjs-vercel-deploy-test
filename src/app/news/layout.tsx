import React from "react";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-red-500  p-4 ">新闻页面子布局</div>
      {children}
    </div>
  );
}
