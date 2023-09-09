import React from "react";
import data from "../Data/data";
function SmallSection() {
  return (
    <div className="w-full flex  absolute  flex-col items-start justify-start lg:gap-[3rem] md:gap-[3rem] px-5 gap-[1rem] md:left-0 md:px-10  md:items-center lg:flex-row lg:justify-center lg:items-center z-[60] md:-pt-[10rem] -top-[25%] md:top-0  lg:top-0 sm:-top-[50%] h-screen">
      {data.map((item) => (
        <div
          key={item.id}
          className=" font-Fraunces flex flex-col items-center text-center lg:gap-[3rem] md:gap-[3rem] gap-[1rem] w-full h-[50vh] md:flex-row md:w-4/5 md:h-min lg:w-1/3 lg:flex-col"
        >
          <div className="w-[3rem] h-[3rem] border-[1px] border-Dark-Purple rounded-full flex items-center justify-center text-[24px]">
            {item.id}
          </div>
          <div className="flex flex-col gap-[1rem] md:items-start md:text-left md:w-3/4 lg:w-full lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-[32px] font-semibold">{item.title}</h2>
            <p className="text-[18px] font-manrope font-[400] md:leading-[32px] lg:leading-[32px]  leading-normal">
              {item.dec}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallSection;
