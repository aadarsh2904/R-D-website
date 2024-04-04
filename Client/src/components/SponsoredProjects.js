import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { Select, Flex, Stack } from '@chakra-ui/react';
import axios from 'axios';



const Sponsoredproject = () => {
  const [data,setData] = useState([])
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    fundingagency: '',
    year: '',
    facultyMember: '',
    department: '',
    Status: '',
  });

  useEffect(()=>{
    const fetchData = async()=>{
    try {
      const res = await axios.get("http://localhost:5000/api/sponsored");
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
              value={filters.fundingagency}
              onChange={(e) => handleFilterChange('fundingagency', e.target.value)}
              placeholder="Select Funding Agency"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
            >
              <option value="">All Funding Agencies</option>
              <option value="Department of Higher Education (MHRD)">Department of Higher Education (MHRD)</option>
              <option value="Department of Science and Technology">Department of Science and Technology</option>
              <option value="Science & Engineering Research Board (SERB)">Science & Engineering Research Board (SERB)</option>
            </Select>

            <Select
              variant="filled"
              value={filters.Status}
              onChange={(e) => handleFilterChange('Status', e.target.value)}
              placeholder="Select Status"
              width={{ base: '100%', md: '20%' }}
              borderRadius="5px"
              height="2.5rem"
              icon={<></>}
              bg='#cbd5e1'
              mb={4}
            >
              <option value="">All Status</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
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
            >
              <option value="">All Faculty Members</option>
              <option value="Abhinoy Kumar Singh">Abhinoy Kumar Singh</option>
              <option value="Amod C. Umarikar">Amod C. Umarikar</option>
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
            >
              <option value="">All Departments</option>
              <option value="Biosciences and Biomedical Engineering">Biosciences and Biomedical Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Humanities">Humanities</option>
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
          {filters.fundingagency || filters.Status || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
              <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <Td>{index + 1}</Td>
                <Td>{item.title}</Td>
                <Td>{item.Status}</Td>
              </Tr>
            ))
            : originalData.map((item, index) => (
              <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <Td>{index + 1}</Td>
                <Td>{item.title}</Td>
                <Td>{item.Status}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Sponsoredproject;
