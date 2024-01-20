import React from 'react';
import './ExpenseNew.css';
import styled from 'styled-components';
import ImageComponent from './ImageComponent';

const CurvedBox = styled.div`
  

  margin:auto;
  margin-top:20px;
  margin-bottom:20px;


  border-radius: 10px;
  padding: 46px;
  text-align: center;
  
 
  display: flex;
  flex-wrap:nowrap;
  justify-content:space-between;
  height:85vh;
`;

function Expensenew() {
    return (
      <div className='all relative  '>
        <div className='allcontent'>
            <CurvedBox>
            <div className ="leftcontent p-0">
            <ImageComponent></ImageComponent>
            </div>
            <div className="rightcontent inline  ">
              <h1 className="title text-4xl font-bold">Welcome to R&D</h1>
              
              <p className='text inline-block font-medium'>
                {message}
              </p>
              </div>
              
            
            </CurvedBox>
          
            </div>
            </div>
          );
  };
  const message = `
  "Welcome to IIT Indore's Research and Development Hub!
We're thrilled to have you join us at IIT Indore, where we're passionate about research and innovation. Our R&D community brings together faculty, students, and researchers from various fields, all driven by a shared commitment to exploring the unknown and driving positive change.

As you navigate our website, you'll discover the exciting world of our ongoing research projects, innovative solutions, and the collaborative spirit that defines us. We believe that research is not just a part of our mission; it's at the core of our identity.

Join us on this inspiring journey of discovery, where we continually push the boundaries of knowledge, solve complex challenges, and shape a brighter, more innovative future.

Thank you for being a part of our vibrant R&D community!"
`;
  
  export default Expensenew;
  