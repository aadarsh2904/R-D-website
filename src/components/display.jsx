import React from 'react'
import CarouselWithControls from './carousel'
import Marquee from './Marquee'


const display = () => {
  return (
    <div className='relative w-full my-3.5 p-1 flex flex-row  ' >
    {/* carousel */}
    <div id='carousel' className=' ml-2 h-[30rem] w-[68%] mx-auto border-2 rounded-lg shadow-md shadow-slate-700 overflow-hidden'><CarouselWithControls /></div>

    
    <div id='noticebox' className='w-[30%] mx-auto h-[30rem]  bg-white border-2 border-black rounded-lg shadow-md shadow-slate-700 overflow-hidden'>
      <h1 className='relative w-[27rem] mx-auto font-bold text-red-600 text-2xl  ' >Latest news</h1>
      <hr className='w-[29.7rem] border-black ' />
      <Marquee className='overflow-clip mb-[30rem]' />

    </div>
  </div>
  )
}

export default display