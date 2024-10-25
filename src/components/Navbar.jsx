import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosMenu, IoMdClose, IoMdPhonePortrait } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import Dropdown from './Dropdown'
import DarkMode from './DarkMode'

const Navbar = () => {

    const [Navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        setNavbar(!Navbar)
    }

    return (
        <div className='w-full border-b flex flex-col bg-white dark:bg-black dark:text-white'>
            <div className='w-[80%] mx-auto h-[60px] flex justify-between items-center'>
                <div>
                    <img src="https://s.shangri-la.com/sl-fe-public/imgs/logo/header_logo_sh_en.png" className='w-48' alt="Logo" />
                </div>
                
          
                <div className='lg:block hidden'>
                    <ul className='flex gap-3 items-center'>
                        <li className='flex justify-center items-center gap-2 border-r text-sm font-semibold border-black pr-2 '><FaUser size={15}/> Sign In</li>
                        <li className='border-r text-sm font-semibold border-black pr-2 '>Join Now</li>
                        <li className='border-r text-sm font-semibold border-black pr-2 '>Find Reservations</li>
                        <li className='flex justify-center items-center gap-2 border-r text-sm font-semibold border-black pr-2 '><TbWorld size={20} />English</li>
                        <li className='border-r text-sm font-semibold border-black pr-2 '>LKR</li>
                        <li><IoMdPhonePortrait /></li>
                        <li><DarkMode /></li>
                    </ul>
                </div>
                
             
                <div className='lg:hidden'>
                    {!Navbar ? <IoIosMenu onClick={toggleNavbar} size={30}/> : <IoMdClose onClick={toggleNavbar} size={30} /> }
                </div>
            </div>

           
            <div className={`${Navbar ? 'block' : 'hidden'} lg:hidden w-full bg-white border-t`}>
                <ul className='flex flex-col items-start gap-2 p-4'>
                    <li className='flex items-center gap-2 text-sm font-semibold'><FaUser size={15}/> Sign In</li>
                    <li className='text-sm font-semibold'>Join Now</li>
                    <li className='text-sm font-semibold'>Find Reservations</li>
                    <li className='flex items-center gap-2 text-sm font-semibold'><TbWorld size={20} /> English</li>
                    <li className='text-sm font-semibold'>LKR</li>
                    <li className='flex items-center gap-2'><IoMdPhonePortrait /> Contact Us</li>
                </ul>
            </div>
            <Dropdown/>
        </div>
    )
}

export default Navbar
