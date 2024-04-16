import React from 'react';
import './MyTable.css';  

const MyTable = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    // Handle the case where data is undefined, null, or empty
    return <p>No data available</p>;
  }


  return (
    <table className="my-table">
     
        <thead>
          <tr className="bg-gray-200">
            <th className="w-250">S.No</th>
            <th>Technology</th>
            <th className="w-14">Application Area</th>
          </tr>
        </thead>
        
      <tbody>
        <tr key={data.id}>
        
            <td key={data.id}>{data[id]}</td>
        
        </tr>
      </tbody>
    </table>
  );
};

export default MyTable;