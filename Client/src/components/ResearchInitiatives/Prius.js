import React from 'react';
import './Prius.css';

// Functional component for the Promotion of Research and Innovation for Undergraduate Students (PRIUS) section
const Prius = () => {
  return (
    <div className="research-scheme-container" style={{ marginBottom: '0' }}>
      {/* Heading */}
      <h1 className="section-heading">Promotion of Research and Innovation for Undergraduate Students (PRIUS)</h1>
       {/* Scheme details */}
      <div className="scheme-details">
        {/* Description */}
        <p>
          To promote and support research and innovation based projects amongst undergraduate students, IIT Indore has started a new scheme through which it supports:
        </p>
         {/* List of supported areas */}
        <ul className='text-black' style={{color:'black'}}>
          <li className='listcolor'>Undergraduate students in the research laboratories at IIT Indore,</li>
          <li className='listcolor'>Undergraduate students for international collaborative research projects, and</li>
          <li className='listcolor'>Encouraging projects leading to innovation by undergraduate students</li>
        </ul>
        {/* Additional details */}
        <p>
          The scheme is applicable for undergraduate students enrolled at IIT Indore, and a part of the PRIUS project must be carried out at IIT Indore. For the implementation of this scheme, the student who wishes to pursue an undergraduate research project must identify a faculty supervisor from IIT Indore.
        </p>
        <p>
          PRIUS undergraduate projects should typically run for a period of at least six months, and it is to be understood that these projects will not in any way come in the way of the student's regular academic obligations and requirements for fulfilling the requirements for the award of degree. Undergraduate students identified to utilize this opportunity must finish their work before the end of the final semester of the coursework.
        </p>
      </div>
      {/* Links section */}
      <div className="links-section">
        {/* Links heading */}
        <h2>Interested Applicants can visit the concerned webpage and Faculties Profile as per the following links:</h2>
        {/* List of links */}
        <ul>
          <li><a href="http://ee.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Electrical Engineering</a></li>
          <li><a href="http://me.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Mechanical Engineering</a></li>
          <li><a href="http://cse.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Computer Science & Engineering</a></li>
          <li><a href="http://mems.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Metallurgy Engg. & Materials Science</a></li>
          <li><a href="http://ce.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Civil Engineering</a></li>
          <li><a href="http://bsbe.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Bio-Sciences & Bio-Medical Engg.</a></li>
          <li><a href="http://astronomy.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Astronomy, Astrophysics & Space Engg.</a></li>
          <li><a href="http://math.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Mathematics</a></li>
          <li><a href="http://physics.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Physics</a></li>
          <li><a href="http://chemistry.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Chemistry</a></li>
          <li><a href="http://cae.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Advanced Electronics</a></li>
          <li><a href="https://iiti.ac.in/page/center-of- futuristic-defense-and-space-technology" target="_blank" rel="noopener noreferrer">Futuristic Defense and Space Technology</a></li>
          <li><a href="http://iiti.ac.in/page/dst-fist-center-of-excellence-in-gear- engineering" target="_blank" rel="noopener noreferrer">Gear Engineering</a></li>
          <li><a href="http://cisks.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Indian Scientific Knowledge Systems</a></li>
          <li><a href="https://iiti.ac.in/page/cevits" target="_blank" rel="noopener noreferrer">Electric Vehicle and Intelligent Transport System</a></li>
          <li><a href="http://hss.iiti.ac.in/" target="_blank" rel="noopener noreferrer">Humanities, Economics and Social Science</a></li>
          <li><a href="http://iiti.ac.in/page/centre-for-rural-development-and- technology" target="_blank" rel="noopener noreferrer">Rural Development</a></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Prius;
