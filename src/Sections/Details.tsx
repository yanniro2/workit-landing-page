import SmallSection from "@/Components/SmallSection";
import React from "react";
import Image from "next/image";
import bottom from "../../images/image-hero.webp";
import Screen from "./Screen";
import mobile from "../Img/Details-bg-mobile.svg";
import tab from "../Img/Details-bg-mobile.svg";
import desktop from "../Img/Details-bg-desktop.svg";
function Details() {
  return (
    <div className="section-1 relative bg-Ghost-White flex items-center justify-center">
      {/* Bottom */}
      <div className="absolute right-1/2 -top-[50%]   -translate-y-1/2 translate-x-1/2 z-[60] ">
        <Image
          src={bottom}
          alt="left img"
          width={1000}
          height={1000}
          layout="responsive"
          className="md: lg:scale-100 lg:translate-y-1/2 scale-150 -translate-y-1/6 "
        />
      </div>
      <SmallSection />
      <Screen desktop={desktop} tab={tab} mobile={mobile} />
    </div>
  );
}

export default Details;
