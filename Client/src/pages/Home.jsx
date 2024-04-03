import React from "react";

import Header from "../components/Header.jsx";
import Display from "../components/display.jsx";
import Navbar from "../components/navbar.jsx";
import Expensenew from "../components/Expensenew.jsx";
import DeanMesssage from "../components/DeanMessage.jsx";
import Dean from "../components/Dean/Dean.jsx";
import Research from "../components/Research.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <Display />
      <Research />
      <Dean />
      <Expensenew />
      <DeanMesssage />
      <Footer />
    </div>
  );
};

export default Home;
