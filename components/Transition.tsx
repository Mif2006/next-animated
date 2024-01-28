"use client";

import React from "react";
import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 5,
  },
  exit: {
    scale: 0,
  },
};

const Transition = () => {
  return (
    <motion.div
      className="top-0 bottom-0 right-full w-[520px] h-[520px] z-[30] bg-[#CCAC00] rounded-full"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
    />
  );
};

export default Transition;
