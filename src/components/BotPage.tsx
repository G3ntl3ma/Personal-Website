"use client"
import React from 'react'
import StarterImg from '@/components/StartingImage'
import NavBar from '@/components/NavBar'
import { useTheme } from 'next-themes'
type Props = {}

export default function BotPage({}: Props) {
  const {theme, setTheme} = useTheme()
  let style = ""
  if(theme !== undefined) style = theme
  return (
    <div>
      <NavBar style = {style}></NavBar>
      <StarterImg src = "https://i.imgur.com/deu1U5t.jpg" alt = "Logo of the Discord Bot" style = {style}/>
      <h1 className='text-8xl text-center font-bold'>Track your favorite LoL Teams</h1>
    </div>
  )
}