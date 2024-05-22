import React from "react";
import { MdLightbulb } from "react-icons/md";
import Link from "next/link";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import { redirect } from "next/navigation";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div
      className={`sticky top-0 h-30 w-full border-b-white border-b-2 justify-evenly flex flex-row shadow-lg z-20 bg-dark-background`}
    >
      <button className="border-none flex-2 light:border-b-black">
        <Link href="/hello" className="flex-1">
          <MdLightbulb className="color-white size-8 ml-2" />
        </Link>
      </button>
      <Button color="secondary" className="flex-1" sx={{color: "white"}}>
        <Link href="/" className="flex-1">
          About me
        </Link>
      </Button>
      <Button color="secondary" className="flex-1" sx={{color: "white"}}>
        <Link href="/discord_bot" className="flex-1">
          <p className="m-3">LoLBot</p>
        </Link>
      </Button>
    </div>
  );
}
