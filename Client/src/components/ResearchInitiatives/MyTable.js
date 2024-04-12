import React from 'react';
import './MyTable.css';  

const MyTable = ({ data }) => {
  if (!data) {
    // Handle the case where data is undefined or null
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[1]);

  return (
    <table className="my-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
