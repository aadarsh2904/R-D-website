import React from 'react';
import './MyTable.css';  // Importing CSS for styling

// Functional component for displaying a table
const MyTable = ({ data }) => {
  // Extracting table headers from the first object in data array
  const headers = Object.keys(data[0]);

  return (
    <table className="my-table">
      <thead>
        <tr>
        {/* Rendering table rows */}
          {headers.map((header) => (
            <th key={header}>{header}</th>/* Each header is a table cell */
          ))}
        </tr>
      </thead>
      <tbody>
         {/* Rendering table rows */}
        {data.map((row, index) => (
          <tr key={index}>
              {/* Rendering cells for each row */}
            {headers.map((header) => (
              <td key={header}>{row[header]}</td> /* Each cell corresponds to a data property */
              
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
