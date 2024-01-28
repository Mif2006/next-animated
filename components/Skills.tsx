import { Skill_data } from "@/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="absolute -bottom-[125px] z-[20] w-[90%] h-[250px] mb-10 md:mb-0">
      <div className="flex flex-col gap-5 items-center justify-center p-4 pt-5">
        <h1 className="text-4xl text-[#FFD700]">My Skills</h1>
        <div className="grid md:flex grid-cols-2 md:flex-row gap-4 md:gap-12">
          {Skill_data.map((skill) => (
            <Image
              src={skill.Image}
              alt={skill.skill_name}
              key={skill.skill_name}
              width={80}
              height={80}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
