import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { Select, Flex, Stack } from '@chakra-ui/react';

const data = [
  { id: 1, title: 'Patent Title 1', fundingagency: 'AICTE', year: '2021', publicationtype: 'Journal', facultyMember: 'Faculty 1', department: 'Computer Science', link: 'https://example.com/project1' },
  { id: 2, title: 'Patent Title 2', fundingagency: 'DRDO', year: '2022', publicationtype: 'Conference', facultyMember: 'Faculty 2', department: 'Electrical Engineering', link: 'https://example.com/project2' },
  { id: 3, title: 'Patent Title 1', fundingagency: 'AICTE', year: '2021', publicationtype: 'Book', facultyMember: 'Faculty 1', department: 'Computer Science', link: 'https://example.com/project1' }
];

const Publication = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    publicationtype: '',
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

  return (
    <div className="px-2 bg-cover bg-center min-h-screen " style={{ backgroundImage: `url('./bgr.png')` }}>
      <Box mt={20} mb={20}>
        <Stack spacing={8} px={4} py={8} alignItems="center">
          <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
            <Select
              variant="filled"
              value={filters.publicationtype}
              onChange={(e) => handleFilterChange('publicationtype', e.target.value)}
              placeholder="Publication Type"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
            >
              <option value="">All Publication Types</option>
              <option value="Journal">Journal</option>
              <option value="Conference">Conference</option>
              <option value="Book">Book</option>
            </Select>

            <Select
              variant="filled"
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
              placeholder="Year"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
            >
              <option value="">All Years</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </Select>

            <Select
              variant="filled"
              value={filters.facultyMember}
              onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
              placeholder="Faculty Member"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
            >
              <option value="">All Faculty Members</option>
              <option value="Faculty 1">Faculty 1</option>
              <option value="Faculty 2">Faculty 2</option>
            </Select>

            <Select
              variant="filled"
              value={filters.department}
              onChange={(e) => handleFilterChange('department', e.target.value)}
              placeholder="Department"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
            >
              <option value="">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
            </Select>
          </Flex>
        </Stack>
      </Box>
      <Table w="100%" variant="striped">
        <Thead>
          <Tr className="bg-gray-200">
            <Th className="w-250">S.No</Th>
            <Th>Publication Title</Th>
            <Th className="w-14">View Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filters.publicationtype || filters.year || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
                <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                  <Td>{index + 1}</Td>
                  <Td>{item.title}</Td>
                  <Td>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md">View Details</button>
                    </a>
                  </Td>
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
                </Tr>
              ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Publication;
