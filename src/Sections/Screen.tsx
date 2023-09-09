import React from "react";
import Image from "next/image";
function Screen({
  mobile,
  desktop,
  tab,
}: {
  mobile: any;
  desktop: any;
  tab: any;
}) {
  return (
    <div className="w-screen h-screen  flex items-center justify-center overflow-hidden relative">
      <div className="w-screen h-screen absolute z-50 top-0 left-0 right-0">
        {/* Desktop */}
        <Image
          alt="img"
          src={desktop}
          className="lg:block hidden md:hidden sm:hidden w-full h-auto object-center"
        />
        {/* Tablet */}
        <Image
          alt="img"
          src={tab}
          className="lg:hidden hidden md:block sm:hidden w-full h-auto object-center"
        />
        {/* Mobile */}
        <Image
          alt="img"
          src={mobile}
          className="lg:hidden block md:hidden sm:hidden w-full h-auto object-center"
        />
      </div>
    </div>
  );
}

export default Screen;
