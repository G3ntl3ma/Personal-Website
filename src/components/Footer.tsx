import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="w-100% h-fit flex-row flex bg-slate-700">
      <div className="flex-row underline flex-1">
        <FaGithub className="m-auto"/> 
        <div className="m-auto w-fit"><a className="m-auto" href="https://github.com/G3ntl3ma">Github</a></div>
      </div>
      <div className="flex-row underline flex-1">
        <IoMdMail className="m-auto"/> 
        <div className="m-auto w-fit"><a className="m-auto" href="mailto: luca_eisen@web.de">E-Mail</a></div>
        </div>
    </div>
  )
}
