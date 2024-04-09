import React from "react";

import Header from "../components/Header.jsx";
import Display from "../components/display.jsx";
import Navbar from "../components/navbar.jsx";
import DirectorMessage from "../components/DirectorMessage.jsx";
import DeanMesssage from "../components/DeanMessage.jsx";
import Research from "../components/Research.jsx";
import Link from "../components/linkhome.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <Display />
      <Research />
      <DirectorMessage />
      <DeanMesssage />
      <Link/>
      <Footer />
    </div>
  );
};

export default Home;
