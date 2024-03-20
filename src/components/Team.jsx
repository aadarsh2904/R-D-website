import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { People } from '../data/People';
import { Finance } from '../data/Finance';

function Card({ image_url, name, position, email, phone }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full mb-4"></div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{name}</div>
      <div className="text-sm text-gray-600 mb-1">{position}</div>
      <div className="text-sm text-gray-600 mb-1">Email: {email}</div>
      <div className="text-sm text-gray-600">Phone: {phone}</div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold text-black my-10">
        R&D Office
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={3}
        >
          {People.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold text-black my-10">
        R&D Finance
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={3}
        >
          {Finance.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold text-black my-10">
        R&D Purchase
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-40">
        <Card
          name="Mr. Prashant K Sahu"
          position="Junior Assistant"
          email="prashantksahu@iiti.ac.in"
          phone="+91-731-6605552"
        />
        <Card
          name="Mr. Jaiprakash"
          position="Junior Assistant"
          email="jp@iiti.ac.in"
          phone="+91-731-6605552"
        />
        </div>
        <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold text-black my-10">
          Centre for Translational Research
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Add your card for Centre for Translational Research here */}
          <Card
            name="Dr. Archana Chaudhary"
            position="Executive Officer"
            email="eo-ctr [at] iiti.ac.in"
            phone="91-731-6603578"
          />
        </div>

      
    </>
  );
}
