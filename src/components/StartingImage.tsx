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
  let colors = {
    light : "from-white from-15%",
    dark: "from-dark-background from-20%",
  }
  return (
    <div className={`relative w-full h-[32rem]  `}>
      <Image className='object-cover object-top absolute'
        src = {props.src}
        width={0}
        height={0}
        alt = {props.alt}
        sizes='100vw'
        fill = {true}
        ></Image>
      <div className={`absolute w-full h-full bg-gradient-to-t ${
        //@ts-ignore
        theme === undefined ? colors[style]: colors[theme]}  to-transparent  to-100% bg-blend-normal`}></div>
    </div>
  )
}