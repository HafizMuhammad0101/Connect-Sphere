import React from 'react'

const InputComponent = (props: { type?: string, placeholder?: string, customClass?: string, }) => {
    const { type, placeholder, customClass } = props;
    return (
        <input type={type} placeholder={placeholder} className={`${customClass} w-full focus-visible:outline-none p-3 rounded-[40px] border-0 bg-[#116466]`} />
    )
}

export default InputComponent;