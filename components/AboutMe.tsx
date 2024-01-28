"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimatedNumbers from "./AnimatedNumbers";

const AboutMe = () => {
  const [isClicked, setIsClicked] = useState(false);

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const slideTextControls = useAnimation();

  const handleClick = () => {
    setIsClicked(true);
    imageControls.start({ scale: 1.4, x: "30%" });
    textControls.start({ x: "-190%" });
    slideTextControls.start({ scale: 1.2, x: "-60%" });
  };

  const handleBackClick = () => {
    const timeout = setTimeout(() => {
      setIsClicked(false);
    }, 1350);

    imageControls.start({ scale: 1, x: "0%" });
    textControls.start({ x: "0%" });
    slideTextControls.start({ scale: 1, x: "190%" });
  };
  return (
    <>
      <motion.div
        className="flex flex-col gap-6 pt-10 absolute left-72 max-w-[400px]"
        animate={textControls}
        transition={{ duration: 2 }}
      >
        <h1 className="text-6xl text-[#FFD700]">About me</h1>
        <p className="text-gray-200 text-[18px] max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
        <button
          className="bg-[#FFD700] p-4 rounded-xl text-white"
          onClick={handleClick}
        >
          Learn more
        </button>
      </motion.div>
      <motion.img
        src="/coder.png"
        alt="coder"
        width={476}
        height={476}
        animate={imageControls}
        transition={{ duration: 2 }}
        className="absolute right-72"
      />
      <motion.div
        className="relative bg-gray-800 w-[600px] p-10 rounded-lg shadow-md absolute"
        animate={slideTextControls}
        transition={{ duration: 2 }}
        initial={{ x: "100vw" }}
      >
        <button
          onClick={handleBackClick}
          className="absolute right-6 text-white p-4"
          style={{ top: "40%" }}
        >
          &lt;- Back to info
        </button>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={10000} />}

            <p className="text-gray-300 text-lg font-semibold">
              Lines of code written
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={1000} />}

            <p className="text-gray-300 text-lg font-semibold">Hours of work</p>
          </div>
          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={250} />}

            <p className="text-gray-300 text-lg font-semibold">
              Client satisfied
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {isClicked && <AnimatedNumbers target={25} />}

            <p className="text-gray-300 text-lg font-semibold">New employees</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
