import NavBar from '@/components/NavBar'
import React from 'react'
import {motion} from 'framer-motion'
import Footer from '@/components/Footer'
type Props = {}

export default function page({}: Props) {
  return (
    
    <div className='h-screen flex flex-col'>
      <NavBar></NavBar>
      <h1 className='h-full text-8xl  text-center p-36 mb-auto'>{"hello :)"}</h1>
      <Footer/>
    </div>
  )
}
