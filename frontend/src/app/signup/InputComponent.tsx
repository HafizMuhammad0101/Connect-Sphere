"use client";

import React from 'react'
import { BsEyeSlash } from 'react-icons/bs';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

interface InputComponentProps {
    placeholder: string,
    type: string,
    customClass?: string,
}

const InputComponent: React.FC<InputComponentProps> = ({ placeholder, type, customClass }): JSX.Element => {

    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    return (
        <div className="flex items-center justify-center flex-wrap mt-5 relative">
            <input placeholder={placeholder} type={`${isVisible ? "text" : type}`} className={`w-[90%] focus-visible:outline-none rounded-[40px] border bg-gray-300 py-3 px-4 placeholder:text-black ${customClass}`} />
            {
                type === "password" && <button className='absolute right-[8%]' onClick={() => setIsVisible((prevState) => !prevState)}>
                    {
                        !isVisible ? <RxEyeOpen size={25} /> : <BsEyeSlash size={25} />
                    }
                </button>
            }
        </div>
    )
}

export default InputComponent;