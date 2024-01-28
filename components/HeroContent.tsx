"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideFromBottom, slideFromTop } from "@/motion/motion";

const HeroContent = () => {
  return (
    <AnimatePresence>
      <div className="z-[20] flex flex-col items-center justify-center h-full w-full text-white">
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideFromTop}
          className="text-[60px] md:text-[86px] z-[30] font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 yellow-shadow"
        >
          Metamorphosis
        </motion.h1>
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideFromBottom}
          className="absolute bottom-[300px] md:bottom-[265px] text-[60px] md:text-[86px] z-[30] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 yellow-shadow"
        >
          Metamorphosis
        </motion.h1>
      </div>
    </AnimatePresence>
  );
};

export default HeroContent;
