import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Box,Heading } from '@chakra-ui/react';
import { Select, Flex, Stack } from '@chakra-ui/react';

const Publication = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    publicationtype: '',
    year: '',
    facultyMember: '',
    department: '',
  });
  const [options, setOptions] = useState({
    publicationtype: [],
    year: [],
    facultyMember: [],
    department: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/publications");
        setData(res.data);
        setOriginalData(res.data);
        setFilteredData(res.data);
        extractOptions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const extractOptions = (data) => {
    const uniqueOptions = {
      publicationtype: [...new Set(data.map((item) => item.publicationtype))],
      year: [...new Set(data.map((item) => item.year))],
      facultyMember: [...new Set(data.map((item) => item.facultyMember))],
      department: [...new Set(data.map((item) => item.department))],
    };
    setOptions(uniqueOptions);
  };

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
      <Heading 
        as="h1"
        className="text-3xl font-bold text-center my-8 text-black"
        style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
      >
      Publication
        </Heading>
        <Stack spacing={8} px={4} py={8} alignItems="center">
          <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
            <Select
              variant="filled"
              value={filters.publicationtype}
              onChange={(e) => handleFilterChange('publicationtype', e.target.value)}
              placeholder="Publication Type"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
              padding="0.75rem"
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Publication Types</option>
              {options.publicationtype.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              variant="filled"
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
              placeholder="Year"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
              padding="0.75rem"
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Years</option>
              {options.year.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              variant="filled"
              value={filters.facultyMember}
              onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
              placeholder="Faculty Member"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
              padding="0.75rem"
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Faculty Members</option>
              {options.facultyMember.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              variant="filled"
              value={filters.department}
              onChange={(e) => handleFilterChange('department', e.target.value)}
              placeholder="Department"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
              padding="0.75rem"
            
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Departments</option>
              {options.department.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
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
