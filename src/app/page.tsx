import React from 'react'
import NavBar from "@/components/NavBar";
import StarterImg from "@/components/StartingImage";


type Props = {}

export default function MainPage({}: Props) {
      return (
    <div>
      <NavBar/>
       <StarterImg src="https://i.imgur.com/3V6Ij5w.jpg" alt = "Landing Page Image">
       </StarterImg >
      <h1 className='text-8xl text-center font-bold'>I am Luca Eisen</h1>
      <p className="text-5xl text-center m-[10rem] mt-[20rem] text-balance">I am a Computer Science Student at the University Paderborn. I am 20 Years old, I am fluent in German and English and living in Germany. The Purpose of this Website is to show the World Everything i have accomplished.</p>
      <p className="text-5xl text-center m-[10rem] mt-[20rem] text-balance">First of all, i have created this Website. I Developed the Site with React inside of NextJS.</p>
      <p className="text-5xl text-center m-[10rem] mt-[20rem] text-balance">Secondly, i made a Discord Bot. With the Bot, one can subscribe to League of Legends Teams to get Informed about their upcoming Games. You can find out more by Clicking on the Button at the Top.</p>
      </div>
  );
}