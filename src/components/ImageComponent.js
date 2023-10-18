import React from 'react';
import './image/suhas_s_joshi.png';
import './ImageComponent.css';

function ImageComponent() {
  return (
    <div>
     
      <img src={require('./image/suhas_s_joshi.png')} alt="My Image" className='image1'/>
      <h1>Director Suhas S Joshi</h1>
    </div>
  );
}

export default ImageComponent;