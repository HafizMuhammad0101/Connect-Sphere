import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface ContactCardProps {
    profileImage: StaticImageData,
    name: string,
    onClick: () => void
}

const ContactCard: React.FC<ContactCardProps> = ({ profileImage, name, onClick }) => {

    return (
        <div className='flex items-center bg-slate-300 hover:bg-[#116450] transition-all ease-in duration-150 hover:text-white p-3 rounded-xl gap-3 cursor-pointer mt-4' onClick={onClick}>
            <Image src={profileImage} alt='user profile' className='select-none h-[40px] w-[42px] rounded-full'/>
            <h4 className='text-[13px] font-medium select-none'>{name}</h4>
        </div>
    )
}

export default ContactCard;