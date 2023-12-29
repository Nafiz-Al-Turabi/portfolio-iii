import React, { useState } from 'react';
import { FaFacebook, FaGit, FaInstagram,FaQrcode } from 'react-icons/fa6';
import { FaBars, FaLinkedinIn, FaSignOutAlt } from 'react-icons/fa';
import my_image from '../assets/my-image.jpg'
import { Link, Outlet } from 'react-router-dom';
import Details from '../Components/Details/Details';
import { useTheme } from '../Provider/ThemeContext';
import light from '../assets/light.png'
import lightOff from '../assets/light-off.png'
import { GoProjectTemplate } from "react-icons/go";
import { TiHomeOutline } from "react-icons/ti";
import { MdContacts } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import ActiveLink from '../Components/ActiveLink/ActiveLink';
import ScrollToTopButton from '../Components/ScrollToTopButton/ScrollToTopButton';
import CustomCursor from '../Components/CustomMouseTracker/CustomCursor';

// import './Layout.css'

const Layout = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(true);
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };
    return (
        <div className={`flex  ${isDarkMode ? 'dark' : 'light'}`}>
            <nav
                className={`bg-yellow-500 w-full lg:w-0  md:bg-transparent h-screen md:h-[98%] lg:h-[98%] fixed   md:rounded-lg lg:rounded-none p-5  py-4 transition-transform transform z-50 ${isDrawerOpen ? 'translate-x-0 duration-700' : '-translate-x-full'
                    } md:translate-x-0`}
            >

                <div className={isDarkMode ? "bg-zinc-900/80 h-full  md:h-screen lg:h-full w-full md:w-full lg:w-80 mt-  md:mt-10  lg:mt-0  flex flex-col justify-between " : "bg-zinc-100 h-screen  md:h-screen lg:h-full w-full md:w-full lg:w-80 mt-  md:mt-10  lg:mt-0  flex flex-col justify-between "}>
                    <div>
                        <div className={isDarkMode ? 'bg-zinc-800 backdrop-blur-sm  py-5' : 'bg-zinc-300 backdrop-blur-sm  py-5'}>
                            <div className='flex justify-center '>
                                <img className='h-24 rounded-full' src={my_image} alt="" />
                            </div>
                            <h1 className='text-center mt-2 font-bold'>Nafiz Al Turabi</h1>
                            <p className='text-gray-500 font-semibold text-center mt-4'>Full Stack Web Developer</p>
                        </div>
                        <div>
                            <Details></Details>
                        </div>
                    </div>
                    <div className={isDarkMode ? 'bg-zinc-800 flex items-certer justify-center py-2 space-x-5'
                    : 'bg-zinc-300 flex items-certer justify-center py-2 space-x-5'}>
                        <FaFacebook className='text-2xl text-white border border-gray-50 p-1' />
                        <FaLinkedinIn className='text-2xl text-white border border-gray-50 p-1' />
                        <FaGit className='text-2xl text-white border border-gray-50 p-1' />
                        <FaInstagram className='text-2xl text-white border border-gray-50 p-1' />
                    </div>
                </div>

                <button className="md:hidden fixed top-1 right-1 rotate-180 " onClick={closeDrawer}>
                    <FaSignOutAlt className="text-gray-700 text-2xl" />
                </button>
            </nav>


            {/* Content */}
            <div className="flex-1 p-2 md:pl-72 lg:pl-[360px]">
                <button className="md:hidden" onClick={toggleDrawer}>
                    <FaBars className="text-gray-700 text-2xl" />
                </button>

                <div className={isDarkMode ? "lg:flex items-center bg-zinc-900/50 p-4 m-2  space-x-10 pr-4" : "lg:flex items-center bg-zinc-300 p-4 m-2  space-x-10 pr-4"}>
                    <ActiveLink to="/" className='text-3xl hover:text-[#f9fc2f] duration-300 ease-linear' title='Home'><TiHomeOutline /></ActiveLink>

                    <ActiveLink to="/projects" className='text-3xl hover:text-[#f9fc2f] duration-300 ease-linear' title='Projects'><GoProjectTemplate /></ActiveLink>

                    <ActiveLink to="/contact" className='text-3xl hover:text-[#f9fc2f] duration-300 ease-linear' title='Contact'><MdContacts /></ActiveLink>

                    <ActiveLink to="/blogs" className='text-3xl hover:text-[#f9fc2f] duration-300 ease-linear' title='Blogs'><TbBrandBlogger /></ActiveLink>
                    <ActiveLink to="/componentLibrary" className='text-3xl hover:text-[#f9fc2f] duration-300 ease-linear' title='Components'><FaQrcode /></ActiveLink>
                </div>

                <Outlet />

                <div className={isDarkMode ? "flex justify-between items-center  bg-zinc-900/80 mt-10 p-5 mx-2 mb-6" : "flex justify-between  bg-zinc-300 mt-10 p-5 mx-2 mb-6"}>
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <div className='flex items-certer justify-center py-2 space-x-5'>
                        <FaFacebook className='text-2xl text-white border border-gray-50 p-1' />
                        <FaLinkedinIn className='text-2xl text-white border border-gray-50 p-1' />
                        <FaGit className='text-2xl text-white border border-gray-50 p-1' />
                        <FaInstagram className='text-2xl text-white border border-gray-50 p-1' />
                    </div>

                </div>
                <ScrollToTopButton></ScrollToTopButton>
                <CustomCursor></CustomCursor>
                <div>
                    <button className='fixed top-0 right-10' onClick={toggleDarkMode}>
                        {isDarkMode ? <img className='h-20' src={lightOff} alt="" /> : <img className='h-20' src={light} alt="" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Layout;
