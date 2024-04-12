import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MyTable from './MyTable';
import './Technologies.css'

const Technologies = () => {
   const [data,setData] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/techtransfer");
            console.log("Response from API:", res); // Log the response from the API
            setData(res.data);
            console.log("Data after setting:", data); // Log the state after setting data
        } catch (error) {
            console.log("Error fetching data:", error); // Log any errors that occur during fetching
        }
    };
    fetchData();
}, []);


  return (
    <div className="research-scheme-container-Tech" style={{ marginBottom: '0' }}>
    <h1 className="section-heading-Tech">TECHNOLOGIES AVAILABLE FOR LICENSING & COMMERCIALIZATION</h1>

    <div>
        <MyTable data={data} ></MyTable>
    </div>

   
  </div>
  )
}

export default Technologies;