import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from "react-icons/ai";
import InputComponent from './InputComponent';
import { IoIosImages } from 'react-icons/io';
export default function Modal(props: { shouldOpen: boolean, setIsModalOpen: any }) {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={props.shouldOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setIsModalOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="flex items-center justify-between px-3">
                                        <Dialog.Title className="text-center text-[#116450] font-semibold text-[18px]">
                                            Create Post
                                        </Dialog.Title>
                                        <button ref={cancelButtonRef} onClick={() => props.setIsModalOpen(false)} className='hover:bg-gray-300 transition-all duration-150 ease-in py-2 px-[9px] rounded-full cursor-pointer'><AiOutlineClose size={25} color='black' /></button>
                                    </div>
                                    <hr className='my-1' />
                                    <InputComponent type='text' placeholder="What's on your mind, Hafiz Muhammad?" customClass='bg-transparent' />
                                    <div className="flex items-center gap-5 px-3 mt-7">
                                        <p className='text-[16px] font-normal'>Add to your post</p>
                                        <div>
                                            <button className='flex items-center gap-3 rounded-[40px] text-white bg-[#116466] hover:bg-[#116450] py-1 px-3 transition-all duration-150 ease-in'><IoIosImages /> Photo</button>
                                        </div>
                                    </div>
                                    <button className='mt-5 w-full rounded-[40px] text-white bg-[#116466] hover:bg-[#116450] py-2 px-3 transition-all duration-150 ease-in'>
                                        Post
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
