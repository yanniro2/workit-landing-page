import Banner from "@/Sections/Banner";
import Details from "@/Sections/Details";
import Footer from "@/Sections/Footer";
import Hero from "@/Sections/Hero";
import Screen from "@/Sections/Screen";
import React from "react";

function page() {
  return (
    <div className="w-full h-full  flex flex-col items-center">
      <Hero />
      <Details />
      <Banner />
      <Footer />
    </div>
  );
}

export default page;
