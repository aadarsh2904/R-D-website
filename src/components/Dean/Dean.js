import React from 'react';
import './Dean.css';
import styled from 'styled-components';
import abhi from './abhinandan.jpg'
const CurvedBox = styled.div`
  
background: linear-gradient(to right, #ADD8E6 5%, #FFC0CB 95%);

  background-color: rgba(158, 179, 220, 1);
  color: white;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  margin: auto;
  outline:none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap:nowrap;
  justify-content:space-between;
  height:90vh;
`;
export default function Dean() {
    return (<div className="director">
    <div className="dir-col">
    <CurvedBox>
      <img src={abhi} alt="Logo" />
      <div className='txt'>
      <h1>Research at IIT INDORE</h1>
    <p>"Welcome to our captivating photo gallery, where images come to life and stories unfold through the lens.<br/> </p>
    <p>Each photograph is a visual testament to the moments, experiences, and achievements that define our organization.</p>
<p>In this collection, we invite you to embark on a journey of discovery, inspiration, and connection. Our carefully curated photographs capture the essence of who we are, what we do, and the impact we have on our community, industry, and beyond.</p>
    <h3></h3>
      </div>
      </CurvedBox>
    </div>
    </div>
    );
    }
