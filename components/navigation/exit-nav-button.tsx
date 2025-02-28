import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Exitbutton() {
  return (
    <div className='w-full flex  items-center justify-center z-50 sticky top-0 p-10 bg-[linear-gradient(white_0%,rgba(255,255,255,0)_100%)]'>
      <button className='group  backdrop-blur-lg bg-[#e8e5e4]/100 p-[14px] rounded-full items-center hover:bg-black transition-all ease-in-out duration-300'>
        <Link href='/'>
          <X className='text-black group-hover:text-white transition-colors duration-300' />
        </Link>
      </button>
    </div>
  )
}
