import React from 'react'

export enum ColorNames {
    "blue" = "bg-gradient-to-b from-white to-blue-200",
    "red" = "bg-gradient-to-b from-white to-red-200",
    "yellow" = "bg-gradient-to-b from-white to-yellow-300",
    "green" = "bg-gradient-to-b from-white to-green-100",
    "cyan" = "bg-gradient-to-b from-white to-cyan-300",
    "indigo" = "bg-gradient-to-b from-white to-indigo-300",
}


//Use a Class to simulate Typescript Enums with Object Literals
export class Side {
  static readonly LEFT = new Side("h-fit rounded-r-lg w-1/3", "flex justify-start w-full text-black ");
  static readonly RIGHT  = new Side( "h-fit rounded-l-lg w-1/3", "flex justify-end w-full text-black");

  // private to disallow creating other instances of this type
  private constructor(public readonly inner: string, public readonly outer: any) {
  }

  toString() {
    return this.outer;
  }
}

type Props = {
    stickSide : Side
    Content : string
    Color : ColorNames
}

export default function Card(props: Props) {
  return (
    <div className={props.stickSide.outer}>
        <div className={`${Object.values(ColorNames).find(item => item === props.Color)} ${props.stickSide.inner}`}>{props.Content}</div>
    </div>
  )
}