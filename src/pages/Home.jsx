import React from 'react'

import Header from '../components/Header.jsx'
import Display from '../components/display.jsx'
import Navbar from '../components/navbar.jsx'
import Expensenew from '../components/Expensenew.jsx'
import Dean from '../components/Dean/Dean.jsx'
// import Research from '../components/Research.jsx'
import Research1 from '../components/Research1.jsx'

import Footer from '../components/Footer/Footer.jsx'



const Home = () => {
  return (
    <div className='bg-white'>

      <Header />
      <Navbar />
      <Display/>
    
      <Research1/>
      <Dean />
      <Expensenew />
     
      <Footer />
    </div>
  );
}

export default Home;