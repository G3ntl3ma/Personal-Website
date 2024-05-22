import React from 'react'
import NavBar from "@/components/NavBar";
import StarterImg from "@/components/StartingImage";
import TextBlock from '@/components/TextBlock';
import { TracingBeam } from '@/components/tracing-beam';


type Props = {}

export default function MainPage({}: Props) {
  console.log(__dirname)
      return (
    
    <div>
      <NavBar/>
       <StarterImg src="/kindred_prestige.jpg" alt = "Landing Page Image">
       </StarterImg >
       <TracingBeam>
      <h1 className='text-8xl text-center font-bold'>I am Luca Eisen</h1>
      <TextBlock text={"I am a Computer Science Student at the University Paderborn. I am 20 Years old, I am fluent in German and English and living in Germany. The Purpose of this Website is to show the World Everything i have accomplished"}/>
      <TextBlock  text = {"First of all, i have created this Website. I Developed the Site with React inside of NextJS."}/>
      <TextBlock text={"Secondly, i made a Discord Bot. With the Bot, one can subscribe to League of Legends Teams to get Informed about their upcoming Games. You can find out more by Clicking on the Button at the Top."}/>
      </TracingBeam>
      </div>
      
  );
}