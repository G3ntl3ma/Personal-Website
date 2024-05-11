import React from 'react'
import StarterImg from '@/components/StartingImage'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import TextBlock from '@/components/TextBlock'
type Props = {}

export default function BotPage({}: Props) {
  return (
    <div className='content-center'>
      <NavBar></NavBar>
      <StarterImg src = "https://i.imgur.com/deu1U5t.jpg" alt = "Logo of the Discord Bot"/>
      <h1 className='text-8xl text-center font-bold mb-5'>Track your favorite LoL Teams</h1>
      <div className='justify-center h-auto w-2/3 m-auto mt-[15rem]'>
      <TextBlock text={"Subscribe to your favorite Teams"}></TextBlock>
      <Image className='object-fill'
        src = {"https://i.imgur.com/P1R2ivE.png"}
        width={800}
        height={100}
        alt = {"Overview of Subscriptions with LoLBot"}
        sizes='100vw'
        ></Image>
        </div>
      <TextBlock text={"Get updated on all upcoming and finished Games"}/> 

    </div>
  )
}