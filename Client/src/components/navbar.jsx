import React, { useState } from "react";

import DropdownLinkButton2 from "../dropdown/facilitiesdropdown";
import DropdownLinkButton3 from "../dropdown/Researchdropdown";
import DropdownLinkButton4 from "../dropdown/projectsdropdown";
import DropdownLinkButton6 from "./../dropdown/patentsdropdown";

const Navbar = () => {

  const [navbar,setNavbar] = useState('hidden')
  const [dropdown,setDropdown] = useState('hidden')
  const [dropdown2,setDropdown2] = useState('hidden')

  const handleLogin = ()=>{
    window.location.href = '/login';
  }

  const handleNavbar =() => {
   if(navbar==='hidden'){
   setNavbar("absolute right-0 z-20 border-2px rounded-lg p-2 m-2 shadow-lg  w-[19rem] text-lg bg-blue-100 ");
   }
  
   else{
   setNavbar('hidden');
   }

  }

  const handleDropdown =() => {
   if(dropdown==='hidden'){
   setDropdown('p-[1px] text-center');
   
   setDropdown2(" p-4  hover:bg-white hover:text-blue-700  ");
   }
  
   else{
   setDropdown('hidden');
   setDropdown2('hidden');
   }
   console.log(dropdown)
  }
  return (
    <div>
    <nav className="sticky top-0 w-full bg-blue-800 z-[10]  text-xl max-[1400px]:text-[17px] max-[1240px]:hidden ">
      
      <ul className="flex flex-wrap flex-row h-[100%] p-0 m-0 text-white ">
        <li className="p-[1px] text-center">
          <div className=" p-4  hover:bg-white hover:text-blue-700  ">
            <a href="/">Home </a>
          </div>
        </li>
        <li className="p-[1px] text-center">
          <div className="p-4 hover:bg-white hover:text-blue-700  ">
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
          <div className="p-4 hover:bg-white hover:text-blue-700  ">
            <a href="/publications"> Publications</a>
          </div>
        </li>

        <li className="p-[1px] text-center">
          <a type="button">
            <DropdownLinkButton6 />
          </a>
        </li>

        {/* login button */}
        <li className="p-0">
          <button
            onClick={handleLogin}
            className="absolute top-0 right-0 p-4 px-5 pt-3.5 h-[100%]  font-bold bg-blue-700 border-4 border-indigo-800  hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800 "
            href="/login"
          >
            Faculty Login
          </button>
        </li>
      </ul>
    </nav>

    {/* Mini navbar  */}

    <div className="absolute top-6 right-3 min-[1241px]:hidden shadow-lg max-w-[50%] ">

      <button className="p-1 bg-gray-100 rounded-lg " onClick={handleNavbar}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-12 h-12 text-blue-900 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>

<div className={navbar}>
<ul className="flex flex-col  p-0 m-0 w-[18rem] items-center ">
        <li className="p-[1px] ">
          <div className=" p-4  hover:bg-white hover:text-blue-700  ">
            <a href="/">Home </a>
          </div>
        </li>
        <hr className="w-full "/>
        <li className="p-[1px] text-center">
          <div className="p-4 hover:bg-white hover:text-blue-700  ">
            <a href="/people"> People</a>
          </div>
        </li>
        <hr className="w-full "/>
        <li className="p-[1px] text-center" >
          <button type="button" onClicK={handleDropdown} >
          <div className=" text-center p-4  flex flex-row mx-auto " >
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
          </button>
        </li>
        <hr className="w-full "/>
        <li className={dropdown}>
          <div className={dropdown2}>
            <a href="https://sic.iiti.ac.in/">SIC </a>
          </div>
        </li>
        <hr className="w-full "/>
        <li className={dropdown}>
          <div className={dropdown2}>
            <a href="/prius">PRIUS</a>
          </div>
        </li>
        <hr className="w-full"/>
        <li className={dropdown}>
          <div className={dropdown2}>
            <a href="/cep">CEP </a>
          </div>
        </li>
        <hr className="w-full "/>
        <li className="p-[1px] text-center">
          <a type="button">
            <DropdownLinkButton3 />
          </a>
        </li>
        <hr className="w-full "/>
        <li className="p-[1px] text-center">
          <a type="button">
            <DropdownLinkButton4 />
          </a>
        </li>
        <hr className="w-full "/>
        <li className="p-[1px] text-center">
          <div className="p-4 hover:bg-white hover:text-blue-700  ">
            <a href="/publications"> Publications</a>
          </div>
        </li>
        <hr className="w-full "/>
        <li className="p-[1px] text-center">
          <a type="button">
            <DropdownLinkButton6 />
          </a>
        </li>
        <hr className="w-full "/>
        <li className="p-[1px] text-center">
          <button
            onClick={handleLogin}
            className="p-4 hover:bg-white hover:text-blue-700 "
            href="/login"
          >
            Faculty Login
          </button>
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
