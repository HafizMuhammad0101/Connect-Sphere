import React from 'react'
interface InputComponentProps {
    type?: string,
    placeholder?: string,
    customClass?: string,
}
const InputComponent: React.FC<InputComponentProps> = ({ type, placeholder, customClass }) => {
    return (
        <input type={type} placeholder={placeholder} className={`${customClass} w-full focus-visible:outline-none p-3 rounded-[40px] border-0 bg-[#116466]`} />
    )
}

export default InputComponent;