import React from "react";
import Carousel from "./carousel";

export default function display(){
  const images = [
    "./pic1rd.png",
    "./pic2rd.png",
    "./pic3rd.png",
    "./pic4rd.png",
    "./pic5rd.png",
    "./pic6rd.png",
  ];

  return (
    <div className=" mx-auto mt-4 w-[98%] ">
      <Carousel images={images} />
    </div>
  );
};