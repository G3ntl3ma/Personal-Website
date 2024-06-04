import NavBar from '@/components/NavBar'
import React from 'react'
import {motion} from 'framer-motion'
import Footer from '@/components/Footer'
type Props = {}

export default function page({}: Props) {
  return (
    
    <div className='h-full'>
      <NavBar></NavBar>
      <h1 className='h-full text-8xl  text-center p-36'>{"hello :)"}</h1>
      <Footer/>
    </div>
  )
}
