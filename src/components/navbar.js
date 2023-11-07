import React from 'react'
import './navbar.css'


const navbar = () => {
  return (
    <nav className='sticky top-2 w-[94.4rem] h-16  bg-blue-700 mt-1 ml-1 mr-1 border-4 border-blue-900 rounded-2xl items-center z-10 px-2'>
    <ul className='flex flex-wrap flex-row  pt-0 text-xl'>
      {/* <li><i className='text-[#BF7676] text-3xl'>&#10041;</i></li> */}
      <li>
        <a type="button" className='px-4 cursor-pointer'>Home<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
        </a>


        
      </li>
      <li>
        <a href='#'>People</a>
      </li>

      

      <li><a type="button" className='px-4 cursor-pointer'>Facilities & Opportunities<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
      </a>


        </li>

      <li><a  type="button" className='px-4 cursor-pointer'>Research Initiatives & Outcomes<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
      </a>

</li>
      <li><a  type="button" className='px-4 cursor-pointer'>Projects<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
      </a>


       </li>

      <li><a className='absolute top-1.5 right-3 p-2 border-2 rounded-2xl hover:bg-blue-500 text-xl'href="/login" >Login</a></li>
    </ul>
  </nav>

  )
}

export default navbar