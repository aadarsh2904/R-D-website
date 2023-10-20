import React from 'react';
import './image/suhas_s_joshi.png';
import './ImageComponent.css';

function ImageComponent() {
  return (
    <div className='w-42 pt-7 text-2xl '>
     
      <img src={require('./image/suhas_s_joshi.png')} alt="My Image" className='border-4'/>
      <h1>Director Suhas S Joshi</h1>
    </div>
  );
}

export default ImageComponent;