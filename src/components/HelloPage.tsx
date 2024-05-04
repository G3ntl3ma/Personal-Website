import NavBar from '@/components/NavBar'
import React from 'react'
import { useTheme } from 'next-themes'
type Props = {}

export default function HelloPage({}: Props) {
  const {theme, setTheme, systemTheme} = useTheme()
  let style:string = ""
  if(theme !== undefined) style = theme
  return (
    <div className='h-full'>
      <NavBar style={style}></NavBar>
      <h1 className='h-full text-8xl  text-center p-36'>{"hello :)"}</h1>
    </div>
  )
}