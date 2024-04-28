"use client"
import React from 'react'
import StarterImg from '@/components/StartingImage'
import NavBar from '@/components/NavBar'
import { useTheme } from 'next-themes'
type Props = {}

export default function page({}: Props) {
  const {theme, setTheme} = useTheme()
  return (
    <div>
      <NavBar></NavBar>
      <StarterImg src = "https://i.imgur.com/deu1U5t.jpg" alt = "Logo of the Discord Bot" style = {theme}/>
      <h1 className='text-8xl text-center font-bold'>Track your favorite LoL Teams</h1>
    </div>
  )
}