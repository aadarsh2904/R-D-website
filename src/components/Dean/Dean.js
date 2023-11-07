import React from 'react';
import './Dean.css';
import styled from 'styled-components';

const CurvedBox = styled.div`
  


 
  color: white;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  margin: auto;
  outline:none;
 
  display: flex;
  flex-wrap:nowrap;
  justify-content:space-between;
  height:90vh;
`;
export default function Dean() {
    return (
      <div className='relative top-[29rem]'>
    <div className="director relative ">
    <div className="dir-col ">
    <CurvedBox>
      <img src={'abhinandan1.jpg'} alt="Logo"  className='border-4 mt-6 ml-6 shadow-lg'/>
      <div className='txt pt-6 font-light'>
      <h1 className='text-4xl font-bold text-blue-900'>Research at IIT INDORE</h1>
    <p>"Welcome to our captivating photo gallery, where images come to life and stories unfold through the lens.<br/> </p>
    <p>Each photograph is a visual testament to the moments, experiences, and achievements that define our organization.</p>
<p>In this collection, we invite you to embark on a journey of discovery, inspiration, and connection. Our carefully curated photographs capture the essence of who we are, what we do, and the impact we have on our community, industry, and beyond.</p>
    {/* <h3></h3> */}
      </div>
      </CurvedBox>
    </div>
    </div>
    </div>
    );
    }
