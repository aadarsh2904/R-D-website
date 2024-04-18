import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { Select, Flex, Stack } from '@chakra-ui/react'; // You can remove this import if you're not using Flex and Stack

const Publication = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    publicationtype: '',
    year: '',
    facultyMember: '',
    department: '',
    publicationTypes: [],
    years: [],
    facultyMembers: [],
    departments: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/publications");
        if (res.data && Array.isArray(res.data)) { // Check if res.data exists and is an array
          setData(res.data);
          setOriginalData(res.data);
          setFilteredData(res.data);
          
          const publicationTypes = [...new Set(res.data.map(item => item.publicationtype))];
          const years = [...new Set(res.data.map(item => item.year))];
          const facultyMembers = [...new Set(res.data.map(item => item.facultyMember))];
          const departments = [...new Set(res.data.map(item => item.department))];
          
          setFilters(prevFilters => ({
            ...prevFilters,
            publicationTypes,
            years,
            facultyMembers,
            departments
          }));
        } else {
          console.log("Data is not an array or is undefined");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  
  

  const applyFilters = () => {
    let filteredResult = [...originalData];

    Object.keys(filters).forEach((filter) => {
      if (filters[filter] !== '' && filter !== 'publicationTypes' && filter !== 'years' && filter !== 'facultyMembers' && filter !== 'departments') {
        filteredResult = filteredResult.filter((item) => item[filter] === filters[filter]);
      }
    });

    setFilteredData(filteredResult);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  return (
    <div className="px-2 bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("./bgr.png")' }}>
      <Box mt={20} mb={20}>
        <Stack spacing={8} px={4} py={8} alignItems="center">
          <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
            {Object.keys(filters).map((filterName, index) => (
              (filterName !== 'publicationTypes' && filterName !== 'years' && filterName !== 'facultyMembers' && filterName !== 'departments') &&
              <Select
                key={index}
                variant="filled"
                value={filters[filterName]}
                onChange={(e) => handleFilterChange(filterName, e.target.value)}
                placeholder={filterName.charAt(0).toUpperCase() + filterName.slice(1)} 
                width={{ base: '100%', md: '20%' }}
                borderRadius="5px"
                height="2.5rem"
                icon={<></>}
                bg='#cbd5e1'
                mb={4}
              >
                <option value="">All {filterName.charAt(0).toUpperCase() + filterName.slice(1)}</option>
                {filters[filterName + 's'].map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </Select>
            ))}
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
