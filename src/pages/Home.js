import React from 'react'

import Navbar from '../components/Header'
import Expensenew from '../components/Expensenew.js'
import Dean from '../components/Dean/Dean.js'
import Research from '../components/Research.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <>
   <Navbar/>
   <Dean/>
   <Expensenew/>
   <Research/>
   <Footer/>
   </>
  );
}

export default Home;