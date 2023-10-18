import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div>
    <div className='w-full h-28 bg-[#FDFEC5] border-2' >
         <div className="container mx-auto flex flex-wrap flex-col md:flex-row  ">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <img
          src="iit logo.png"
          class="rounded-full h-24 w-28 mt-3"
          
          alt="IITI logo"
          loading="lazy"/>
          <div>
            <button className='bg-[#77B0F4] h-10 w-36 border-2 border-black rounded-lg mx-3 hover:bg-blue-300'><a>&larr;IITI Website</a></button>
          </div>
        <div className='pl-72 '>
          <p className=' text-4xl font-normal pl-56 '> Research & Development Section, IIT Indore</p>
          <p className=' text-4xl font-normal pl-20'>  अनुसंधान एवं विकास अनुभाग, भारतीय प्रौद्योगिकी संस्थान इंदौर</p>
          </div>
          </div>
  <div id='bgd' className='w-full my-1 border-2 p-1' >
           
     <nav className='sticky top-2 w-full h-20  bg-[#17265D] mt-1 border-4 border-[#C79CCB] rounded-2xl items-center z-10'>
      <ul className='flex flex-wrap flex-row items-center'>
         <li><i className='text-[#BF7676] text-3xl'>&#10041;</i></li> 
         <li><a href='#'>Home</a></li>
         <li><a href='#'>People</a></li>
         <li><a href='#'>Facilities</a></li>
         <li><a href='#'>opportunity</a></li>
         <li><a href='#'>Projects</a></li>
         <li><a href='#'>Research Initiatives</a></li>
         <li>
         <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <button type="submit" className='cursor-pointer'>
           <svg className="w-4 h-4 text-grey-500 dark:text-grey-400 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </button>
      
        </span>
        <input type="search" id="default-search" className="block w-full  border-gray-200 py-1 px-11 rounded-3xl bg-[#C3C9EC] text-black" placeholder="Search" required/>
        
        
    </div>
      
         </li>
      
          </ul>
          </nav>
          </div>
          </div>
          </div>
    </div>

  )
}

export default navbar;