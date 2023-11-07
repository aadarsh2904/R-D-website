import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Navbar  from '../components/navbar.js'
import Expensenew from '../components/Expensenew.js'
import Dean from '../components/Dean/Dean.js'
import Research from '../components/Research.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-100 to-blue-300'>
    
      <Header />
     <Navbar/>

      <Dean />
      <Expensenew />
      <Research />
      <Footer />
    </div>
  );
}

export default Home;