import React from 'react'
import Image from 'next/image';
import logo from "../../../public/images/logo-removebg.png";
import Link from 'next/link';
import InputComponent from './InputComponent';
import { BiSolidMessage } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import profile from "../../../public/images/profile.jpeg";

const Header: React.FC = (): JSX.Element => {
    return (
        <section className='bg-white shadow-xl py-2'>
            <div className="flex 3xl:justify-between justify-around">
                <div className="flex items-center 2xl:w-[20%]">
                    <Link href="/">
                        <Image src={logo} alt='logo' className='w-[80px] h-full' />
                    </Link>
                    <InputComponent type='text' placeholder='Search' customClass='text-white' />
                </div>
                <div className="flex items-center gap-3 2xl:w-[9%]">
                    <button className='bg-[#116466] hover:bg-[#083c5d] text-white lg:py-[7px] 3xl:py-2 px-[9px] rounded-full cursor-pointer transition-all duration-150 ease-in'><BiSolidMessage size={25} /></button>
                    <button className='bg-[#116466] hover:bg-[#083c5d] text-white lg:py-[7px] 3xl:py-2 px-[9px] rounded-full cursor-pointer'><IoIosNotifications size={25} /></button>
                    <button><Image src={profile} className='lg:h-[30px] lg:w-[30px] 3xl:h-[40px] 3xl:w-[40px] object-cover rounded-full' alt='user' /></button>
                </div>
            </div>
        </section>
    )
}

export default Header;