import React from "react";

import Marquee from "react-fast-marquee";

const App = () => (
    <Marquee direction="up" speed={50} pauseOnClick  className="relative right-[15rem] mt-[3rem] mb-[-3rem] py-[10rem] px-[5rem] overflow-clip ml-4  ]">
        <div className="flex flex-col ml-2 ">
        <a href="#" className="py-4 text-gray-400 hover:text-blue-500 hover:font-semibold hover:underline">This is a notice about xyz </a>
        <a href="#" className="py-4 text-gray-400 hover:text-blue-500 hover:font-semibold hover:underline">This is a notice2 about xyz</a>
        <a href="#" className="py-4 text-gray-400 hover:text-blue-500 hover:font-semibold hover:underline">This is a notice3 about xyz</a>
        <a href="#" className="py-4 text-gray-400 hover:text-blue-500 hover:font-semibold hover:underline">This is a notice4 about xyz</a>
        <a href="#" className="py-4 text-gray-400 hover:text-blue-500 hover:font-semibold hover:underline">This is a notice5 about xyz</a>
        </div>
    </Marquee>
);

export default App;