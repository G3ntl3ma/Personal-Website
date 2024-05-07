import React from 'react'
import StarterImg from '@/components/StartingImage'
import NavBar from '@/components/NavBar'
type Props = {}

export default function BotPage({}: Props) {
  return (
    <div>
      <NavBar></NavBar>
      <StarterImg src = "https://i.imgur.com/deu1U5t.jpg" alt = "Logo of the Discord Bot"/>
      <h1 className='text-8xl text-center font-bold'>Track your favorite LoL Teams</h1>
    </div>
  )
}