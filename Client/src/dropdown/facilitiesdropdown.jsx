import React from "react";
// This is dropdown for Facilities and Opportunities tab 
export default function DropdownLinkButton2() {
  return (
    <div className="flex flex-col items-center  overflow-hidden hover:overflow-visible cursor-pointer h-[3.8rem] pt-0 mt-0  hover:bg-white hover:text-blue-700 ">
      <div className="h-[100%] text-center p-4 mb-[1px] flex flex-row  ">
        <p className=" inline ">Facilities & Opportunities</p>
        <span className="inline-block [&>svg]:w-6 ml-1  ">
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
      <hr classname="w-full" />
      <div className="flex flex-col items-center  bg-white w-full divide-y divide-dotted shadow-xl text-lg  ">   
      <a href="https://sic.iiti.ac.in/" className=" text-black py-3  hover:text-blue-700 w-full hover:bg-blue-200">SIC</a>
      <a href="/prius" className=" text-black py-3 hover:text-blue-700 w-full hover:bg-blue-200">PRIUS</a>
      <a href="/cep" className=" text-black py-3  hover:text-blue-700 w-full hover:bg-blue-200">CEP</a>
      </div>
    </div>
  );
}
