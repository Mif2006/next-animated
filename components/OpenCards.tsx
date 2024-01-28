"use client";

import { Projects } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "640px",
    },
    collapsed: {
      width: "200px",
    },
  };

  return (
    <div className="bg-transparent w-full h-full flex flex-col gap-4 items-center">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#FFD700]">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-200">Check out our latest creations</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {Projects.map((project, index) => (
          <motion.div
            key={project.name}
            className={`cursor-pointer h-[500px] bg-cover bg-center rounded-[20px]`}
            variants={cardVariants}
            animate={index !== expandedIndex ? "collapsed" : "expanded"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${project.src})`,
            }}
          >
            <div className="h-full flex flex-col justify-end">
              <div className="rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">
                  {project.name}
                </h2>
                {index === expandedIndex && (
                  <p className="mt-2 text-gray-300 text-center">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OpenCards;
