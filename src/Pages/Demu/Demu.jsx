import React, { useState } from 'react';
import './Demu.css'; // Import a CSS file for styling
import my_image from '../../assets/my-image.jpg'
import { FaDownload, FaFacebook, FaGit, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Demu = () => {


    return (
        <div className="h-screen">
            <div className="h-screen bg-gray-900/80 md:h-screen lg:h-full w-full md:w-full lg:w-80 mt-10  md:mt-10  lg:mt-0 flex flex-col justify-between  ">
                <div>
                    <div className=' backdrop-blur-sm bg-zinc-200 py-5'>
                        <div className='flex justify-center '>
                            <img className='h-24 rounded-full' src={my_image} alt="" />
                        </div>
                        <h1 className='text-center mt-2 font-bold'>Nafiz Al Turabi</h1>
                        <p className='text-gray-500 font-semibold text-center mt-4'>Full Stack Web Developer</p>
                    </div>

                    <div className='bg-red-500 ' id='container-scroll'>
                        <div className='space-y-3 '>
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
                                <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                                    <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>CSS</p>
                                    <p className='text-white fonr-semibold '>90%</p>
                                </div>
                                <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                                    <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>JS</p>
                                    <p className='text-white fonr-semibold '>75%</p>
                                </div>
                                <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                                    <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white fonr-bold'>React</p>
                                    <p className='text-white fonr-semibold '>65%</p>
                                </div>
                                <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
                                    <div className="bg-[#f9fc2f] h-1.5 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-10 border-gray-500' />
                        <div>
                            <a className='text-center flex justify-center items-center  text-gray-500 hover:text-white  duration-300 ' href="">Download Resume <FaDownload className='ml-2' /> </a>
                        </div>
                        lorem500
                    </div>
                </div>
                <div className='flex items-certer justify-center py-2 space-x-5 bg-white/50'>
                    <FaFacebook className='text-2xl text-white border border-gray-50 p-1' />
                    <FaLinkedinIn className='text-2xl text-white border border-gray-50 p-1' />
                    <FaGit className='text-2xl text-white border border-gray-50 p-1' />
                    <FaInstagram className='text-2xl text-white border border-gray-50 p-1' />
                </div>
            </div>

        </div>
    );
};

export default Demu;
