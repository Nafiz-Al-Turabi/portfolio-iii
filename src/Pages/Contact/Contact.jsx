import React, { useRef, useState } from 'react';
import { MdOutlineAlternateEmail, MdOutlineMail } from "react-icons/md";
import { FaUser } from 'react-icons/fa6';
import { useTheme } from '../../Provider/ThemeContext';
import CallMe from '../../Components/CallMe/CallMe';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [nameInputFocus, setNameInputFocus] = useState(false);
    const [emailInputFocus, setEmailInputFocus] = useState(false);
    const [messageInputFocus, setMessageInputFocus] = useState(false);
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jg0slc3', 'template_ndvbxxa', form.current, 'NQKsEqchi12TQGHwE')
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true);
                form.current.reset();
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            }, (error) => {
                console.log(error.text);
            });
    };


    const handleNameInputFocus = () => {
        setNameInputFocus(true);
    };

    const handleNameInputBlur = () => {
        setNameInputFocus(false);
    };
    const handleEmailInputFocus = () => {
        setEmailInputFocus(true);
    };

    const handleEmailInputBlur = () => {
        setEmailInputFocus(false);
    };

    const handleMessageInputFocus = () => {
        setMessageInputFocus(true);
    };

    const handleMessageInputBlur = () => {
        setMessageInputFocus(false);
    };
    return (
        <div className="h-screen m-2 ">
            <div>
                <div className='w-full pb-28 lg:pb-0'>
                    <div className='relative'>
                        <h1 className='text-xl font-bold  mb-2 mt-10'>Contact information</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            <div className={isDarkMode ? 'bg-zinc-900/80 space-y-2 p-8 shadow-lg shadow-white/5 rounded-lg' : 'bg-zinc-300 space-y-2 p-8 shadow-lg rounded-lg'}>
                                <div className='flex justify-between items-center'>
                                    <p className=' font-bold'>Email:</p>
                                    <p className=' font-semibold '>nafizalturabi@gmail.com</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className=' font-bold'>Whatsapp:</p>
                                    <p className=' font-semibold '>+880 1747-206719</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className=' font-bold'>Skype:</p>
                                    <p className=' font-semibold '>mridul</p>
                                </div>
                            </div>
                            <div className={isDarkMode ? 'bg-zinc-900/80 space-y-2 p-8 shadow-lg shadow-white/5 rounded-lg' : 'bg-zinc-300 space-y-2 p-8 shadow-lg rounded-lg'}>
                                <div className='flex justify-between items-center'>
                                    <p className=' font-bold'>Phone:</p>
                                    <p className=' font-semibold '>+880 1755-659843</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className=' font-bold'>Phone-2:</p>
                                    <p className=' font-semibold '>+880 1747-206719</p>
                                </div>

                            </div>
                        </div>
                        <h1 className='text-xl font-bold  mb-2 mt-10'>Get in touch</h1>
                        {isSuccess && <p className={isDarkMode ? 'text-center text-green-500 bg-white w-56 p-2 border-b-[5px] border-green-500 rounded-t-md rounded-b-sm fixed top-5 left-[50%]' : 'text-center text-green-500 bg-zinc-900/80 w-56 p-2 border-b-[5px] border-green-500 rounded-t-md rounded-b-sm fixed top-5 left-[50%]'}>Email sent successfully!</p>}
                        <form ref={form} onSubmit={sendEmail} className={isDarkMode ? 'bg-zinc-900/80 px-5 py-10 space-y-10' : 'bg-zinc-300 px-5 py-10 space-y-10'}>
                            <div className='flex items-center'>
                                <FaUser className={`bg-gray-500 text-xl w-12 h-12 p-3  ${nameInputFocus ? 'bg-yellow-300 text-gray-600 duration-500 ' : ''}`} />
                                <input
                                    onFocus={handleNameInputFocus}
                                    onBlur={handleNameInputBlur}
                                    type="text" name="user_name" id="" className='bg-zinc-700/10 placeholder:text-gray-600 w-full p-3 focus:outline-none' placeholder='Name' />
                            </div>
                            <div className='flex items-center'>
                                <MdOutlineAlternateEmail className={`bg-gray-500 text-xl w-12 h-12 p-3 ${emailInputFocus ? 'bg-yellow-300 text-gray-600 duration-500' : ''}`} />
                                <input
                                    onFocus={handleEmailInputFocus}
                                    onBlur={handleEmailInputBlur}
                                    type="email" name="user_email" id="" className='bg-zinc-700/10 placeholder:text-gray-600 w-full p-3 focus:outline-none' placeholder='Email' />
                            </div>
                            <div className='flex '>
                                <MdOutlineMail className={`bg-gray-500 text-xl w-12 h-32 p-3 ${messageInputFocus ? 'bg-yellow-300 text-gray-600 duration-500  ' : ''}`} />
                                <textarea
                                    onFocus={handleMessageInputFocus}
                                    onBlur={handleMessageInputBlur}
                                    type="text" name="message" id="" className='bg-zinc-700/10 placeholder:text-gray-600 w-full h-32 p-3 focus:outline-none resize-none' placeholder='Message' />
                            </div>
                            <button type='submit' value='send' className='text-sm py-2 px-4 md:py-3 md:px-8 font-semibold tracking-widest bg-yellow-500 uppercase hover:-translate-y-1 duration-300'>
                                Send Message
                            </button>
                        </form>
                        <CallMe></CallMe>
                    </div>
                </div>
            </ div>


        </div>
    );
};

export default Contact;