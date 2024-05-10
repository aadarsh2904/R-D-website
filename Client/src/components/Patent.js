import React, { useState, useEffect } from 'react';
// This component contains section of Patents Page 
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Heading,
} from '@chakra-ui/react';
import { Select, Flex, Stack } from '@chakra-ui/react';

const Patents = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    year: '',
    Status: '',
    facultyMember: '',
    department: '',
  });

  //  For fetching data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/patents");
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

  const uniqueYears = [...new Set(data.map((item) => item.year))];
  const uniqueStatus = [...new Set(data.map((item) => item.Status))];
  const uniqueFacultyMembers = [
    ...new Set(data.map((item) => item.facultyMember)),
  ];
  const uniqueDepartments = [...new Set(data.map((item) => item.department))];

  const yearOptions = uniqueYears.map((year) => (
    <option key={year} value={year}>
      {year}
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
    <div className="px-2 bg-cover bg-center min-h-screen " style={{ backgroundImage: 'url("./bgr.png")' }}>
      <Box mt={20} mb={20}>
        <Heading
          as="h1"
          className="text-3xl font-bold text-center my-8 text-black"
          style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
        >
          Patent Details
        </Heading>
        <Stack spacing={8} px={4} py={8} alignItems="center">
          {/* filters  */}
          <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
            <Select
              variant="filled"
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
              placeholder="Select Academic Year"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Shadow
              padding="0.75rem"
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Years</option>
              {yearOptions}
            </Select>
            <Select
              variant="filled"
              value={filters.Status}
              onChange={(e) => handleFilterChange('Status', e.target.value)}
              placeholder="Select Patent Status"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              padding="0.75rem"
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Statuses</option>
              {statusOptions}
            </Select>
            <Select
              variant="filled"
              value={filters.facultyMember}
              onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
              placeholder="Select Faculty Member"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              padding="0.75rem"
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Faculty Members</option>
              {facultyMemberOptions}
            </Select>
            <Select
              variant="filled"
              value={filters.department}
              onChange={(e) => handleFilterChange('department', e.target.value)}
              placeholder="Select Department"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="3.5rem"
              icon={<></>}
              bg='#cbd5e1'
              padding="0.75rem"
              fontSize="20px"
              style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
            >
              <option value="">All Departments</option>
              {departmentOptions}
            </Select>
          </Flex>
        </Stack>
      </Box>
      <Table w="100%" variant="striped">
        <Thead>
          <Tr className="bg-gray-200">
            <Th className="w-6 text-xl">S.No</Th>
            <Th className=" text-xl">Faculty Name</Th>
            <Th className=" text-xl">Patent Title</Th>
            <Th className=" text-xl">Patent Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item, index) => (
            <Tr key={index} className={index % 2 === 0 ? 'bg-gray-100 hover:bg-table' : 'hover:bg-table'}>
              <Td>{index + 1}</Td>
              <Td>{item.facultyMember}</Td>
              <Td>{item.title}</Td>
              <Td>{item.Status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Patents;