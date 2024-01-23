import React from 'react'
import {useState} from 'react'

const Research1 = () => {
    const [date,setDate] = useState('dd/mm/yyyy')
    const [patentsFiled,setPatentsFiled] = useState('245')
    const [patentsRegistered,setPatentsRegistered] = useState('567')
    const [designsFiled,setDesignsFiled] = useState('24')
    const [designsRegistered,setDesignsRegistered] = useState('56')

  return (
    <div className='relative my-10 border-2 border-black pb-10 '>
        <div className='flex flex-col items-center'>
        <h1 className='text-6xl text-black font-bold'>Research metrics at a glance</h1>
        <h3 className='text-lg '>As of {date}</h3>
        <hr className='w-[90%] border-2 border-gray-300 rounded-lg my-6'/>
        <div className='flex flex-row flex-wrap w-[80%] mx-auto '>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-4xl font-bold text-blue-700'>Patents</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4'>{patentsFiled} filed</div>
                <div className='mx-auto text-2xl px-4'>{patentsRegistered} registered</div>
            </div>
          </div>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-4xl font-bold text-blue-700'>Designs</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4 '>{designsFiled} <span className='font-light'>filed</span></div>
                <div className='mx-auto text-2xl px-4' >{designsRegistered} registered</div>
            </div>
            </div>
        </div>
        <hr className='w-[90%] border-2 border-gray-300 rounded-lg my-6'/>
        <div className='flex flex-row flex-wrap w-[80%] mx-auto '>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-4xl font-bold text-blue-700'>Copyrights</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4'>{patentsFiled} filed</div>
                <div className='mx-auto text-2xl px-4'>{patentsRegistered} registered</div>
            </div>
          </div>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-4xl font-bold text-blue-700'>Trademarks</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4 '>{designsFiled} <span className='font-light'>filed</span></div>
                <div className='mx-auto text-2xl px-4' >{designsRegistered} registered</div>
            </div>
            </div>
        </div>
        <hr className='w-[90%] border-2 border-gray-300 rounded-lg my-6'/>
        </div>
        </div>
    
    
  )
}

export default Research1;