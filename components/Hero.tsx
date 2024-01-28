import React from "react";
import HeroContent from "./HeroContent";
import Skills from "./Skills";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-full w-full"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full bottom-[365px] left-0 z-[10] object-cover "
      >
        <source src="/gold.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full -bottom-[365px] left-0 z-[1] object-cover rotate-180 "
      >
        <source src="/gold.mp4" type="video/mp4" />
      </video>
      <HeroContent />
      <Skills />
    </div>
  );
};

export default Hero;
