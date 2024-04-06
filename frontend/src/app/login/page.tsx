import React from 'react'
import InputComponent from './InputComponent';
import logo from "../../../public/images/logo-removebg.png";
import Image from 'next/image';
import Link from 'next/link';

const Login: React.FC = (): JSX.Element => {
    return (
        <section className='bg-gray-300'>
            <div className="flex items-center flex-col justify-center h-screen">
                <Image src={logo} alt='logo' className='w-[200px] h-[200px]' />
                <div className="w-[35%] rounded-[40px] bg-[#116466] shadow-2xl p-10">
                    <h1 className='text-center text-[30px] font-medium text-white'>Login</h1>
                    <div className='mt-10 text-center'>
                        <InputComponent placeholder='Email' type='email' />
                        <InputComponent placeholder='Password' type='password' />
                        <button className='bg-black my-7 hover:bg-transparent border hover:scale-[.85] transform w-[200px] px-6 py-3 text-white font-medium text-[16px] border-black transition-all duration-150 ease-in-out rounded-[40px]'>Login</button>
                        <p>Don't have an account? <Link href="/signup" className="font-medium hover:text-gray-300">Signup</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;