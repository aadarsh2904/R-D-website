import React from "react";
import { useState, useEffect } from "react";

const Research = () => {
  const [date, setDate] = useState("02/04/2024");
  const [patentsFiled, setPatentsFiled] = useState("245");
  const [patentsRegistered, setPatentsRegistered] = useState("567");
  const [designsFiled, setDesignsFiled] = useState("24");
  const [designsRegistered, setDesignsRegistered] = useState("56");

  const CountUpAnimation = ({ initialValue, targetValue }) => {
    const [count, setCount] = useState(initialValue);
    const duration = 1000;
    const steps = targetValue - initialValue;
    const interval = duration / steps; // Set a fixed interval, but ensure it's not too small

    useEffect(() => {
      let startValue = initialValue;
      const counter = setInterval(() => {
        startValue += 1;
        setCount(startValue);
        if (startValue >= targetValue) {
          clearInterval(counter);
        }
      }, interval );

      return () => {
        clearInterval(counter);
      };
    }, [targetValue, initialValue, interval]);

    return (
      <div className="inline-block">
        <span className="">{count}</span>
      </div>
    );
  };

  return (
    <div className="relative  border-2 border-black pb-14  bg-[url('POD1.jpg')] bg-no-repeat  bg-cover bg-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-white font-bold mt-8">
          Research metrics at a glance
        </h1>
        <h3 className="text-lg font-normal text-white my-2">As of {date}</h3>
        <hr className="w-[90%] border-2 rounded-lg my-6" />
        <div className="flex flex-row flex-wrap w-[80%] mx-auto ">
          <div className="flex flex-col w-[40%] items-center mx-auto">
            <h1 className="text-5xl font-bold text-white">Patents</h1>
            <div className="flex flex-row px-4 py-4">
              <div className="mx-auto text-2xl px-4">
                <span className="font-semibold px-2  text-blue-100">filed</span>
                <span className="font-bold text-white text-4xl ">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={patentsFiled}
                  />
                </span>{" "}
              </div>
              <hr className="w-0.5 h-full border-2 border-white  ml-4" />
              <div className="mx-auto text-2xl px-4">
                {" "}
                <span className="font-semibold px-2 text-blue-100">registered</span>
                <span className="font-bold text-white text-4xl">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={patentsRegistered}
                  />
                </span>
              </div>
            </div>
          </div>
          <hr className="w-1 h-[6rem] border-2 border-white  ml-4" />
          <div className="flex flex-col w-[40%] items-center mx-auto">
            <h1 className="text-5xl font-bold text-white">Designs</h1>
            <div className="flex flex-row px-4 py-4">
              <div className="mx-auto text-2xl px-4 ">
                {" "}
                <span className="font-semibold  px-2 text-blue-100 ">filed</span>
                <span className="font-bold text-white  text-4xl">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={designsFiled}
                  />
                </span>
              </div>
              <hr className="w-0.5 h-full border-2 border-white  ml-4" />
              <div className="mx-auto text-2xl px-4">
                {" "}
                <span className="font-semibold  px-2  text-blue-100 ">registered</span>
                <span className="font-bold text-white text-4xl">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={designsRegistered}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[90%] border-2  rounded-lg my-6" />
        <div className="flex flex-row flex-wrap w-[80%] mx-auto ">
          <div className="flex flex-col w-[40%] items-center mx-auto">
            <h1 className="text-5xl font-bold text-white">Copyrights</h1>
            <div className="flex flex-row px-4 py-4">
              <div className="mx-auto text-2xl px-4">
                {" "}
                <span className="font-semibold px-2 text-blue-100">filed</span>
                <span className="font-bold text-white text-4xl">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={patentsFiled}
                  />
                </span>
              </div>
              <hr className="w-0.5 h-full border-2 border-white  ml-4" />
              <div className="mx-auto text-2xl px-4">
                {" "}
                <span className="font-semibold px-2 text-blue-100">registered</span>
                <span className="font-bold text-white  text-4xl">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={patentsRegistered}
                  />
                </span>
              </div>
            </div>
          </div>
          <hr className="w-1 h-[6rem] border-2 border-white  ml-4" />
          <div className="flex flex-col w-[40%] items-center mx-auto">
            <h1 className="text-5xl font-bold text-white">Trademarks</h1>
            <div className="flex flex-row px-4 py-4">
              <div className="mx-auto text-2xl px-4 ">
                {" "}
                <span className="font-semibold px-2 text-blue-100">filed</span>
                <span className="font-bold text-white  text-4xl">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={designsFiled}
                  />
                </span>
              </div>
              <hr className="w-0.5 h-full border-2 border-white  ml-4" />
              <div className="mx-auto text-2xl px-4">
                <span className="font-semibold px-2 text-blue-100">registered</span>
                <span className="font-bold text-white  text-4xl">
                  <CountUpAnimation
                    initialValue={0}
                    targetValue={designsRegistered}
                  />{" "}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[90%] border-2  rounded-lg my-6" />
        <div className="flex flex-col items-center pb-4 ">
          <h1 className="text-5xl text-white font-bold ">Projects</h1>
          <p className="font-thin text-blue-100 my-2">Cumulative projects as of {date}</p>
          <div className="grid grid-cols-7 gap-8 mt-2 ">
            <div className="col-start-2 text-center text-2xl font-semibold text-white ">
              Grants in aid
            </div>
            <div className=" text-center text-3xl font-semibold text-white">Internal</div>
            <div className=" text-center text-3xl font-semibold text-white">Sponsered</div>
            <div className=" text-center text-3xl font-semibold text-white">
              Consultancy
            </div>
            <div className=" text-center text-3xl font-semibold text-white">Others</div>
            <div className=" text-center text-3xl font-semibold text-white">Total</div>

            <div className=" text-center text-3xl font-semibold text-white">
              No. of Projects
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={456} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={56} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={123} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={98} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={74} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={678} />
            </div>

            <div className=" text-center text-3xl font-semibold text-white">
              Value in Crores
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={45.2} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={56.23} />
            </div>
            <div className=" text-center text-3xl font-bold text-white ">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={12.9} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={98.04} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={74.56} />
            </div>
            <div className=" text-center text-3xl font-bold text-white">
              {" "}
              <CountUpAnimation initialValue={0} targetValue={600} />
            </div>
          </div>
        </div>
        <hr className="w-[90%] border-2  rounded-lg my-6" />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-white font-bold my-2">Publications</h1>
          <div className="text-4xl font-bold text-white mt-2 ">
            {" "}
            <CountUpAnimation initialValue={0} targetValue={698} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
