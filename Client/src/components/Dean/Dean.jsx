import React from "react";

export default function Dean() {
  return (
    <div id="about" className="relative py-8 ">
      <div className="flex flex-row flex-wrap items-center p-4 w-[90%] mx-auto">
        <div className="flex flex-col text-2xl text-justify mx-auto font-light w-[40%] h-full p-0 m">
          <h1 className="text-5xl  font-bold text-blue-900 mb-[1rem]">
            Research at IIT INDORE
          </h1>
          <p className="">
            "Welcome to our captivating photo gallery, where images come to life
            and stories unfold through the lens. Each photograph is a visual
            testament to the moments, experiences, and achievements that define
            our organization. In this collection, we invite you to embark on a
            journey of discovery, inspiration, and connection. Our carefully
            curated photographs capture the essence of who we are, what we do,
            and the impact we have on our community, industry, and beyond.
          </p>
        </div>
        <div className="w-[40%] flex flex-col items-end">
          <hr className="inline-block w-[50%] border-4 border-solid border-blue-700 " />
          <img
            src={"abhinandan1.jpg"}
            alt="Logo"
            className="inline-block border-r-8 border-solid border-blue-700  mx-auto shadow-lg h-[30rem] w-[100%]"
          />
          <hr className="inline-block w-[50%] border-4 border-solid border-blue-700 " />
        </div>
      </div>
    </div>
  );
}
