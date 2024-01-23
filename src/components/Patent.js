import React, { useState, useEffect } from 'react';
import './table'

const data = [
  { id: 1, title: 'Sandeep Choudhary, Tanmay Vyas, Abhijeet Joshi PORTABLE BIOSENSING SYSTEM AND METHOD FOR MILK, SPOILAGE AND ADULTERATION DETECTION, India, 202121023242, 2021', academicYear: '2021', patentStatus: 'Filed', facultyMember: 'Abhijeet Joshi', department: 'A' },
  { id: 2, title: 'Manish Kumar Goyal, Jhilam sinha and Jew Das A METHOD FOR MEASURING HYDROLOGICAL RESILIENCE OF A REGION IN RESPONSE TO WARMING SHIFTS , India, 201921037336, 2021', academicYear: '2022-2023', patentStatus: 'Filed', facultyMember: 'Dr. Manish Kumar Goyal', department: 'B' },
  { id: 3, title: 'Venkatesh, C., Dudhe, P., Krishnan, M. A., Sonawane, A., Method and system for metal-free solvent-free synthesis of fused-pyrido heterocycles and their biological activities against cancer and multi-drug resistant pathogens, India, 201921029311, 2021', academicYear: '2021', patentStatus: 'Granted', facultyMember: 'Venkatesh, C.', department: 'd' },
  { id: 4, title: 'Suhel Khan, Srivathsan Vasudevan A SYSTEM FOR ACQUIRING REAL-TIME PHOTOACOUSTIC SIGNAL WITH HIGH-SPEED SIGNAL CONDITIONING AND METHOD THEREOF, India, 202221056741, 2022', academicYear: '2022', patentStatus: 'Filed', facultyMember: 'Suhel Khan', department: 'B2' },
  { id: 5, title: 'Trilok Gupta, Sandeep Chaudhary, Ravi Kr Sharma, Sudhir Kr Jain Method of Preparation of Conplas Paver Block utilizing waste polythene, India, Application No. 202011002264A, 2022', academicYear: '2022', patentStatus: 'Published', facultyMember: 'Trilok Gupta', department: 'Civil Engineering' },
  { id: 6, title: 'Vikas Vijayvargiya and Santosh Kumar Vishvakarma High Performance Double Gate Tunnel Field Effect Transistor For Low Power Applications, India, 201721000199, 2022', academicYear: '', patentStatus: 'Granted', facultyMember: 'Vikas Vijayvargiya', department: 'Electrical Engineering' },
  
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
          opacity:500,
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity and color as needed
        }}
      >
      
      <nav className="flex justify-between items-center  p-4 w-full">
      <label className="mr-8">
  <select
    value={filters.academicYear}
    onChange={(e) => handleFilterChange('academicYear', e.target.value)}
    className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue border-2 border-double border-gray-500 rounded-lg"
  >
    <option value="">Select Academic Year</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
  </select>
</label>

<label className="mr-8">
  <select
    value={filters.patentStatus}
    onChange={(e) => handleFilterChange('patentStatus', e.target.value)}
    className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue border-2 border-double border-gray-500 rounded-lg"
  >
    <option value="">Select Patent Status</option>
    <option value="Filed">Filed</option>
    <option value="Granted">Granted</option>
    <option value="Published">Published</option>
  </select>
</label>

<label className="mr-8">
  <select
    value={filters.facultyMember}
    onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
    className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue border-2 border-double border-gray-500 rounded-lg"
  >
    <option value="">Select Faculty Member</option>
    <option value="Abhijeet Joshi">Abhijeet Joshi</option>
    <option value="Dr. Manish Kumar Goyal">Dr. Manish Kumar Goyal</option>
  </select>
</label>

<label>
  <select
    value={filters.department}
    onChange={(e) => handleFilterChange('department', e.target.value)}
    className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue border-2 border-double border-gray-500 rounded-lg"
  >
    <option value="">Select Department</option>
    <option value="Civil Engineering">Civil Engineering</option>
    <option value="Electrical Engineering">Electrical Engineering</option>
  </select>
</label>

        <button onClick={handleResetFilters} className="p-2 text-base cursor-pointer bg-blue-500 text-white rounded-lg">
          Reset
        </button>
      </nav>
      
      

      <table className="w-full border-collapse mt-4  bg-blue bg-opacity-60 text-gray-700 ">
        <thead>
          <tr className="border">
            <th className="border p-2 text-left font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80">S.No</th>
            <th className="border p-2 text-left font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80">Faculty Name</th>
            <th className="border p-2 text-left font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80">Patent Title</th>
            <th className="border p-2 text-left font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80">Patent Status</th>
          </tr>
        </thead>
        <tbody>
          {filters.academicYear || filters.patentStatus || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-table">
                  <td className="border p-2 text-black ">{index + 1}</td>
                  <td className="border p-2 text-black">{item.facultyMember}</td>
                  <td className="border p-2 text-black">{item.title}</td>
                  <td className="border p-2 text-black">{item.patentStatus}</td>
                </tr>
              ))
            : originalData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-table">
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
