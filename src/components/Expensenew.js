import React from 'react';
import './ExpenseNew.css';
import styled from 'styled-components';
import ImageComponent from './ImageComponent';

const CurvedBox = styled.div`
  
background: linear-gradient(to right, #ADD8E6 5%, #FFC0CB 95%);

  background-color: rgba(158, 179, 220, 1);
  color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap:nowrap;
  justify-content:space-between;
  height:100vh;
`;

function Expensenew() {
    return (
      <div className='all relative top-[33rem] '>
        <div className='allcontent'>
            <CurvedBox>
            <div className ="leftcontent">
            <ImageComponent></ImageComponent>
            <div className="rightcontent">
              <h1 className="title">Welcome to R&D</h1>
              <p className='text'>
                {message}
              </p>
              </div>
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
  