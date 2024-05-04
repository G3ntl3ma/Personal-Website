import React, {useState} from 'react'
import { MdLightbulb } from "react-icons/md";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { Mode } from '@anatoliygatt/dark-mode-toggle';
import { useTheme } from 'next-themes';
import Link from "next/link";

type Props = {style: string}

export default function NavBar(props: Props) {
  let styles :any = {
    dark: "bg-dark-background",
    light: "bg-white"
  } 
  const [mode, setMode] = useState();
  const {setTheme, theme} = useTheme()
  let style : string = props.style
  if(theme !== undefined) style = theme
  
  let startMode : Mode = style as Mode

  return (
    <div className={`sticky top-0 h-30 w-full border-b-white border-b-2 justify-evenly flex flex-row shadow-lg z-20 ${styles[props.style]}`}>
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
       <DarkModeToggle
          mode={startMode}
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
            //@ts-ignore
           setMode(mode);
           setTheme(mode);
          }}
    />    
    </div>
  )
}