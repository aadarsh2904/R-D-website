import React from "react";

import DropdownLinkButton2 from "../dropdown/facilitiesdropdown";
import DropdownLinkButton3 from "../dropdown/Researchdropdown";
import DropdownLinkButton4 from "../dropdown/projectsdropdown";
import DropdownLinkButton6 from "./../dropdown/patentsdropdown";

const navbar = () => {
  return (
    <nav className="sticky top-0.5 w-full  bg-blue-700 z-[10] px-4 ">
      <ul className="flex flex-wrap flex-row h-[100%] p-0 m-0 text-white ">
        <li className="p-[1px] text-center">
          <div className=" p-4  hover:bg-white hover:text-blue-700  text-xl">
            <a href="/">Home </a>
          </div>
        </li>
        <li className="p-[1px] text-center">
          <div className="p-4 hover:bg-white hover:text-blue-700 text-xl ">
            <a href="/people"> People</a>
          </div>
        </li>

        <li className="p-[1px] text-center">
          <a type="button" >
            <DropdownLinkButton2 />
          </a>
        </li>

        <li className="p-[1px] text-center">
          <a type="button">
            <DropdownLinkButton3 />
          </a>
        </li>
        <li className="p-[1px] text-center">
          <a type="button">
            <DropdownLinkButton4 />
          </a>
        </li>
        <li className="p-[1px] text-center">
          <div className="p-4 hover:bg-white hover:text-blue-700 text-xl ">
            <a href="/publications"> Publications</a>
          </div>
        </li>

        <li className="p-[1px] text-center">
          <a type="button">
            <DropdownLinkButton6 />
          </a>
        </li>

        {/* login button */}
        <li>
          <a
            className="absolute top-0.5 right-0.5 p-2 px-4 pt-4 h-[93%] hover:bg-white hover:text-blue-700 hover:border-blue-300 text-lg font-semibold"
            href="/login"
          >
            Faculty Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
