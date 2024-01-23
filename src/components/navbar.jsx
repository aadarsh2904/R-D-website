import React from 'react'
import DropdownLinkButton from '../dropdown/homedropdown'
import DropdownLinkButton2 from '../dropdown/facilitiesdropdown'
import DropdownLinkButton3 from '../dropdown/Researchdropdown'
import DropdownLinkButton4 from '../dropdown/projectsdropdown'

import DropdownLinkButton6 from './../dropdown/patentsdropdown'




const navbar = () => {
  return (
    <nav className='sticky top-2 w-[98%] mx-auto h-16  bg-blue-500 mt-1  border-4 border-blue-900 rounded-2xl items-center z-10 '>
      <ul className='flex flex-wrap flex-row  pt-0 text-lg max-lg:text-md'>
        <li>
          <a type="button" ><DropdownLinkButton /> </a>



        </li>
        <li>
          <a href='/people' className=' hover:text-[aqua]'> People</a>
        </li>



        <li><a type="button" ><DropdownLinkButton2 />
        </a>


        </li>

        <li><a type="button" ><DropdownLinkButton3 />
        </a>

        </li>
        <li><a type="button" ><DropdownLinkButton4 />
        </a>


        </li>
        <li><a href='/publications' className=' hover:text-[aqua] active:underline' >Publications
        </a>


        </li>
        <li><a type="button"><DropdownLinkButton6 />
        </a>
        </li>

        {/* login button */}
        <li><a className='absolute top-1.5 right-3 p-2 border-2 rounded-2xl hover:bg-white hover:text-blue-600 hover:border-blue-300 text-lg' href="/login" >Faculty Login</a></li>
      </ul>
    </nav>

  )
}

export default navbar