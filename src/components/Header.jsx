import React from 'react'
import './Header.css'

const navbar = () => {
  return (

    <header>
      <div className='w-full h-28' >
        <div className=" mx-auto flex flex-wrap flex-col md:flex-row  ">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">

            <img
              src="iiti logo1.jpg"
              className=" h-24 w-24 mt-2 mb-2 ml-2 "
              alt="IITI logo"
              loading="lazy"

            />

            <div className='relative pl-2 '>
              <p className=' text-2xl font-semibold  '>  अनुसंधान एवं विकास अनुभाग, भारतीय प्रौद्योगिकी संस्थान इंदौर</p>
              <p className=' text-2xl  font-semibold '> Research & Development Section, IIT Indore</p>
            </div>

            <button className='bg-blue-500 h-10 w-36 border-2 border-black rounded-lg mx-3 hover:bg-blue-300 ml-[35rem]'><a href='https://www.iiti.ac.in/' target='_blank'>&larr;IITI Website</a></button>

          </div>

         
        </div>
      </div>
    </header>

  )
}

export default navbar;