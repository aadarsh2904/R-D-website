import "./Project.css";
import Footer from '../components/Footer/Footer.jsx'

import * as React from "react";

import Navbar from '../components/navbar'
import Table from  '../components/table.jsx'
function Project() {
   

  

  return (
    <div>
      <Navbar/>
      <div className="subhead">
        <h1>R&D PROJECTS</h1>
      </div>
      <div className="filter">
          <div className='project-filter'>
            <div className='project-filter__control'>
              <label>Funding Agency</label>
              <select value={"SELECT"}>
                <option value='AICTE'>AICTE</option>
                <option value='DRDO'>DRDO</option>
                <option value='AHRC'>AHRC</option>
                <option value='AFC'>AFC</option>
              </select>
            </div>
          </div>



          <div className='project-filter'>
            <div className='project-filter__control'>
              <label>Year</label>
              <select value={"SELECT"}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
              </select>
            </div>
          </div>

          <div className='project-filter'>
            <div className='project-filter__control'>
              <label>Faculty Member</label>
              <select value={"SELECT"}>
                <option value='2022'>Abhinav Kranti</option>
                <option value='2021'>Amod C Umarikar</option>
                <option value='2020'>Ankur Miglani</option>
                <option value='2019'>Bibekananda Maji</option>
              </select>
            </div>
          </div>


          <div className='project-filter'>
            <div className='project-filter__control'>
              <label>Department</label>
              <select value={"SELECT"}>
                <option value='2022'>Chemistry</option>
                <option value='2021'>Mathematics</option>
                <option value='2020'>Electrical Engineering</option>
                <option value='2019'>Physics</option>
              </select>
            </div>
          </div>
        <button>select</button>
        <button>reset</button>
      </div>

      
        <Table/>
        <Footer/>
    
    
    </div>
  );
}

export default Project ;
