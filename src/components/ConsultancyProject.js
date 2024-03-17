import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Select, Flex } from '@chakra-ui/react';

const data = [
  { id: 1, title: 'USCL, 5TBD Project', fundingagency: 'AICTE', year: '2020-21', Status: 'Ongoing', facultyMember: 'Faculty 1', department: 'Computer Science', link: 'https://example.com/project1' },
  { id: 2, title: 'Structural Audit for KV Dholpur', fundingagency: 'DRDO', year: '2020-21', Status: 'Tansfered', facultyMember: 'Faculty 2', department: 'Electrical Engineering', link: 'https://example.com/project2' },
  // Add more consultancy data as needed
];

const ConsultancyProject = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    year: '',
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
      year: '',
      facultyMember: '',
      department: '',
    });
  };

  return (
    <div className="px-2 bg-cover bg-center min-h-screen " style={{ backgroundImage: `url('./bgr.png')` }}>
      <Flex flexDir="column" alignItems="center" my="50">
        <Flex gap={350}>
          <Select
            variant="filled"
            value={filters.year}
            onChange={(e) => handleFilterChange('year', e.target.value)}
            placeholder="Select Year"
            borderRadius="5px"
            height="2.5rem"
            icon={<></>}
            bg='#cbd5e1'
          >
            <option value="">All Years</option>
            <option value="2020-21">2020-21</option>
            {/* Add more years as needed */}
          </Select>

          <Select
            variant="filled"
            value={filters.facultyMember}
            onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
            placeholder="Select Faculty Member"
            borderRadius="5px"
            height="2.5rem"
            icon={<></>}
            bg='#cbd5e1'
          >
            <option value="">All Faculty Members</option>
            <option value="Faculty 1">Faculty 1</option>
            <option value="Faculty 2">Faculty 2</option>
            {/* Add more faculty members as needed */}
          </Select>

          <Select
            variant="filled"
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            placeholder="Select Department"
            borderRadius="5px"
            height="2.5rem"
            icon={<></>}
            bg='#cbd5e1'
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            {/* Add more departments as needed */}
          </Select>
        </Flex>
      </Flex>
      <Table w="100%" variant="striped">
        <Thead>
          <Tr className="bg-gray-200">
            <Th className="w-250">S.No</Th>
            <Th >Project Title </Th>
            <Th className='w-14'>View Details</Th>
            {/* Add more table headings as needed */}
          </Tr>
        </Thead>
        <Tbody>
          {filters.year || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
              <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <Td>{index + 1}</Td>
                <Td>{item.title}</Td>
                <Td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md">View Details</button>
                  </a>
                </Td>
                {/* Add more table data cells as needed */}
              </Tr>
            ))
            : originalData.map((item, index) => (
              <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <Td>{index + 1}</Td>
                <Td>{item.title}</Td>
                <Td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md">View Details</button>
                  </a>
                </Td>
                {/* Add more table data cells as needed */}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ConsultancyProject;
