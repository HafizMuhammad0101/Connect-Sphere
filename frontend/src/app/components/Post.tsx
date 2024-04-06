import React from 'react'
import Link from 'next/link';
import profile from "../../../public/images/profile.jpeg";
import Image from 'next/image';
import post from "../../../public/images/GirlWithBanner.jpg";
import { PiThumbsUp } from "react-icons/pi";
import { BiComment } from 'react-icons/bi';
import { IoIosShareAlt } from "react-icons/io";
const Post = () => {
    return (
        <div className='bg-white w-[80%] mx-auto rounded-xl shadow-2xl mt-5'>
            <div className="flex flex-col">
                <div className="flex gap-5 w-[80%] items-center p-3">
                    <Link href="#">
                        <Image src={profile} className='h-[50px] w-[50px] object-cover rounded-full' alt='user' />
                    </Link>
                    <div>
                        <Link href="#" className='text-[18px] font-medium capitalize hover:underline'>
                            UEFA CHAMPIONS LEAGUE
                        </Link>
                        <p className='text-[12px] font-normal'>2h</p>
                    </div>
                </div>
                <p className='font-normal text-[15px] px-3 mb-2'>🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis nobis ducimus aspernatur officiis accusamus ratione tempore, hic iusto debitis ex porro consequatur suscipit cupiditate assumenda iure unde fuga veritatis.</p>
                <Link href="#">
                    <Image src={post} alt='post' className='h-[750px] w-full object-cover' />
                </Link>
                <div className='flex flex-col p-2'>
                    <div className="flex justify-between">
                        <div className="w-[10%]">😂</div>
                        <div className="w-[30%] flex items-center justify-end gap-5">
                            <p className='text-[13px] font-normal'>275 comments</p>
                            <p className='text-[13px] font-normal'>103 shares</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex px-10 gap-9 mt-2">
                        <button className='hover:bg-slate-200 py-2 rounded-xl px-4 bg-transparent font-normal text-[14px] text-gray-600 flex items-center gap-2'>Like  <PiThumbsUp size={25} /></button>
                        <button className='hover:bg-slate-200 py-2 rounded-xl px-4 bg-transparent font-normal text-[14px] text-gray-600 flex items-center gap-2'>Comment  <BiComment size={25} /></button>
                        <button className='hover:bg-slate-200 py-2 rounded-xl px-4 bg-transparent font-normal text-[14px] text-gray-600 flex items-center gap-2'>Share  <IoIosShareAlt size={25} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;