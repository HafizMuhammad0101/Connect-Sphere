"use client";

import React from 'react'
import ContactCard from './ContactCard';
import profile from "../../../public/images/profile.jpeg";

const ContactSection: React.FC = (): JSX.Element => {
    return (
        <div className='w-[100%] mx-auto '>
            <div className="flex flex-col">
                <h1 className='bg-white shadow-2xl rounded-xl p-3 font-semibold text-[18px]'>Contacts</h1>
                <div className="bg-white rounded-xl shadow-2xl p-3 mt-11 py-6 overflow-y-scroll max-h-[74vh] ShowNoScrollBar">
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