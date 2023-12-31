import React from 'react'
import './Header.css'

const navbar = () => {
  return (
  
    <header>
    <div className='w-full h-28 bg-[#FDFEC5] border-2' >
         <div className="container mx-auto flex flex-wrap flex-col md:flex-row  ">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <img
          src="iit logo.png"
          class="rounded-full h-24 w-28 mt-3"
          
          alt="IITI logo"
          loading="lazy"/>
          <div>
            <button className='bg-[#77B0F4] h-10 w-36 border-2 border-black rounded-lg mx-3 hover:bg-blue-300'><a href='https://www.iiti.ac.in/' target='_blank'>&larr;IITI Website</a></button>
          </div>
        <div className='relative pl-72 '>
          <p className=' text-4xl font-normal pl-56 '> Research & Development Section, IIT Indore</p>
          <p className=' text-4xl font-normal pl-20'>  अनुसंधान एवं विकास अनुभाग, भारतीय प्रौद्योगिकी संस्थान इंदौर</p>
          </div>
          </div>
  <div id='bgd' className='w-full my-1 border-2 p-1' >
           
          <marquee className='relative text-lg font-bold top-[4.9rem] z-10 bg-blue-300'> * Hello this is IIT Indore`s Research & Development Home Page</marquee>
        <div className='w-[30rem] h-[28rem] absolute right-3 top-[15rem] bg-white border-2 border-black rounded-lg text-red-500'>
          <p className='relative w-[27rem] mx-auto trans ' >*Hello this is a notice</p>
        </div>
          </div>
          </div>
          </div>
    </header>
  
  )
}

export default navbar;