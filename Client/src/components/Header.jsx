import React from 'react'


const navbar = () => {
  return (

    <header>
      <div className='w-full ' >
        <div className=" mx-auto flex flex-wrap flex-col md:flex-row  ">
          <div className="flex flex-row flex-wrap title-font font-medium items-center text-gray-900 mt-2 mb-4 md:mb-0 ">

            <img
              src="iiti logo1.jpg"
              className=" h-28 w-28 mt-2 mb-2 ml-6 mr-4 "
              alt="IITI logo"
              loading="lazy"

            />

            <div className='relative pl-2 w-60% '>
              <p className=' text-3xl font-semibold  '>  अनुसंधान एवं विकास, भारतीय प्रौद्योगिकी संस्थान इंदौर</p>
              <p className=' text-2xl   '> Research & Development, Indian Institute of Technology Indore</p>
            </div>
{/* 
            <button className='bg-blue-700 p-2.5 border-2 border-blue-800 rounded-lg ml-[40rem] text-lg text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 '>
              <a href='https://www.iiti.ac.in/' target='_blank'>
              &larr; IITI Website</a></button> */}

          </div>

         
        </div>
      </div>
    </header>

  )
}

export default navbar;