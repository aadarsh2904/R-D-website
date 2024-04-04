import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from '@chakra-ui/react';
import { Select, Flex, Stack } from '@chakra-ui/react';



const Patents = () => {

  const [data,setData] =useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    patentStatus: '',
    facultyMember: '',
    department: '',
    academicYear:'',
  });
  
  useEffect(()=>{
    const fetchData = async()=>{
    try {
      const res = await axios.get("http://localhost:5000/api/patents");
       setData(res.data)
    } catch (error) {
      console.log(error)
    }
    }
    
    fetchData();
  },[])

  useEffect(() => {
    setOriginalData(data);
    setFilteredData(data);
    
    
  }, [data]);

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
              value={filters.academicYear}
              onChange={(e) => handleFilterChange('academicYear', e.target.value)}
              placeholder="Select Academic Year"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
            >
              <option value="2021-22">2021-22</option>
              <option value="2022-23">2022-23</option>
            </Select>
            <Select
              variant="filled"
              value={filters.patentStatus}
              onChange={(e) => handleFilterChange('patentStatus', e.target.value)}
              placeholder="Select Patent Status"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
            >
              <option value="Filed">Filed</option>
              <option value="Granted">Granted</option>
              <option value="Published">Published</option>
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
            >
              <option value="Abhijeet Joshi">Abhijeet Joshi</option>
              <option value="Dr. Manish Kumar Goyal">Dr. Manish Kumar Goyal</option>
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
            >
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
            </Select>
          </Flex>
        </Stack>
      </Box>
      <Table w="100%" variant="striped">
        <Thead>
          <Tr className="bg-gray-200">
            <Th className="w-6">S.No</Th>
            <Th>Faculty Name</Th>
            <Th>Patent Title</Th>
            <Th>Patent Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filters.academicYear || filters.patentStatus || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
                <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                  <Td>{index + 1}</Td>
                  <Td>{item.facultyMember}</Td>
                  <Td>{item.title}</Td>
                  <Td>{item.patentStatus}</Td>
                </Tr>
              ))
            : originalData.map((item, index) => (
                <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                  <Td>{index + 1}</Td>
                  <Td>{item.facultyMember}</Td>
                  <Td>{item.title}</Td>
                  <Td>{item.patentStatus}</Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Patents;
