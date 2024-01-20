import React, { useState, useEffect } from 'react';

const data = [
  { id: 1, title: 'Patent Title 1', academicYear: '2021-2022', patentStatus: 'Filed', facultyMember: 'Faculty 1', department: 'Computer Science' },
  { id: 2, title: 'Patent Title 2', academicYear: '2022-2023', patentStatus: 'Granted', facultyMember: 'Faculty 2', department: 'Electrical Engineering' },
  // Add more data as needed
];

const Patents = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    academicYear: '',
    patentStatus: '',
    facultyMember: '',
    department: '',
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
      academicYear: '',
      patentStatus: '',
      facultyMember: '',
      department: '',
    });
  };

  return (
    <div className="w-90 mx-auto box-border">
      <header className="bg-cover bg-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80 text-center p-6 w-full relative h-1/4 mt-0">
        <h1 className="text-4xl text-white">Patent Details</h1>
      </header>
      <div
        className="flex-grow bg-cover bg-center relative"
        style={{
          backgroundImage: "url('./abhinandan1ed.jpg')", // Replace with your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity and color as needed
        }}
      >
      <nav className="flex justify-between items-center  p-4 w-full">
        <label className="mr-8">
          <select
            value={filters.academicYear}
            onChange={(e) => handleFilterChange('academicYear', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Select Academic Year</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2022-2023">2022-2023</option>
          </select>
        </label>

        <label className="mr-8">
          <select
            value={filters.patentStatus}
            onChange={(e) => handleFilterChange('patentStatus', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Select Patent Status</option>
            <option value="Filed">Filed</option>
            <option value="Granted">Granted</option>
          </select>
        </label>

        <label className="mr-8">
          <select
            value={filters.facultyMember}
            onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Select Faculty Member</option>
            <option value="Faculty 1">Faculty 1</option>
            <option value="Faculty 2">Faculty 2</option>
          </select>
        </label>

        <label>
          <select
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
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
            <th className="border p-2 text-left font-extrabold bg-gray-200">Faculty Name</th>
            <th className="border p-2 text-left font-extrabold bg-gray-200">Patent Title</th>
            <th className="border p-2 text-left font-extrabold bg-gray-200">Patent Status</th>
          </tr>
        </thead>
        <tbody>
          {filters.academicYear || filters.patentStatus || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-neutral-400">
                  <td className="border p-2 text-black">{index + 1}</td>
                  <td className="border p-2 text-black">{item.facultyMember}</td>
                  <td className="border p-2 text-black">{item.title}</td>
                  <td className="border p-2 text-black">{item.patentStatus}</td>
                </tr>
              ))
            : originalData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-neutral-400">
                  <td className="border p-2 text-black">{index + 1}</td>
                  <td className="border p-2 text-black">{item.facultyMember}</td>
                  <td className="border p-2 text-black">{item.title}</td>
                  <td className="border p-2 text-black">{item.patentStatus}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Patents;
