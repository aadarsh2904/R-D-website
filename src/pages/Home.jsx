import React from 'react'

import Header from '../components/Header.jsx'
import Display from '../components/display.jsx'
import Navbar from '../components/navbar.jsx'
import Expensenew from '../components/Expensenew.jsx'
import Dean from '../components/Dean/Dean.jsx'
import Research from '../components/Research.jsx'
import Contact from '../components/contact.jsx'
import Footer from '../components/Footer/Footer.jsx'



const Home = () => {
  return (
    <div className='bg-gradient-to-r from-white to-blue-200'>

      <Header />
      <Navbar />
      <Display/>
      <Research />
      <Dean />
      <Expensenew />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;