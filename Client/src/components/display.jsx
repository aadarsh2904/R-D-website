import React from "react";
import Carousel from "./carousel";
import Notification from "./notification";

export default function display(){
  const images = [
    "./pic1rd.png",
    "./pic2rd.png",
    "./pic3rd.png",
    "./pic4rd.png",
    "./pic5rd.png",
  ];

  return (
    <div className="flex flex-row flex-wrap">
    <div className=" mt-4 w-[55%] h-[40rem] ml-4 p-2">
      <Carousel images={images} />
    </div>
    <div className="w-[38%] mx-auto"><Notification/></div>
    </div>
  );
};