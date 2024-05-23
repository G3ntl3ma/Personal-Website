"use client"
import NavBar from '@/components/NavBar'
import { AuroraBackground } from '@/components/aurora-background'
import React from 'react'
type Props = {}

export default function page({}: Props) {
  return (
    
    <div className='h-full'>
      <NavBar></NavBar>
      <AuroraBackground>
      <h1 className='h-full text-8xl  text-center p-36'>{"hello :)"}</h1>
    </AuroraBackground>
    </div>
  )
}