import React from 'react'
import Image from "next/image"

type Props = {
    src : string,
    alt :string
}

export default function StarterImg(props: Props) {
  return (
    <div className='relative w-full h-[32rem] bg-gradient-to-t from-custom min-h-1/2'>
      <Image className='object-cover object-top absolute'
        src = {props.src}
        width={0}
        height={0}
        alt = {props.alt}
        sizes='100vw'
        fill = {true}
        ></Image>
      <div className='absolute w-full h-full bg-gradient-to-t from-custom from-30% to-transparent  to-100% bg-blend-normal '></div>
    </div>
  )
}