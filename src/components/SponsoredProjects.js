import React, { useState, useEffect } from 'react';

const data = [
    


    {id:1,title:"Phase I/II Clinical trial of a novel asparaginase mutant for the treatment of primary and relapse acute lymphatic leukemia",Status:"ongoing",  department: 'Biosciences and Biomedical Engineering'},
    {id:2,title:"J P Narayan National Centre of Excellence in the Humanities",Status:"ongoing",  department: 'Humanities' ,fundingagency: 'Department of Higher Education (MHRD)'},
    {id:3,title:"FIST PROGRAM OF DST- ELECTRICAL ENGINEERING: Smart Grid Research Facility",Status:"ongoing",  department: 'Electrical Engineering',facultyMember: 'Amod C. Umarikar',fundingagency: 'Department of Science and Technology'},
    {id:4,title:"Study of Legendre and Related Functions",Status:"completed",  department: 'Mathematics',fundingagency: 'Science & Engineering Research Board (SERB)'},
    {id:5,title:"Advanced Nonlinear Filtering Using Improved Quadrature Rule",Status:"ongoing",  facultyMember:'Abhinoy Kumar Singh',fundingagency: 'Science & Engineering Research Board (SERB)'},
    
    
    // Add more data as needed
  ];

const Sponsoredproject = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    fundingagency: '',
    year: '',
    facultyMember: '',
    department: '',
    Status: '',
  });

  useEffect(() => {
    setOriginalData(data);
    setFilteredData(data);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filteredResult = [...originalData];

    Object.keys(filters).forEach((filter) => {
      if (filters[filter] !== '') {
        filteredResult = filteredResult.filter((item) => item[filter] === filters[filter]);
      }
    });

    setFilteredData(filteredResult);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
    fundingagency: '',
      year: '',
      facultyMember: '',
      department: '',
      Status: '',
    });
  };

  return (
    <div className="w-90 mx-auto box-border">
      <header className="bg-cover bg-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80 text-center p-6 w-full relative h-1/4 mt-0">
        <h1 className="text-4xl text-white">Sponsored Projects</h1>
      </header>
      <div
        className="flex-grow bg-cover bg-center relative"
        style={{
          backgroundImage: "url('./bgr.png')", // Replace with your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity and color as needed
        }}
      >
      <nav className="flex justify-between items-center  p-4 w-full">
        <label className="mr-8">
          <select
            value={filters.fundingagency}
            onChange={(e) => handleFilterChange('fundingagency', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Funding Agency</option>
            <option value="Department of Higher Education (MHRD)">Department of Higher Education (MHRD)</option>
            <option value="Department of Science and Technology">Department of Science and Technology</option>
            <option value="Science & Engineering Research Board (SERB)">Science & Engineering Research Board (SERB)</option>
          </select>
        </label>

        <label className="mr-8">
          <select
            value={filters.Status}
            onChange={(e) => handleFilterChange('Status', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value=""> Status</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <label className="mr-8">
          <select
            value={filters.facultyMember}
            onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Select Faculty Member</option>
            <option value="Abhinoy Kumar Singh">Abhinoy Kumar Singh</option>
            <option value="Amod C. Umarikar">Amod C. Umarikar</option>
          </select>
        </label>

        <label>
          <select
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Select Department</option>
            <option value="Biosciences and Biomedical Engineering">Biosciences and Biomedical Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Humanities">Humanities</option>
          </select>
        </label>

        <button onClick={handleResetFilters} className="p-2 text-base cursor-pointer bg-blue-500 text-white rounded-md">
          Reset
        </button>
      </nav>
      
      

      <table className="w-full border-collapse mt-4  bg-white bg-opacity-60 text-gray-700 ">
        <thead>
          <tr className="border">
            <th className="border p-2 text-left font-extrabold bg-gray-200">S.No</th>
            <th className="border p-2 text-left font-extrabold bg-gray-200">Project Title</th>
            <th className="border p-2 text-left font-extrabold bg-gray-200">Status</th>
            <th className="border p-2 text-left font-extrabold bg-gray-200">View details</th>
          </tr>
        </thead>
        <tbody>
          {filters.fundingagency || filters.Status || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-neutral-400">
                  <td className="border p-2 text-black">{index + 1}</td>
                  <td className="border p-2 text-black">{item.title}</td>
                  <td className="border p-2 text-black">{item.Status}</td>
                  <td className="border p-2 text-black">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white p-2 rounded-md">View details</button>
                    </a>
                  </td>
                </tr>
              ))
            : originalData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-neutral-400">
                  <td className="border p-2 text-black">{index + 1}</td>
                  <td className="border p-2 text-black">{item.title}</td>
                  <td className="border p-2 text-black">{item.Status}</td>
                  <td className="border p-2 text-black">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white p-2 rounded-md">View details</button>
                    </a>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Sponsoredproject;