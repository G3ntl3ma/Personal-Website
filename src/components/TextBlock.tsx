import React from 'react'

type Props = {
    text : String
}

export default function TextBlock(props: Props) {
  return (
      <p className="text-5xl text-center m-[10rem] mt-[20rem] text-balance">{props.text}</p>
  )
}