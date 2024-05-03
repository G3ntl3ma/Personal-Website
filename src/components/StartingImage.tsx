import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { useTheme } from 'next-themes'

type Props = {
    src : string,
    alt :string,
    style: string
}

export default function StarterImg(props: Props) {
  const {theme, setTheme} = useTheme();
  let colors :any= {
    "light" : "from-white from-15%",
    "dark" : "from-dark-background from-20%",
  }
  let color :string = "dark"

  if(theme !== undefined)color = theme

  return (
    <div className={`relative w-full h-[32rem] z-10 overflow-hidden`}>
      <Image className='object-cover object-top absolute'
        src = {props.src}
        width={0}
        height={0}
        alt = {props.alt}
        sizes='100vw'
        fill = {true}
        ></Image>
      <div className={`absolute w-full h-full bg-gradient-to-t ${
        colors[color]}  to-transparent  to-100% bg-blend-normal`}></div>
    </div>
  )
}