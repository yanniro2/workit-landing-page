import Navbar from "@/Components/Navbar";
import React from "react";
import left from "../../images/bg-pattern-1.svg";
import right from "../../images/bg-pattern-2.svg";
import bottom from "../../images/image-hero.webp";
import Image from "next/image";
import Screen from "./Screen";
import mobile from "../Img/hero-bg-mobile.svg";
import tab from "../Img/hero-bg-tab.svg";
import desktop from "../Img/hero-bg-desktop.svg";
function Hero() {
  return (
    <div className=" bg-Ghost-White section relative overflow-hidden flex">
      <div className="w-screen h-screen absolute z-5 top-0 left-0 right-0 lg:w-4/5 z-[60]">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="730"
            viewBox="0 0 1440 730"
            fill="none"
            className="img-bg-desktop "
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H1440V662C1440 662 1082.96 730 722 730C361.039 730 0 662 0 662V0Z"
              fill="#24053E"
            />
          </svg>

          {/* Mobile */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="375"
            height="482"
            viewBox="0 0 375 482"
            fill="none"
            className="img-bg-mobile"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H375.303V464C375.303 464 282.249 481.707 188.173 481.707C94.0966 481.707 0 464 0 464V0Z"
              fill="#24053E"
            />
          </svg>

          {/* Tablet */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="768"
            height="541"
            viewBox="0 0 768 541"
            fill="none"
            className="img-bg-tab"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H768V504C768 504 577.579 540.236 385.067 540.236C192.554 540.236 0 504 0 504V0Z"
              fill="#24053E"
            />
          </svg>

          {/* <div className="absolute right-1/2 bottom-0 z-30 translate-x-1/2 translate-y-1/2 lg:translate-x-3/4 ">
            <Image
              src={bottom}
              alt="left img"
              width={1000}
              height={1000}
              layout="responsive"
              sizes="(max-width: 1200px) 100vw, 100vw"
            />
          </div> */}
        </div>
      </div>

      <div className="w-full absolute z-[60]">
        <Navbar />
      </div>

      {/* left */}
      <div className="absolute left-0 top-1/2  -translate-x-1/2 -translate-y-1/2 hidden lg:block md:block sm:block md:-translate-x-3/4 z-[60]">
        <Image src={left} alt="left img" width={500} height={500} />
      </div>

      {/* Right */}
      <div className="absolute right-0 top-1/2  translate-x-1/2 -translate-y-1/2 hidden lg:block md:block sm:block md:translate-x-3/4">
        <Image src={right} alt="left img" width={250} height={250} />
      </div>

      {/* center */}
      <div className="absolute right-1/2 top-1/4 translate-x-1/2   flex flex-col items-center justify-center gap-[1rem] text-center text-[50px] w-full lg:w-1/2 lg:text-[80px] md:w-1/2 z-[60]">
        <h1 className=" font-Fraunces lg:font-semibold lg:text-5xl leading-5xl text-white lg:w-2/3 w-full ">
          Data <span className="border-b-2 border-Eucaplyptus">tailored </span>
          to your needs.
        </h1>
        <button className="btn">learn more</button>
      </div>

      <Screen mobile={mobile} tab={tab} desktop={desktop} />
    </div>
  );
}

export default Hero;
