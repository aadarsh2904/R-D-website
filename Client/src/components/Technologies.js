import React, { useEffect, useState } from 'react';
// This component contains section of Tech Transfer page 
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from '@chakra-ui/react';

const Technologies = () => {
  const [data, setData] = useState([]);
// Fetching data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/techtransfer");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-2 bg-cover bg-center min-h-screen " style={{ backgroundImage: `url('./bgr.png')` }}>
      <Box mt={20} mb={20}>
        <Heading 
        as="h1"
        className="text-3xl font-bold text-center my-8 text-black"
        style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}
      >
        TECHNOLOGIES AVAILABLE FOR LICENSING & COMMERCIALIZATION
        </Heading>
        <Table w="100%" variant="striped">
          <Thead>
            <Tr className="bg-gray-200">
              <Th className="w-6">S.No</Th>
              <Th>Technology</Th>
              <Th>Application Area</Th>
            
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index} className={`hover:bg-table ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <Td>{index + 1}</Td>
                <Td>{item.technology}</Td>
                <Td>{item.applicationarea}</Td>
                
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};

export default Technologies;
