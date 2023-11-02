import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Expensenew from '../components/Expensenew.js'
import Dean from '../components/Dean/Dean.js'
import Research from '../components/Research.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <div className=''>
      <Header />
      <nav className='sticky top-2 w-full h-20  bg-[#17265D] mt-1 border-4 border-[#C79CCB] rounded-2xl items-center z-10'>
        <ul className='flex flex-wrap flex-row items-center'>
          <li><i className='text-[#BF7676] text-3xl'>&#10041;</i></li>
          <li>
            <a id="dropdownDefaultButton1" data-dropdown-toggle="dropdown" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Home<svg A="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </a>


            <div id="dropdown1" className=" z-10 hidden bg-white text-blue-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hover: block">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>
          </li>

          <li><a href='#'>People</a></li>

          <li><a id="dropdownDefaultButton2" data-dropdown-toggle="dropdown" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Facilities & Opportunities<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </a>


            <div id="dropdown2" className=" z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">SIC</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PRIUS</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CEP</a>
                </li>
              </ul>
            </div></li>

          <li><a id="dropdownDefaultButton3" data-dropdown-toggle="dropdown" class=" text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Research Initiatives & Outcomes<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </a>


            <div id="dropdown3" className=" z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Patents</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tech transfer</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Publications</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MoU</a>
                </li>
              </ul>
            </div></li>
          <li><a id="dropdownDefaultButton4" data-dropdown-toggle="dropdown" className=" text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Projects<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </a>


            <div id="dropdown4" className=" z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sponsers</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Consultancy & CSR</a>
                </li>
              </ul>
            </div></li>

          <li><a className='p-1 border-2 rounded-2xl hover:bg-blue-500'href="/login" >Login</a></li>
        </ul>
      </nav>

      <Dean />
      <Expensenew />
      <Research />
      <Footer />
    </div>
  );
}

export default Home;