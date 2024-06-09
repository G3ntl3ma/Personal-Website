"use client"

import React from "react";
import { MdLightbulb } from "react-icons/md";
import Link from "next/link";
import {motion} from "framer-motion"

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div
      className={`sticky top-0 h-30 w-full border-b-white border-b-2 justify-evenly flex flex-row shadow-lg z-20 bg-dark-background`}
    >
      <motion.button className="border-none flex-2 light:border-b-black" whileHover={{backgroundColor: '#242424'}}>
        <Link href="/hello" className="flex-1 h-full w-full">
        <div className="place-content-center h-full w-full align-middle">
          <MdLightbulb className="color-white size-8 ml-2" />
          </div>
        </Link>
      </motion.button>

      <motion.button className="flex-1" whileHover={{backgroundColor: '#242424'}}>
        <Link href="/" className="flex-1 h-full w-full">         
        <div className="place-content-center h-full w-full align-middle">
          <p>About me</p>
         </div>
        </Link>
      </motion.button>
      <motion.button  className="flex-1" whileHover={{backgroundColor: '#242424'}}>
        <Link href="/discord_bot">
        <div className="place-content-center h-full w-full align-middle">
          <p>LoLBot</p>
         </div>
         </Link>
      </motion.button>
    </div>
  );
}
