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
    <div className="flex flex-row flex-wrap ">
    <div className=" mt-4 min-w-[55%] min-h-[70vh]:lg p-2 mx-auto">
      <Carousel images={images} />
    </div>
    <div className="min-w-[40%] mx-auto mb-12 px-4 "><Notification/></div>
    </div>
  );
};