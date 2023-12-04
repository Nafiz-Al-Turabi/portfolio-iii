import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import './Details.css'

const Details = () => {
    return (
        <div className='px-8 pt-5 h-[550px] md:h-[650px]  lg:h-[450px] backdrop-blur-lg bg-black/75  pb-10' id='container-scroll'>
            <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                    <p className='text-white fonr-bold'>Residence:</p>
                    <p className='text-gray-300 fonr-semibold '>Bangladesh</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-white fonr-bold'>City:</p>
                    <p className='text-gray-300 fonr-semibold '>Naogaon</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-white fonr-bold'>Age:</p>
                    <p className='text-gray-300 fonr-semibold '>26</p>
                </div>
            </div>
            <hr className='my-4 border-gray-500' />
            <div className='space-y-3 '>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-white fonr-bold'>HTML</p>
                        <p className='text-white fonr-semibold '>90%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-white fonr-bold'>CSS</p>
                        <p className='text-white fonr-semibold '>90%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-white fonr-bold'>JS</p>
                        <p className='text-white fonr-semibold '>75%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-white fonr-bold'>React</p>
                        <p className='text-white fonr-semibold '>65%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                </div>
            </div>
            <hr className='my-10 border-gray-500' />
            <div>
                <a className='text-center flex justify-center items-center  text-gray-500 hover:text-white  duration-300 ' href="">Download Resume <FaDownload className='ml-2' /> </a>
            </div>
            <p>lorem200</p>
        </div>
    );
};

export default Details;