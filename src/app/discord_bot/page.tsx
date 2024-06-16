"use client"
import React from 'react'
import StarterImg from '@/components/StartingImage'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import TextBlock from '@/components/TextBlock'
import { TracingBeam } from '@/components/tracing-beam'
import Footer from "@/components/Footer";
import {motion} from "framer-motion"
type Props = {}

export default function BotPage({}: Props) {
  return (
    <div className='content-center'>
      <NavBar></NavBar>
      <StarterImg src = "https://i.imgur.com/deu1U5t.jpg" alt = "Logo of the Discord Bot"/>
      <motion.div 
        initial= {{opacity: 0, y: 40}} whileInView={{opacity:1, y:0}} transition= {{delay: 0.3, duration: 0.6, ease: "easeInOut"}}
      >
      <h1 className='text-8xl text-center font-bold mb-5'>Track your favorite LoL Teams</h1>
      </motion.div>
      <div className='justify-center h-auto w-2/3 m-auto mt-[15rem]'>
      <p className="mb-5 text-3xl text-center text-balance" >Subscribe to your favorite Teams</p>
      <img className= "ml-auto mr-auto" src='/discord_subs.png' alt='Overview of Subscriptions with LoLBot' width= "800px"></img>
      <p className="mb-5 text-3xl text-center text-balance mt-20" >Get updated on upcoming Games</p>
      <img className= "ml-auto mr-auto" src='/discord_upcoming.png' alt='Message from an upcoming Game' width= "600px"></img>
      <p className="mb-5 text-3xl text-center text-balance mt-20" >Get informed when Games are over</p>
      <img className= "ml-auto mr-auto" src='/discord_finished.png' alt='Message from a finished Game' width="600px"></img>
      <p className="mb-5 text-3xl text-center text-balance mt-20" >Set your own Timezone</p>
      <img className= "ml-auto mr-auto" src='/discord_time.png' alt='Message that shows the zone command with timezones' width="600px"></img>
      <motion.div whileHover={{color: "#0096FF"}} className="content-center w-fit m-auto mt-20 mb-20">
        <a className="mb-5 text-3xl text-center text-balance mt-20 underline m-auto" href="https://discord.com/api/oauth2/authorize?client_id=1087444834492633108&permissions=2048&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D1087444834492633108%26scope%3Dbot&scope=bot+applications.commands">Get LoLBot Now</a>
      </motion.div>
      </div>
      <Footer/>
    </div>
  )
}
