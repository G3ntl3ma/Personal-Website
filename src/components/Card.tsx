import React from 'react'

export enum ColorNames {
    "blue" = "bg-gradient-to-b from-transparent to-black",
    "red" = "bg-gradient-to-b from-transparent to-black",
    "yellow" = "bg-gradient-to-b from-transparent to-black",
    "green" = "bg-gradient-to-b from-transparent to-black",
    "cyan" = "bg-gradient-to-b from-transparent to-black",
    "indigo" = "bg-gradient-to-b from-transparent to-black",
}


//Use a Class to simulate Typescript Enums with Object Literals
export class Side {
  static readonly LEFT = new Side("h-fit rounded-r-lg w-1/3", "flex justify-start w-full  ");
  static readonly RIGHT  = new Side( "h-fit rounded-l-lg w-1/3", "flex justify-end w-full");

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