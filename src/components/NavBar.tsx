"use client"
import React, {useState} from 'react'
import { MdLightbulb } from "react-icons/md";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { useTheme } from 'next-themes';
type Props = {}

export default function NavBar({}: Props) {
  const userPreference = window.localStorage.getItem("theme");
  const [mode, setMode] = useState(userPreference);
  const {setTheme, resolvedTheme} = useTheme()

  return (
    <div className=' light-theme sticky top-0 h-30 w-full border-b-white border-b-2 justify-evenly flex flex-row shadow-lg'>
        <button className='border-none flex-1 light:border-b-black'>
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
       <DarkModeToggle
          mode={mode}
          dark="Dark"
          light="Light"
          size="md"
          inactiveTrackColor="#e2e8f0"
          inactiveTrackColorOnHover="#f8fafc"
          inactiveTrackColorOnActive="#cbd5e1"
          activeTrackColor="#334155"
          activeTrackColorOnHover="#1e293b"
          activeTrackColorOnActive="#0f172a"
          inactiveThumbColor="#1e293b"
          activeThumbColor="#e2e8f0"
          onChange={(mode) => {
           setMode(mode);
           setTheme(mode);
          }}
    />    
    </div>
  )
}