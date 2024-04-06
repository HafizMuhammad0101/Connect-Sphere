"use client";

import React from 'react'
import ContactCard from './ContactCard';
import profile from "../../../public/images/profile.jpeg";

const ContactSection: React.FC = (): JSX.Element => {
    return (
        <div className='w-[100%] mx-auto '>
            <div className="flex flex-col">
                <h1 className='bg-white shadow-2xl rounded-xl p-3 font-semibold 2xl:text-[18px] lg:text-[14px]'>Contacts</h1>
                <div className="bg-white rounded-xl shadow-2xl p-3 mt-11 overflow-y-scroll lg:max-h-[56vh] xl:max-h-[56vh] 2xl:max-h-[68vh] 3xl:max-h-[70vh] 4xl:max-h-[73vh] customScroller">
                    <ContactCard name='Hafiz Muhammad Bin Asghar' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                    <ContactCard name='Hafiz Muhammad' profileImage={profile} onClick={() => { }} />
                </div>
            </div>
        </div>
    )
}

export default ContactSection;