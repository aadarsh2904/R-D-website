import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from '@chakra-ui/react';
import { Select, Flex, Stack } from '@chakra-ui/react';

const Sponsoredproject = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    facultyMember: '',
    department: '',
    year: '',
    fundingagency: '',
  });
  const [options, setOptions] = useState({
    status: [],
    facultyMember: [],
    department: [],
    year: [],
    fundingagency: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/sponsored");
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
      status: [...new Set(data.map((item) => item.status))],
      facultyMember: [...new Set(data.map((item) => item.facultyMember))],
      department: [...new Set(data.map((item) => item.department))],
      year: [...new Set(data.map((item) => item.year))],
      fundingagency: [...new Set(data.map((item) => item.fundingagency))],
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
          Sponsored Project
        </Heading>
        <Stack spacing={8} px={4} py={8} alignItems="center">
          <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
            <Select
              variant="filled"
              value={filters.fundingagency}
              onChange={(e) => handleFilterChange('fundingagency', e.target.value)}
              placeholder="Select Funding Agency"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
              padding="0.75rem"
            
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Funding Agencies</option>
              {options.fundingagency.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              variant="filled"
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              placeholder="Select Status"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
              padding="0.75rem"
            
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Status</option>
              {options.status.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              variant="filled"
              value={filters.facultyMember}
              onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
              placeholder="Select Faculty Member"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
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
              placeholder="Select Department"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
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
            <Th className="w-6">S.No</Th>
            <Th>Project Title</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filters.status || filters.facultyMember || filters.department || filters.fundingagency
            ? filteredData.map((item, index) => (
              <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <Td>{index + 1}</Td>
                <Td>{item.title}</Td>
                <Td>{item.status}</Td>
              </Tr>
            ))
            : originalData.map((item, index) => (
              <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <Td>{index + 1}</Td>
                <Td>{item.title}</Td>
                <Td>{item.status}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Sponsoredproject;
