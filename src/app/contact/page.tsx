import React from "react";
import { notFound } from "next/navigation";

export default function Contact() {
  if (!0) {
    // 局部notfound页面需要手动调用
    notFound();
  }
  return <div>联系</div>;
}
