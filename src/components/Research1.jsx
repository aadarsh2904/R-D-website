import React from 'react'
import {useState} from 'react'

const Research1 = () => {
    const [date,setDate] = useState('dd/mm/yyyy')
    const [patentsFiled,setPatentsFiled] = useState('245')
    const [patentsRegistered,setPatentsRegistered] = useState('567')
    const [designsFiled,setDesignsFiled] = useState('24')
    const [designsRegistered,setDesignsRegistered] = useState('56')

  return (
    <div className='relative my-10 border-2 border-black pb-10 bg-blue-200'>
        <div className='flex flex-col items-center'>
        <h1 className='text-6xl text-black font-bold mt-6'>Research metrics at a glance</h1>
        <h3 className='text-lg font-normal'>As of {date}</h3>
        <hr className='w-[90%] border-2 rounded-lg my-6'/>
        <div className='flex flex-row flex-wrap w-[80%] mx-auto '>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-5xl font-bold text-blue-700'>Patents</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4'>{patentsFiled} <span className='font-light'>filed</span></div>
                <div className='mx-auto text-2xl px-4'>{patentsRegistered} <span className='font-light'>registered</span></div>
            </div>
          </div>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-5xl font-bold text-blue-700'>Designs</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4 '>{designsFiled} <span className='font-light'>filed</span></div>
                <div className='mx-auto text-2xl px-4' >{designsRegistered} <span className='font-light'>registered</span></div>
            </div>
            </div>
        </div>
        <hr className='w-[90%] border-2  rounded-lg my-6'/>
        <div className='flex flex-row flex-wrap w-[80%] mx-auto '>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-5xl font-bold text-blue-700'>Copyrights</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4'>{patentsFiled} <span className='font-light'>filed</span></div>
                <div className='mx-auto text-2xl px-4'>{patentsRegistered} <span className='font-light'>registered</span></div>
            </div>
          </div>
          <div className='flex flex-col w-[40%] items-center mx-auto'>
            <h1 className='text-5xl font-bold text-blue-700'>Trademarks</h1>
            <div className='flex flex-row px-4 py-4'>
                <div className='mx-auto text-2xl px-4 '>{designsFiled} <span className='font-light'>filed</span></div>
                <div className='mx-auto text-2xl px-4' >{designsRegistered}<span className='font-light'>registered</span> </div>
            </div>
            </div>
        </div>
        <hr className='w-[90%] border-2  rounded-lg my-6'/>
        <div className='flex flex-col items-center '>
          <h1 className='text-5xl text-blue-700 font-bold '>Projects</h1>
          <p className='font-thin '>Cumulative projects as of {date}</p>
          <div className='grid grid-cols-7 gap-8 mt-2'>
            <div className='col-start-2 text-center text-xl'>Grants in aid</div>
            <div className=' text-center text-xl'>Internal</div>
            <div className=' text-center text-xl'>Sponsered</div>
            <div className=' text-center text-xl'>Consultancy</div>
            <div className=' text-center text-xl'>Others</div>
            <div className=' text-center text-xl'>Total</div>

            <div className=' text-center text-xl '>No. of Projects</div>
            <div className=' text-center text-lg'>456</div>
            <div className=' text-center text-lg'>56</div>
            <div className=' text-center text-lg'>123</div>
            <div className=' text-center text-lg'>98</div>
            <div className=' text-center text-lg'>74</div>
            <div className=' text-center text-lg'>678</div>

            <div className=' text-center text-xl '>Value in Crores</div>
            <div className=' text-center text-lg'>45.2</div>
            <div className=' text-center text-lg'>56.23</div>
            <div className=' text-center text-lg'>12.90</div>
            <div className=' text-center text-lg'>98.04</div>
            <div className=' text-center text-lg'>74.56</div>
            <div className=' text-center text-lg'>600</div>

          </div>
        </div>
          <hr className='w-[90%] border-2  rounded-lg my-6'/>
          <div className='flex flex-col items-center'>
            <h1 className='text-5xl text-blue-700 font-bold'>Publications</h1>
            <div className='text-3xl font-semibold mt-2' >5767</div>
          </div>
        </div>
        </div>
    
    
  )
}

export default Research1;