import React from "react";

export default function DropdownLinkButton3() {
  return (
    <div className="flex flex-col items-center overflow-hidden hover:overflow-visible cursor-pointer h-[3.8rem] pt-0 mt-0 hover:bg-white hover:text-blue-700 ">
      <div className="h-[100%] text-center text-xl p-4 ">
        <p className="text-center inline-block">Research Initiatives</p>
        <span className=" ml-2 [&>svg]:w-6 w-2 inline-block [&>svg]:text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
        <hr classname="w-full " />
      <div className="flex flex-col items-center bg-white w-full divide-y divide-dotted shadow-xl">
      <a href="#" className=" text-black py-3 font-semibold hover:text-blue-700 w-full hover:bg-blue-200"> TRF</a>   
      <a href="#" className=" text-black py-3 font-semibold hover:text-blue-700 w-full hover:bg-blue-200">YFRSG</a>   
      <a href="#" className=" text-black py-3 font-semibold hover:text-blue-700 w-full hover:bg-blue-200">SIPPT</a>
      <a href="https://www.iiti.ac.in/page/institute-mous" className=" text-black py-3 font-semibold hover:text-blue-700 w-full hover:bg-blue-200">MOUs</a>
      </div>
    </div>
  );
}
