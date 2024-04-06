"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import profile from "../../../public/images/profile.jpeg";
import { IoIosImages } from "react-icons/io";
import Modal from './Modal';
const PostMaker = () => {

    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    return (
        <div className='bg-white w-[80%] mx-auto rounded-xl shadow-2xl p-3'>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <Link href="#">
                        <Image src={profile} className='h-[50px] w-[50px] object-cover rounded-full' alt='user' />
                    </Link>
                </div>
                <div className="w-[88%]">
                    <button onClick={() => setIsModalOpen(true)} className='text-gray-300 transition-all duration-150 ease-in hover:bg-[#116450] w-full focus-visible:outline-none p-3 rounded-[40px] border-0 bg-[#116466]'>What's on your mind, Hafiz Muhammad?</button>
                    <Modal shouldOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </div>
            </div>
            {/* <hr className='my-3' />
            <div>
                <button className='bg-transparent flex items-center gap-3 rounded-[40px] hover:bg-[#116450] hover:text-white transition-all duration-150 ease-in py-3 px-4'><IoIosImages /> Photo</button>
            </div> */}
        </div>
    )
}

export default PostMaker;