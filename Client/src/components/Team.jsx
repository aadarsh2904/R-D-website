import React from "react";
import { OFFICE, Finance, People, Purchase, Executive, TranslationalResearch } from "./data";

const TeamPage = () => {
  return (
    <div>
      {/* R&D Section */}
      <div className="flex flex-col justify-center items-center pb-18 mb-16">
        <h1 className="flex justify-center items-center text-3xl mb-6 mt-12 text-black font-bold" style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}>R&D OFFICE</h1>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {OFFICE.map((val) => (
            <div key={val.id} className=" outline scale-95 relative w-[375px] overflow-hidden rounded-3xl shadow-lg group bg-white m-8 border border-gray-300  hover:border-blue-500">
              <div className="relative">
                <img className="object-cover w-full h-72 xl:h-80 rounded-t-3xl" src={val.image_url} alt={val.name} />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 text-center bg-gray-900 text-white opacity-90">
                  <p className=" text-xl font-bold">{val.name}</p>
                </div>
              </div>
              <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 bg-gray-900 text-white hover:opacity-90 group-hover:opacity-90">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-700 rounded-md"></div>
                <div className="relative flex flex-col items-center justify-center w-full h-full ">
                 
                  <p className="mb-1 text-lg font-bold">{val.position}</p>
                  <p className="mb-1 text-lg text-lightblue font-semibold"><span role="img" aria-label="mail">📧</span> E-mail: <span className="text-lightblue">{val.email}</span></p>
                  <p className="mb-1 text-lg text-black font-semibold"><span role="img" aria-label="phone">📞</span> Phone: {val.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* People Section */}
      <div className="flex flex-row flex-wrap justify-center items-center">
        {People.map((val) => (
          <div key={val.id} className="scale-95 relative w-[300px] overflow-hidden rounded-3xl shadow-lg group bg-white m-8 border border-gray-300 hover:border-blue-500">
            <div className="relative">
              <img className="object-cover w-full h-72 xl:h-80 rounded-t-3xl" src={val.image_url} alt={val.name} />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 text-center bg-gray-900 text-white opacity-90">
                <p className=" text-xl font-bold">{val.name}</p>
              </div>
            </div>
            <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 bg-gray-900 text-white hover:opacity-90 group-hover:opacity-90">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-700 rounded-md"></div>
              <div className="relative flex flex-col items-center justify-center w-full h-full ">
              
                <p className="mb-1 text-lg font-bold">{val.position}</p>
                <p className="mb-1 text-lg text-lightblue font-semibold"><span role="img" aria-label="mail">📧</span> E-mail: <span className="text-lightblue">{val.email}</span></p>
                <p className="mb-1 text-lg text-black font-semibold"><span role="img" aria-label="phone">📞</span> Phone: {val.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Finance Section */}
      <div className="flex flex-col justify-center items-center mt-20 pt-10 pb-18 mb-20">
        <h1 className="flex justify-center items-center text-3xl mb-6 text-black font-bold" style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}>R&D Finance</h1>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {Finance.map((val) => (
            <div key={val.id} className="scale-95 relative w-[300px] overflow-hidden rounded-3xl shadow-lg group bg-white m-8 border border-gray-300 hover:border-blue-500">
              <div className="relative">
                <img className="object-cover w-full h-72 xl:h-80 rounded-t-3xl" src={val.image_url} alt={val.name} />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 text-center bg-gray-900 text-white opacity-90">
                  <p className=" text-xl font-bold">{val.name}</p>
                </div>
              </div>
              <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 bg-gray-900 text-white hover:opacity-90 group-hover:opacity-90">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-700 rounded-md"></div>
                <div className="relative flex flex-col items-center justify-center w-full h-full ">
                
                  <p className="mb-1 text-lg font-bold">{val.position}</p>
                  <p className="mb-1 text-lg text-lightblue font-semibold"><span role="img" aria-label="mail">📧</span> E-mail: <span className="text-lightblue">{val.email}</span></p>
                  <p className="mb-1 text-lg text-black font-semibold"><span role="img" aria-label="phone">📞</span> Phone: {val.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Section */}
      <div className="flex flex-col justify-center items-center pb-18 mb-16">
        <h1 className="flex justify-center items-center text-3xl mb-6 text-black font-bold" style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}>R&D Purchase</h1>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {Purchase.map((val) => (
            <div key={val.id} className="scale-95 relative w-[300px] overflow-hidden rounded-3xl shadow-lg group bg-white m-8 border border-gray-300 hover:border-blue-500">
              <div className="relative">
                <img className="object-cover w-full h-72 xl:h-80 rounded-t-3xl" src={val.image_url} alt={val.name} />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 text-center bg-gray-900 text-white opacity-90">
                  <p className=" text-xl font-bold">{val.name}</p>
                </div>
              </div>
              <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 bg-gray-900 text-white hover:opacity-90 group-hover:opacity-90">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-700 rounded-md"></div>
                <div className="relative flex flex-col items-center justify-center w-full h-full ">
                  
                  <p className="mb-1 text-lg font-bold">{val.position}</p>
                  <p className="mb-1 text-lg text-lightblue font-semibold"><span role="img" aria-label="mail">📧</span> E-mail: <span className="text-lightblue">{val.email}</span></p>
                  <p className="mb-1 text-lg text-black font-semibold"><span role="img" aria-label="phone">📞</span> Phone: {val.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Translational Research Section */}
      <div className="flex flex-col justify-center items-center pb-18 mb-16">
        <h1 className="flex justify-center items-center text-3xl mb-6 text-black font-bold" style={{ fontFamily: 'Arial, sans-serif', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}>Centre for Translational Research</h1>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {Executive.map((val) => (
            <div key={val.id} className="scale-95 relative w-[300px] overflow-hidden rounded-3xl shadow-lg group bg-white m-8 border border-gray-300 hover:border-blue-500">
              <div className="relative">
                <img className="object-cover w-full h-72 xl:h-80 rounded-t-3xl" src={val.image_url} alt={val.name} />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 text-center bg-gray-900 text-white opacity-90">
                  <p className=" text-xl font-bold">{val.name}</p>
                </div>
              </div>
              <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 bg-gray-900 text-white hover:opacity-90 group-hover:opacity-90">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-700 rounded-md"></div>
                <div className="relative flex flex-col items-center justify-center w-full h-full ">
                 
                  <p className="mb-1 text-lg font-bold">{val.position}</p>
                  <p className="mb-1 text-lg text-lightblue font-semibold"><span role="img" aria-label="mail">📧</span> E-mail: <span className="text-lightblue">{val.email}</span></p>
                  <p className="mb-1 text-lg text-black font-semibold"><span role="img" aria-label="phone">📞</span> Phone: {val.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
