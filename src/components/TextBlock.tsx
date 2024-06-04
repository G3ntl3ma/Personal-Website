import React from 'react'

type Props = {
    text : String
}

export default function TextBlock(props: Props) {
  return (
      <p className="text-3xl text-center mt-[10rem] text-balance">{props.text}</p>
  ) }
