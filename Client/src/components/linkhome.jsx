import React from "react";
// This component comes above footer on home page 
const linkhome = () => {
  return (
    <div className="w-[95%] pt-6 mx-auto ">
      <h1 className="lg:text-6xl md:text-5xl sm:text-5xl text-4xl text-center font-semibold text-blue-800 py-8">
        Explore more &rarr;
      </h1>
     {/* Code for Grid */}
      <div className="w-full px-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-2 text-sm md:text-lg">
        {/* Science and Engineering Research Board  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg  text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a href="https://serb.gov.in/index.php/home.php" target="_blank">
            Science and Engineering Research Board
          </a>
        </button>
        {/* CSIR  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://csirhrdg.res.in/Home/Index/1/Default/1102/63"
            target="_blank"
          >
            CSIR: Sponsored Research Schemes
          </a>
        </button>
        {/* DRDO  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg  text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://www.drdo.gov.in/drdo/English/indexCorpDir.jsp?pg=GenUserInfo.jsp&dir=ERIPR"
            target="_blank"
          >
            DRDO Extramural Research
          </a>
        </button>
        {/* Welcome Trust  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a href="https://www.indiaalliance.org/" target="_blank">
            Welcome Trust/DBT India Aliance
          </a>
        </button>
        {/* DST  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a href="https://dst.gov.in/whatsnew/" target="_blank">
            DST:What`s new
          </a>
        </button>
        {/* DBT  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://dbtindia.gov.in/whats-new/call-for-proposals"
            target="_blank"
          >
            DBT:Call for proposals
          </a>
        </button>
        {/* BRNS  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a href="https://brns.res.in/brns_rp.php" target="_blank">
            BRNS:Research Grants
          </a>
        </button>
        {/* GITA  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://www.gita.org.in/ApplyForFunding.aspx/"
            target="_blank"
          >
            GITA:Funding Calls
          </a>
        </button>
        {/* MeitY  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://www.meity.gov.in/schemes"
            target="_blank"
          >
            MeitY:What`s new
          </a>
        </button>
        {/* CSIR-CEERI  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://www.iiti.ac.in/page/csir-ceeri"
            target="_blank"
          >
            CSIR-CEERI
          </a>
        </button>
        {/* CEFIPRA  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://www.cefipra.org/"
            target="_blank"
          >
            CEFIPRA
          </a>
        </button>
        {/* DAAD  */}
        <button className="bg-blue-600 p-6 border-2 border-blue-800 rounded-lg   text-white font-semibold hover:bg-white hover:text-blue-700 hover:ring-2 ">
          <a
            href="https://www.daad.in/en/"
            target="_blank"
          >
           DAAD
          </a>
        </button>
      </div>
      
      <div></div>
    </div>
  );
};

export default linkhome;
