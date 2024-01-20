import React from 'react'

import Navbar from '../components/navbar.jsx'
import Patents from '../components/Patent'
import Footer from '../components/Footer/Footer'


const patent = () => {
  return (
    <div>
       
      <Navbar/>
      <Patents/>
      <Footer/>
    </div>
  )
}

export default patent;