import React from "react";
import Hero from "../components/Hero";
import ScrollDown from "../components/ScrollDown";
import About from "../components/About";
import Marquee from "../components/Marquee";

export default function Home() {
  return (
    <div className="py-32 flex flex-col gap-28 px-6 md:px-32 ">
      <Hero />
      <ScrollDown />
      <About />
      <Marquee />
    </div>
  );
}
