import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import profile from "../../../public/images/profile.jpeg";
import InputComponent from './InputComponent';
import { IoIosImages } from "react-icons/io";
const PostMaker = () => {
    return (
        <div className='bg-white w-[80%] mx-auto rounded-xl shadow-2xl p-3'>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <Link href="#">
                        <Image src={profile} className='h-[50px] w-[50px] object-cover rounded-full' alt='user' />
                    </Link>
                </div>
                <div className="w-[88%]">
                    <InputComponent customClass='text-white' type='text' placeholder="What's on your mind, Hafiz Muhammad?" />
                </div>
            </div>
            <hr className='my-3' />
            <div className="">
                <button className='bg-transparent flex items-center gap-3 rounded-[40px] hover:bg-slate-200 py-3 px-4'><IoIosImages /> Photo</button>
            </div>
        </div>
    )
}

export default PostMaker;