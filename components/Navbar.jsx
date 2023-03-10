"use client"

import Link from 'next/link'
import React from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import Search from './Search'

export default function Navbar() {
    const [toggle, setToggle] = React.useState(false)
    const [toggleSearch, setToggleSearch] = React.useState(false)

    function handleMenu(){
        setToggle(!toggle)
    }
    function handleSearch(){
        setToggleSearch(!toggleSearch)
    }

  return (
    <div className='max-w-[1400px] mx-auto p-4 h-[80px] flex justify-between items-center relative z-10'>
        <div className='flex gap-6'>
            <div className='h-[60px]'>
                <Link href='/'><img src='logo.png' alt='Netflix' className='h-full' /></Link>
            </div>
            <ul className='md:flex hidden gap-4 items-center'>
                <Link href='/'><li className='hover:text-red-600'>Home</li></Link>
                <Link href='/movies'><li className='hover:text-red-600'>Movies</li></Link>
                <Link href='/tvs'><li className='hover:text-red-600'>TV Shows</li></Link> 
            </ul>
        </div>
        <div className='md:flex hidden md:justify-center gap-4 items-center'>
            <div className={`${!toggleSearch ? 'rounded-full p-2 cursor-pointer text-xl text-gray-200 flex gap-2 items-center hover:bg-zinc-900': 'rounded-md p-2 cursor-pointer text-xl text-gray-200 flex gap-2 items-center bg-zinc-900' }  `}>
                {!toggleSearch && <FiSearch  onClick={handleSearch}/>}
                {toggleSearch && <CgClose  onClick={handleSearch} className='hover:text-red-500'/>}
                {toggleSearch && <Search />}
            </div>
            <Link href='/login'>
                <button className='bg-red-600 px-4 py-2 rounded-md'>SignIn</button>
            </Link>
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
            <div className='p-2 cursor-pointer text-xl text-gray-200 flex items-center bg-zinc-900'>
                <Search />
            </div>
                <Link href='/signin'>
                    <button className='bg-red-600 px-4 py-2 rounded-md'>Sign IN</button>
                </Link>
            </div>
            </div>}
        </div>
    </div>
  )
}
