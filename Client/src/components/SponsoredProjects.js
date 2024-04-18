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
    fundingagency: '',
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/sponsored");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setOriginalData(data);
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    applyFilters();
  }, [filters, originalData]);

  const applyFilters = () => {
    let filteredResult = [...originalData];

    Object.keys(filters).forEach((filter) => {
      if (filters[filter] !== '') {
        filteredResult = filteredResult.filter(
          (item) => item[filter] === filters[filter]
        );
      }
    });

    setFilteredData(filteredResult);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const uniquefundingagency = [...new Set(data.map((item) => item.fundingagency))];
  const uniqueStatus = [...new Set(data.map((item) => item.status))];
  const uniqueFacultyMembers = [
    ...new Set(data.map((item) => item.facultyMember)),
  ];
  const uniqueDepartments = [...new Set(data.map((item) => item.department))];

  const fundingagencyOptions = uniquefundingagency.map((fundingagency) => (
    <option key={fundingagency} value={fundingagency}>
      {fundingagency}
    </option>
  ));

  const statusOptions = uniqueStatus.map((status) => (
    <option key={status} value={status}>
      {status}
    </option>
  ));

  const facultyMemberOptions = uniqueFacultyMembers.map((member) => (
    <option key={member} value={member}>
      {member}
    </option>
  ));

  const departmentOptions = uniqueDepartments.map((department) => (
    <option key={department} value={department}>
      {department}
    </option>
  ));









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
             <option value="">All fundingagency</option>
              {fundingagencyOptions}
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
              {statusOptions}
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
             <option value="">All facultyMember</option>
              {facultyMemberOptions}
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
              <option value="">All Department</option>
              {departmentOptions}
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
