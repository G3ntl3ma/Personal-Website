import React from 'react'
import { MdLightbulb } from "react-icons/md";
import Link from "next/link";

type Props = {}

export default function NavBar({}: Props) {

  return (
    <div  className={`sticky top-0 h-30 w-full border-b-white border-b-2 justify-evenly flex flex-row shadow-lg z-20 bg-dark-background`}>
          <button className='border-none flex-2 light:border-b-black'>
        <Link href="/hello" className='flex-1'>
            <MdLightbulb className='color-white size-8 ml-2'/>
        </Link>
          </button>
        <button className='flex-1'>
        <Link href= "/" className='flex-1'>
            <p className='m-3'>
              About me
            </p>
        </Link >
          </button>
          <button className='flex-1'>
            <Link href="/discord_bot" className='flex-1'>
              <p className='m-3'>
                Discord Bot
              </p>
              </Link>
        </button>
    </div>
  )
}