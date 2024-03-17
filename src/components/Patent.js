import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { Select, Input, Flex, Text} from '@chakra-ui/react';

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

  const handleResetFilters = () => {
    setFilters({
      academicYear: '',
      patentStatus: '',
      facultyMember: '',
      department: '',
    });
  };

  return (
    <main className="px-2 " >
      <Flex flexDir="row" w="100%" justifyContent="space-between" alignItems="center" my="50">
        <Flex gap={100} margin="30px 0px 0px 0px" justifyContent="center" alignItems="center">
          <Select
            variant="filled"
            value={filters.academicYear}
            onChange={(e) => handleFilterChange('academicYear', e.target.value)}
            placeholder="Select Academic Year"
            w="100%"
            border="1px"
            borderRadius="5px"
            height="3rem"
            icon={<></>}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>
          <Select
            variant="filled"
            value={filters.patentStatus}
            onChange={(e) => handleFilterChange('patentStatus', e.target.value)}
            placeholder="Select Patent Status"
            w="100%"
            borderRadius="5px"
            height="3rem"
            icon={<></>}
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
            w="100%"
            maxW="20rem"
            borderRadius="5px"
            height="3rem"
            icon={<></>}
          >
            <option value="Abhijeet Joshi">Abhijeet Joshi</option>
            <option value="Dr. Manish Kumar Goyal">Dr. Manish Kumar Goyal</option>
          </Select>
          <Select
            variant="filled"
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            placeholder="Select Department"
            w="100%"
            maxW="20rem"
            borderRadius="5px"
            height="3rem"
            fontsize="lg"
            icon={<></>}
          >
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
          </Select>
        </Flex>
      </Flex>
      <Flex flexDir="row" w="100%" justifyContent="space-between" alignItems="center" my="2">
        <div>
          Show entries{' '}
          <Select placeholder="10" w="14" border="0.5px" borderColor="gray.400">
            <option value="10">10</option>
            <option value="dog">Option 1</option>
          </Select>{' '}
          
        </div>
        <Flex alignItems="center">
          Search:
          <Input type="text" className="border-zinc-400 border h-full rounded ml-1" />
        </Flex>
      </Flex>
      <Table w="100%" variant="striped" margin=" 0px 0px 200px 0px">
        <Thead >
          <Tr classname="bg-blue-900 text-xl font-bold ">
            <Th className="w-6 bg-blue-900 text-xl font-bold">S.No</Th>
            <Th className="bg-blue-900 text-xl font-bold">Faculty Name</Th>
            <Th className="bg-blue-900 text-xl font-bold">Patent Title</Th>
            <Th className="bg-blue-900 text-xl font-bold">Patent Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filters.academicYear || filters.patentStatus || filters.facultyMember || filters.department
            ? filteredData.map((item, index) => (
                <Tr key={index} className="hover:bg-gray-200 font-sans" >
                  <Td  className="font-serif">{index + 1}</Td>
                  <Td  className="font-serif">{item.facultyMember}</Td>
                  <Td  className="font-serif">{item.title}</Td>
                  <Td  className="font-serif">{item.title}</Td>
                  <Td className="font-serif">{item.patentStatus}</Td>
                </Tr>
              ))
            : originalData.map((item, index) => (
                <Tr key={index} className="hover:bg-gray-200 font-sans">
                  <Td  className="font-serif">{index + 1}</Td>
                  <Td  className="font-serif">{item.facultyMember}</Td>
                  <Td className="font-serif">{item.title}</Td>
                  <Td  className="font-serif">{item.patentStatus}</Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </main>
  );
};

export default Patents;
