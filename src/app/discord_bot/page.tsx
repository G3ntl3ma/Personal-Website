"use client"
import React from 'react'
import StarterImg from '@/components/StartingImage'
import NavBar from '@/components/NavBar'
type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <NavBar></NavBar>
      <StarterImg src = "https://i.imgur.com/deu1U5t.jpg" alt = "Logo of the Discord Bot"/>
    </div>
  )
}