"use client"

import Link from 'next/link'
import React from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

export default function Navbar() {
    const [toggle, setToggle] = React.useState(false)

    function handleMenu(){
        setToggle(!toggle)
    }

  return (
    <div className='max-w-[1400px] mx-auto p-4 h-[80px] flex justify-between items-center relative z-10'>
        <div className='flex gap-6'>
            <div className='h-[60px]'>
                <img src='logo.png' alt='Netflix' className='h-full' />
            </div>
            <ul className='md:flex hidden gap-4 items-center'>
                <Link href='/'><li>Home</li></Link>
                <Link href='/movies'><li>Movies</li></Link>
                <Link href='/tvs'><li>TV Shows</li></Link> 
            </ul>
        </div>
        <div className='md:flex hidden'>
            <button className='bg-red-600 px-4 py-2 rounded-md'>SignIn</button>
        </div>
        <div className='md:hidden block'>
            <HiMenuAlt3 onClick={handleMenu} className='cursor-pointer'/>
            {toggle && <div className='absolute top-0 left-0 bg-zinc-800 w-full p-4 flex flex-col gap-4'>
            <HiMenuAlt3 onClick={handleMenu} className='right-4 top-8 absolute cursor-pointer'/>
            <ul className='flex flex-col gap-4'>
                <Link href='/'><li>Home</li></Link>
                <Link href='/movies'><li>Movies</li></Link>
                <Link href='/tvs'><li>TV Shows</li></Link>
            </ul>
            <div className='flex flex-col gap-4'>
                <Link href='/signin'>
                    <button className='bg-red-600 px-4 py-2 rounded-md'>Sign IN</button>
                </Link>
            </div>
            </div>}
        </div>
    </div>
  )
}
