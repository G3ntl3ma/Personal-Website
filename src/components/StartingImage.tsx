import React from 'react'
import Image from "next/image"
import { useScreenSize } from '@/utils/screenSize';
import {getMeta} from '@/utils/getImg'

type Props = {
    src : string,
    alt :string
}

export default function StarterImg(props: Props) {
    //const img: HTMLImageElement = await getMeta(props.src)
    //const screenSize = useScreenSize();
  return (
    <div className='w-full h-1/2 absolute bg-gradient-to-t from-custom'>
      <Image className='object-cover object-top'
        src = {props.src}
        width={0}
        height={0}
        alt = {props.alt}
        sizes='100vw'
        fill = {true}
        ></Image>
      <div className='w-full h-full bg-gradient-to-t from-custom to-transparent bg-blend-normal '></div>
    </div>
  )
}