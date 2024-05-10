import React from 'react'
// This component contains the section above navbar 
const navbar = () => {
  return (

    <header>
      <div className='w-full ' >
        <div className=" mx-auto flex flex-wrap flex-col md:flex-row  ">
          <div className="flex flex-row flex-wrap title-font font-medium items-center text-gray-900 mt-2 mb-4 md:mb-0 ">

            <img
              src="iiti logo1.jpg"
              className=" h-28 w-28 mt-2 mb-2 ml-6 mr-4  max-lg:w-20 max-lg:h-20 max-md:w-16 max-md:h-16"
              alt="IITI logo"
              loading="lazy"

            />

            <div className='relative pl-2 w-60% max-[425px]:w-[50%]'>
              <div className='flex flex-row max-[590px]:flex-col'>
              <p className=' text-3xl font-semibold max-lg:text-2xl max-md:text-xl max-[698px]:text-lg max-[425px]:text-sm max-[425px]:font-bold'>  अनुसंधान एवं विकास,</p>
              <p className='text-3xl font-semibold max-lg:text-2xl max-md:text-xl max-[698px]:text-lg  max-[425px]:text-sm max-[425px]:font-bold'>   भारतीय प्रौद्योगिकी संस्थान इंदौर</p>
              </div>
              <div className='flex flex-row max-[590px]:flex-col'>
              <p className=' text-2xl max-lg:text-xl  max-md:text-lg max-[698px]:text-sm'> Research & Development,</p>
              <p className=' text-2xl max-lg:text-xl  max-md:text-lg max-[698px]:text-sm'>  Indian Institute of Technology Indore</p>
              </div>
            </div>


          </div>

         
        </div>
      </div>
    </header>

  )
}

export default navbar;