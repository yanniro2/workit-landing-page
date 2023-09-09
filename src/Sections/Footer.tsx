import Image from "next/image";
import React from "react";
import logo from "../../images/logo-dark.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
function Footer() {
  return (
    <div className="w-4/5 flex flex-col items-center justify-center p-[2rem]">
      <a href="/">
        <Image src={logo} alt="logo img" />
      </a>

      <div className="flex items-center justify-center gap-5 p-[2rem]">
        <a href="#facebook">
          <Image src={facebook} alt="face icon" />
        </a>

        <a href="#facebook">
          <Image src={instagram} alt="face icon" />
        </a>

        <a href="#facebook">
          <Image src={twitter} alt="face icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
