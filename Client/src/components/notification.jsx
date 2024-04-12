import React from "react";

const notification = () => {
  const handleArchive = ()=>{
    window.location.href = '/notification'
  }
  return (
    <div>
      <div className="w-full border-2 border-solid border-blue-700 h-full rounded-lg shadow-xl drop-shadow-lg mt-6 ">
        <h1 className="text-3xl font-bold text-center w-full text-white py-2 bg-blue-600 ">
          Notifications
        </h1>
        <hr className="w-full border-[1px] border-solid border-blue-700" />
        <div className="max-h-[55vh] w-full overflow-y-scroll ">
          <ul className="pl-4 pt-4 pb-2 text-xl font-semibold text-gray-700">
            <li className="p-3">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/e71ab3e7ac846c6e9d34ade82a2ea3fe.pdf"
                target="_blank"
              >
                Revised Guidelines for Support to Mining Research
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/d0a7ea9181e1fde82aa0f8617b73f207.jpg"
                target="_blank"
              >
                Schedule of call for proposals 2023
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/d0a7ea9181e1fde82aa0f8617b73f207.jpg"
                target="_blank"
              >
                Schedule of call for proposals 2023
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/577fbed1c2c071a584e7dd3378264d15.pdf"
                target="_blank"
              >
                The 'Challenge Call' inviting proposals under i4 and PACE
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/312a5b037fada8a0187adedf56bd042a.pdf"
                target="_blank"
              >
                Call for proposals under J P Narayan Centre of Excellence in the
                humanities
              </a>
            </li>
            <li className="p-3">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/559acd5b792dc82c9915d6231e2090a6.pdf"
                target="_blank"
              >
                VAIBHAV fellowship (Ist call)
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/d0a7ea9181e1fde82aa0f8617b73f207.jpg"
                target="_blank"
              >
                Schedule of call for proposals 2023
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/d0a7ea9181e1fde82aa0f8617b73f207.jpg"
                target="_blank"
              >
                Schedule of call for proposals 2023
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/577fbed1c2c071a584e7dd3378264d15.pdf"
                target="_blank"
              >
                The 'Challenge Call' inviting proposals under i4 and PACE
              </a>
            </li>
            <li className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/312a5b037fada8a0187adedf56bd042a.pdf"
                target="_blank"
              >
                Call for proposals under J P Narayan Centre of Excellence in the
                humanities
              </a>
            </li>
            <li className="p-3">
              <span className="inline-block w-3 h-3 rounded-full bg-black mr-3"></span>
              <a
                className="hover:underline"
                href="https://rnd.iiti.ac.in/files_upload/news/559acd5b792dc82c9915d6231e2090a6.pdf"
                target="_blank"
              >
                VAIBHAV fellowship (Ist call)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
       onClick={handleArchive}
        className="absolute right-12 m-3 p-1 pb-3 px-4 bg-blue-700 text-white font-bold text-lg border-2 rounded-lg hover:bg-white hover:text-blue-700 hover:border-blue-700"
      >
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
