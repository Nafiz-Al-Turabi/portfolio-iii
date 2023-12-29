import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import './Details.css'

const Details = () => {
    return (
        <div className='px-8 pt-5 h-[550px] md:h-[650px]  lg:h-[440px] backdrop-blur-lg   pb-10' id='container-scroll'>
            <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                    <p className=' fonr-bold'>Residence:</p>
                    <p className=' fonr-semibold '>Bangladesh</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className=' fonr-bold'>City:</p>
                    <p className=' fonr-semibold '>Naogaon</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className=' fonr-bold'>Age:</p>
                    <p className=' fonr-semibold '>26</p>
                </div>
            </div>
            <hr className='my-4 border-gray-500' />
            <div className='space-y-3 '>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className=' fonr-bold'>HTML</p>
                        <p className=' fonr-semibold '>90%</p>
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className=' fonr-bold'>CSS</p>
                        <p className=' fonr-semibold '>90%</p>
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className=' fonr-bold'>JS</p>
                        <p className=' fonr-semibold '>75%</p>
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className=' fonr-bold'>React</p>
                        <p className=' fonr-semibold '>65%</p>
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                </div>
            </div>
            <hr className='my-10 border-gray-500' />
            <div>
                <a className='text-center flex justify-center items-center  text-gray-500 hover:  duration-300 ' href="https://drive.google.com/file/d/1XgHKf_1fIRO6OFtp_xnzi9Xm6bXHJqjx/view" target='blank'>Download Resume <FaDownload className='ml-2' /> </a>
            </div>
        </div>
    );
};

export default Details;