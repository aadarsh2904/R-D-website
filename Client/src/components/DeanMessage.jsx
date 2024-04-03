import React from "react";

const DeanMessage = () => {
  return (
    <div className="flex flex-row flex-wrap w-[85%] mx-auto p-4 my-6 pl-10 py-8">
      <div className="w-[60%] mx-auto">
        <h1 className="text-5xl font-bold text-center p-4 text-blue-900">
          Dean`s message`
        </h1>
        <p className="text-2xl text-justify ">
          Research and development have been integral to IIT Indore since its
          inception. With over 600 sponsored projects and 7500 publications in
          internationally reputed journals, the institute has made significant
          strides. Patent and product development have been a key focus,
          resulting in around 140 filed patents and 63 granted patents.
          Initiatives like SIPPT and YFRGS support faculty and students in
          patent filing and research projects. The R&D Office collaborates with
          techno-commercial experts to assess technology readiness for
          commercialization. Three technologies have already been transferred to
          industries, with more in the pipeline. To bolster the translation and
          commercialization process, the Centre for Translational Research (CTR)
          has been launched, offering fellowships to students and researchers
          involved in projects with commercial potential. These efforts aim to
          align technologies with market demand and provide necessary support
          for commercialization. Technologies are compiled in a book for
          showcasing to industries across various domains like AI/ML,
          healthcare, sustainability, manufacturing, and robotics, facilitating
          technology transfer from IIT Indore to the market.
        </p>
      </div>
      <div className="w-[25%] mx-auto pt-[2rem]">
        <img
          src=""
          className="h-[20rem] w-[75%] p-2 border-8 border-solid border-blue-800 shadow-2xl "
        />
      </div>
    </div>
  );
};

export default DeanMessage;
