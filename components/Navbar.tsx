"use client"

import { Socials } from "@/constants";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navbar = () => {
  const [isRouting, setIsRouting] = useState(false)
  const [prevPath, setPrevPath] = useState('/')

  const path = usePathname()

  useEffect(() => {
    if(prevPath != path) {
      setIsRouting(true)
    }
  }, [path, prevPath])

  useEffect(() => {
    if(isRouting) {
      setPrevPath(path)

      const timeout = setTimeout(() => {
        setIsRouting(false)
      }, 1200)

      return () => clearTimeout(timeout)
    }
  }, [isRouting])
  return (
    <div className="w-full h-[100px] md:h-[65px] fixed top-0 shadow-lg bg-transparent z-[50] px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-center md:justify-between m-auto">
        <Link
          href="/"
          className="text-2xl font-bold ml-10 hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-black"
        >
          Webchain Dev
        </Link>

        <AnimatePresence mode="wait">
          {isRouting && <Transition key="uniqueKey" />}
          <div className="w-full md:w-[500px] h-full flex flex-col md:flex-row items-center justify-between md:mr-14 mt-2">
            <div className="flex items-center justify-between w-full h-auto text-lg mr-4 md:mr-15 px-5 md:px-20 rounded-full text-[#FFD700]">
              <Link href="/about-me" className="cursor-pointer">
                About me
              </Link>

              <Image
                src="/logo.png"
                alt="logo"
                width={76}
                height={76}
                className="cursor-pointer"
              />

              <Link href="/my-projects" className="cursor-pointer">
                My Projects
              </Link>
            </div>
          </div>
        </AnimatePresence>

        <div className="hidden md:flex flex-row gap-5 mr-10">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
