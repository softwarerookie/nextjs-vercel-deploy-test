"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const menuList: Array<Record<string, string>> = [
    {
      name: "首页",
      href: "/",
    },
    {
      name: "关于",
      href: "/about",
    },
    {
      name: "新闻",
      href: "/news",
    },
    {
      name: "案例",
      href: "/case",
    },
    {
      name: "联系我们",
      href: "/contact",
    },
  ];

  const menuClassNames =
    "w-20 h-20 hover:bg-red-300 hover:text-white text-center hover:transition-all transition-all hover:duration-500 duration-500 cursor-pointer";

  return (
    <div className="w-full h-20 bg-teal-300">
      <nav className="w-[980] mx-auto my-0 h-full flex items-center shrink-0 justify-center border-amber-50 border">
        {menuList.map((menu, i) => {
          return (
            <div
              key={menu.name}
              className={`${
                i === menuList.length - 1 ? "" : "mr-15"
              } ${menuClassNames} ${
                pathname === menu.href ? "bg-red-300 text-white" : ""
              }`}
            >
              <Link
                href={menu.href}
                prefetch
                className="text-base/20 w-full h-full inline-block"
              >
                {menu.name}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
