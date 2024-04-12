import React from 'react'
import { MdLightbulb } from "react-icons/md";
import {twMerge} from "tailwind-merge"
type Props = {}

export default function NavBar({}: Props) {
  return (
    <div className='sticky top-0 h-30 w-full border-b-white border-b-2 justify-evenly flex flex-row shadow-lg'>
        <button className='border-none flex-1'>
          <MdLightbulb className='color-white size-8 ml-2'/>
        </button>
        <button className='flex-1'>
            <p className='m-3'>
            About me
            </p>
        </button>
        <button className='flex-1'>
            <p className='m-3'>
            Discord Bot
            </p>
        </button>
        <button className='flex-1'>
            <p>
            Animals
            </p>
        </button>
        <div className={twMerge('relative grid place-items-center h-fit w-fit')}></div>
        <input type='toggle' id='toggle' className='hidden'/>
        <label htmlFor="toggle" className= "flex relative border-[5px] border-blue-500 h-[100px] w-[200px] rounded-[100px] bg-sky-300 transition ease-in delay-[350] before:animate-toggle-sun">
          <span className=''></span>
        </label>
        <div className=''></div>
        <div></div>
    </div>
  )
}