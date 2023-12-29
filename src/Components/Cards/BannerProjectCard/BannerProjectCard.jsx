import React from 'react';
import { useTheme } from '../../../Provider/ThemeContext';
import { Link } from 'react-router-dom';

const BannerProjectCard = ({ project }) => {
    const { isDarkMode } = useTheme();
    const { id, title, image, live, git  } = project;
    return (
        <div className={isDarkMode ? "w-full rounded-3xl bg-zinc-900/50 overflow-hidden   shadow-lg shadow-white/5 relative" : "w-full rounded-3xl bg-zinc-100 overflow-hidden shadow-lg  relative"}>
            <img className="w-full rounded-tl-[50px] hover:scale-[110%] duration-300" src={image} alt='' />
            <div className={isDarkMode ? 'absolute top-0 left-0 h-10 w-48 bg-zinc-900 rounded-br-[50px] flex justify-center items-center text-lg font-extrabold' : 'absolute top-0 left-0 h-10 w-48 bg-zinc-100 rounded-br-[50px] flex justify-center items-center text-lg font-extrabold'}>React.js</div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl my-10 text-center ">{title}</div>
            </div>
            <div className={isDarkMode ? "flex bg-zinc-900/50 justify-around p-4" : "flex bg-zinc-300 justify-around p-4"}>
                <a href={live} target='blank'>
                    <button className=" hover:text-blue-500  font-bold py-4 px-4 ">
                        Live
                    </button>
                </a>
                <a href={git}>
                    <button className="hover:text-green-500 duration-300 border-l  border-r  border-gray-400 font-bold py-4 px-4 ">
                        Code
                    </button>
                </a>
                <button className=" hover:text-gray-500  font-bold py-4 px-4 ">
                    <Link to={`/projectDetails/${id}`}>Details</Link>
                </button>
            </div>
        </div>
    );
};

export default BannerProjectCard;