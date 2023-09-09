import Image from "next/image";
import React from "react";
import logo from "../../images/logo-light.svg";

function Navbar() {
  return (
    <nav className="w-full h-[5rem] flex justify-center pt-[3rem] p-5 items-center z-20">
      <div className="lg:w-4/5 h-full flex  justify-between items-center w-full md:w-[90%]">
        <a href="/">
          <Image src={logo} alt="logo" />
        </a>
        <button className="btn-2">Apply for access</button>
      </div>
    </nav>
  );
}

export default Navbar;
