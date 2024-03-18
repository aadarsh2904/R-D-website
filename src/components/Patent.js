import React, { useState, useEffect } from 'react';
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

const data = [
  { id: 1, title: 'Sandeep Choudhary, Tanmay Vyas, Abhijeet Joshi PORTABLE BIOSENSING SYSTEM AND METHOD FOR MILK, SPOILAGE AND ADULTERATION DETECTION, India, 202121023242, 2021', academicYear: '2021', patentStatus: 'Filed', facultyMember: 'Abhijeet Joshi', department: 'A' },
  { id: 2, title: 'Manish Kumar Goyal, Jhilam sinha and Jew Das A METHOD FOR MEASURING HYDROLOGICAL RESILIENCE OF A REGION IN RESPONSE TO WARMING SHIFTS , India, 201921037336, 2021', academicYear: '2022-2023', patentStatus: 'Filed', facultyMember: 'Dr. Manish Kumar Goyal', department: 'B' },
  { id: 3, title: 'Venkatesh, C., Dudhe, P., Krishnan, M. A., Sonawane, A., Method and system for metal-free solvent-free synthesis of fused-pyrido heterocycles and their biological activities against cancer and multi-drug resistant pathogens, India, 201921029311, 2021', academicYear: '2021', patentStatus: 'Granted', facultyMember: 'Venkatesh, C.', department: 'd' },
  { id: 4, title: 'Suhel Khan, Srivathsan Vasudevan A SYSTEM FOR ACQUIRING REAL-TIME PHOTOACOUSTIC SIGNAL WITH HIGH-SPEED SIGNAL CONDITIONING AND METHOD THEREOF, India, 202221056741, 2022', academicYear: '2022', patentStatus: 'Filed', facultyMember: 'Suhel Khan', department: 'B2' },
  { id: 5, title: 'Trilok Gupta, Sandeep Chaudhary, Ravi Kr Sharma, Sudhir Kr Jain Method of Preparation of Conplas Paver Block utilizing waste polythene, India, Application No. 202011002264A, 2022', academicYear: '2022', patentStatus: 'Published', facultyMember: 'Trilok Gupta', department: 'Civil Engineering' },
  { id: 6, title: 'Vikas Vijayvargiya and Santosh Kumar Vishvakarma High Performance Double Gate Tunnel Field Effect Transistor For Low Power Applications, India, 201721000199, 2022', academicYear: '', patentStatus: 'Granted', facultyMember: 'Vikas Vijayvargiya', department: 'Electrical Engineering' },
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
              <option value="2021">2021</option>
              <option value="2022">2022</option>
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
