import React from "react";
import profile from "../../images/image-founder.webp";
import Image from "next/image";
import pattern from "../../images/bg-pattern-3.svg";
function Banner() {
  return (
    <div
      className="bg-White w-screen h-screen relative flex justify-center items-center"
      // className="bg-White w-screen h-min text-center relative flex justify-center items-center"
    >
      <div className="w-full h-full absolute z-5 top-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="730"
          viewBox="0 0 1440 730"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H1440V662C1440 662 1082.96 730 722 730C361.039 730 0 662 0 662V0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="flex w-full p-[1rem] z-30 items-center justify-end flex-col h-full md:justify-center">
        <Image
          src={profile}
          alt="img profile"
          width={300}
          height={300}
          // className=" absolute z-[34] -top-[2rem]  left-[20%] "
          className="-mb-[4rem] md:absolute md:top-0 md:left-0 md:translate-x-[20%] md:translate-y-1/2 lg:translate-x-[0%] lg:left-1/4 "
        />

        {/* text banner */}
        <div
          // className=" bg-Dark-Purple p-[3rem] text-white flex flex-col items-start gap-[2rem] z-[40] w-1/2 h-1/3 relative -pr-[4rem] top-[4rem] text-left"
          className="bg-Dark-Purple flex flex-col text-White p-[2rem] w-full gap-[2rem] items-center justify-center  md:w-3/4 md:text-left md:items-start relative md:left-[10%] text-center   lg:w-1/2 lg:left-[15%]"
        >
          <h1 className=" font-Fraunces font-[600] text-[32px]">
            Be the first to test
          </h1>
          <p className="font-[400]">
            Hi, It &rsquo;s m Louis Graham, the founder of the company. Book a
            demo call with me to become a beta tester for our app and kickstart
            your company. Apply for access below and I’ll be in touch to
            schedule a call.
          </p>
          <button className="btn  w-max">Apply for access</button>

          <Image
            src={pattern}
            alt="img"
            width={250}
            height={250}
            className="absolute right-[3rem] bottom-0 translate-y-1/2 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
