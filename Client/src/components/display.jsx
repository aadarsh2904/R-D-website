import React from "react";
import Carousel from "./carousel";
import Notification from "./notification";

export default function display(){
  const images = [   // Here add the images you want to display in the carousel
    "./pic1rd.png",
    "./pic2rd.png",
    "./pic3rd.png",
    "./pic4rd.png",
    "./pic5rd.png",
  ];

  return (
    <div className="flex flex-row flex-wrap ">
      {/* Carousel  */}
    <div className=" mt-6 min-w-[55%] max-h-[65vh]  p-1 mx-auto max-[1635px]:h-[30rem] ">
      <Carousel images={images} />
    </div>
    {/* Notification box  */}
    <div className="min-w-[40%] max-[1635px]:min-w-[60%]  mx-auto mb-12 px-4 "><Notification/> 
    </div> 
    </div>
  );
};