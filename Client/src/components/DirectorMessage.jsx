import React from "react";

function Expensenew() {
  return (
    <div className="w-full bg-gray-100 pt-12 pb-8 mt-8">
      
      <div className="flex flex-row flex-wrap w-[85%] mx-auto p-4 mt-8 pl-10 py-8 max-sm:pl-4">
        <div className="w-[20%] min-w-[20rem] flex flex-col mx-auto p-6 ">
          <hr className=" w-[50%] border-4 border-solid border-blue-700 " />
          {/* Image of Director Sir  */}
          <img
            src={"Dir.png"}
            alt="Logo"
            className="inline-block border-l-8 border-solid border-blue-700  mx-auto  h-[20rem] w-[100%] "
          />
          <hr className="inline-block w-[50%] border-4 border-solid border-blue-700 " />
        </div>
        <div className="w-[60%] mx-auto max-[1292px]:w-[75%] max-md:w-[85%]">
          <h1 className="text-5xl font-bold py-4 text-blue-900 max-[840px]:text-4xl">
            Director`s Message
          </h1>
          <p className="text-2xl text-justify max-md:text-xl">
            Happy to present the latest compilation of technologies developed by
            IIT Indore professors and students, showcasing years of scientific
            research. Some are market-ready, others need specialized support for
            enhancement. The institute has established a Center for
            Translational Research (CTR), offering fellowships for students to
            convert innovations into prototypes. Currently, five translational
            fellows are active. This compilation highlights the institute's
            contributions to technology development, industry, innovation, and
            entrepreneurship. Congratulations to all faculty and students
            involved, wishing them success in advancing their technologies
            further.
          </p>
          <p className="text-2xl text-justify pt-2">Best wishes.</p>
          <p className="text-xl text-end ">
           <b className="font-bold text-2xl">Prof. Suhas Joshi</b> 
            <br />
           <i> Ph.D., FNAE, FNASc
            <br />
            Director, IIT Indore</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expensenew;
