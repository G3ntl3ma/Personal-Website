import NavBar from '@/components/NavBar'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='h-full'>
      <NavBar></NavBar>
      <h1 className='h-full text-8xl  text-center p-36'>{"hello :)"}</h1>
    </div>
  )
}