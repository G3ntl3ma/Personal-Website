import React from 'react'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <div className='sticky top-0 h-30 w-full border-b-white border-b-2 justify-evenly flex flex-row shadow-lg'>
        <button>
            <p className='m-3'>
            About me
            </p>
        </button>
        <button>
            <p className='m-3'>
            Discord Bot
            </p>
        </button>
        <button>
            <p>
            Animals
            </p>
        </button>
    </div>
  )
}