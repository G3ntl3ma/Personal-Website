import React from 'react'
import StarterImg from '@/components/StartingImage'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import TextBlock from '@/components/TextBlock'
import { AuroraBackground } from '@/components/aurora-background'
type Props = {}

export default function BotPage({}: Props) {
  return (
    <div className='content-center'>
      <NavBar></NavBar>
      <StarterImg src = "https://i.imgur.com/deu1U5t.jpg" alt = "Logo of the Discord Bot"/>
      <h1 className='text-8xl text-center font-bold mb-5'>Track your favorite LoL Teams</h1>
      <div className='justify-center h-auto w-2/3 m-auto mt-[15rem]'>
      <TextBlock text={"Subscribe to your favorite Teams"}></TextBlock>
      <img className= "ml-auto mr-auto" src='/discord_subs.png' alt='Overview of Subscriptions with LoLBot' width= "800px"></img>
      <TextBlock text={"Get updated on upcoming Games"}/>
      <img className= "ml-auto mr-auto" src='/discord_upcoming.png' alt='Message from an upcoming Game' width= "600px"></img>
      <TextBlock text={"Get informed when Games are over"}></TextBlock>
      <img className= "ml-auto mr-auto" src='/discord_finished.png' alt='Message from a finished Game' width="600px"></img>
      </div>

    </div>
  )
}