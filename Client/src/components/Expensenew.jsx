import React from "react";

function Expensenew() {
  return (
    <div className="flex flex-row flex-wrap w-[85%] mx-auto p-4 my-6 pl-10 py-8">
      <div className="w-[25%] mx-auto pt-[2rem]">
        <img
          src="./Dir.png"
          className="h-[20rem] w-[75%] p-2 border-8 border-solid border-blue-800 shadow-2xl "
        />
      </div>
      <div className="w-[50%] mx-auto">
        <h1 className="text-5xl font-bold text-center p-2 text-blue-900">
          Welcome to R & D
        </h1>
        <p className="text-2xl text-justify ">
          Happy to present the latest compilation of technologies developed by
          IIT Indore professors and students, showcasing years of scientific
          research. Some are market-ready, others need specialized support for
          enhancement. The institute has established a Center for Translational
          Research (CTR), offering fellowships for students to convert
          innovations into prototypes. Currently, five translational fellows are
          active. This compilation highlights the institute's contributions to
          technology development, industry, innovation, and entrepreneurship.
          Congratulations to all faculty and students involved, wishing them
          success in advancing their technologies further.
        </p>
      </div>
    </div>
  );
}

export default Expensenew;
