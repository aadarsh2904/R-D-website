import React from 'react';
import {useState} from 'react';


import fakeData from "../projectData.json";

export default function Table(){

    const [data,setData]=useState(fakeData);
    
  return (
    <div className="relative mb-4  ">
       
          <table className='w-[90%] rounded-lg' >
            <thead >
              <tr>
                <th>S.No</th>
                <th>Project</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody >
              {
                data.map((project)=>(
                    <tr>
                        <td>{project.id}</td>
                        <td>{project.title}</td>
                        <td>{project.status}</td>
                        <td> <button className="button">Detail</button></td>
                    </tr>
                ))
              }
            </tbody>
          </table>
        
      </div>
  )
}

