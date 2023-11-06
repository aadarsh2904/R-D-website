import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../components/Footer'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Team.css';
// import required modules
import { Navigation } from 'swiper/modules';
import {People} from "../data/People";

function Card({ image_url, name, position, id }) {
  return (
    <div className="card">
      <div className='imgbox'>
        <img
        src={image_url} alt={name} />
      </div>
      <div class="content">
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
         <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold color">
          R&D Officials
        </h1>
        <div className="row">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
      spaceBetween={30}
      slidesPerView={4}>
        {People.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card
              image_url={item.image_url}
              name={item.name}
              position={item.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <Footer />
    </>
  );
}