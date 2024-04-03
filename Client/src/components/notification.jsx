import React from "react";

const notification = () => {
  return (
    <div>
      <h1 className="text-2xl text-left text-blue-700 p-2 mt-2">LATEST</h1>
      <div className="w-full border-2 border-solid border-blue-700 h-full rounded-lg shadow-xl drop-shadow-lg">
        <h1 className="text-2xl font-semibold text-center w-full text-white py-1 bg-blue-500 ">
          Notifications
        </h1>
        <hr className="w-full border-[1px] border-solid border-blue-700" />
        <div className="h-[30rem] w-full "></div>
      </div>
        <button className="absolute right-12 m-2 p-1 pb-3 px-4 bg-blue-700 text-white font-bold text-lg border-2 rounded-lg hover:bg-white hover:text-blue-700 hover:border-blue-700">
          <span className="w-8 h-8 inline-block pt-3 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
             
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </span>
          Archive
        </button>
    </div>
  );
};

export default notification;
