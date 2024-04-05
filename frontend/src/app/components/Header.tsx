import React from 'react'
import Image from 'next/image';
import logo from "../../../public/images/logo-removebg.png";
import Link from 'next/link';
import InputComponent from './InputComponent';
import { BiSolidMessage } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import profile from "../../../public/images/profile.jpeg";

const Header = () => {
    return (
        <section className='bg-white shadow-xl py-2'>
            <div className="flex justify-between items-center">
                <div className="flex w-[20%]">
                    <Link href="/">
                        <Image src={logo} alt='logo' className='w-[80px] h-[60px]' />
                    </Link>
                    <InputComponent type='text' placeholder='Search' customClass='text-white' />
                </div>
                <div className="flex gap-3 w-[9%]">
                    <button className='bg-gray-300 py-1 px-[9px] rounded-full cursor-pointer'><BiSolidMessage size={25} color='black' /></button>
                    <button className='bg-gray-300 py-1 px-[8px] rounded-full cursor-pointer'><IoIosNotifications size={25} color='black' /></button>
                    <button>
                        <Image src={profile} className='h-[40px] w-[40px] object-cover rounded-full' alt='user' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header;