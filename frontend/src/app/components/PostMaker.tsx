"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import profile from "../../../public/images/profile.jpeg";
import Modal from './Modal';

const PostMaker: React.FC = (): JSX.Element => {

    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    return (
        <div className='bg-white w-[80%] mx-auto rounded-xl shadow-2xl p-3'>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <Link href="#">
                        <Image src={profile} className='2xl:h-[50px] 2xl:w-[50px] lg:h-[40px] lg:w-[40px] object-cover rounded-full' alt='user' />
                    </Link>
                </div>
                <div className="w-[88%]">
                    <button onClick={() => setIsModalOpen(true)} className='text-gray-300 transition-all duration-150 ease-in hover:bg-[#116450] w-full focus-visible:outline-none p-3 rounded-[40px] border-0 bg-[#116466] 2xl:text-[16px] lg:text-[13px]'>What's on your mind, Hafiz Muhammad?</button>
                    <Modal shouldOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </div>
            </div>
        </div>
    )
}

export default PostMaker;