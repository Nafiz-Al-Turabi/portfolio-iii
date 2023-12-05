import React from 'react';
import { useTheme } from '../../../Provider/ThemeContext';
import projectImage from '../../../assets/background-1.jpg'


const ProjectsCard = ({ project }) => {
    const { isDarkMode } = useTheme();
    console.log(project)
    const { title, image, technology, live, git, git_server } = project;

    return (
        <div className={isDarkMode ? 'w-full bg-slate-900/50 shadow-lg shadow-white/5 hover:-translate-y-2 cursor-pointer duration-300' : 'w-full bg-slate-300 shadow-lg hover:-translate-y-2 cursor-pointer duration-300'}>
            <h1 className={isDarkMode ? 'bg-zinc-900/80 font-semibold text-2xl p-4 rounded-t-lg md:rounded-t-none' : 'bg-zinc-100 font-semibold text-2xl p-4 rounded-t-lg md:rounded-t-none'}>{title}</h1>
            <div className='md:flex '>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className={isDarkMode ? 'bg-zinc-800 mb-1 md:mb-0 pb-2' : 'bg-zinc-200 mb-1 md:mb-0 pb-2'}>
                    <h1 className='text-xl font-semibold p-2 md:px-10'>Technology</h1>
                    <div>
                        <ul className='grid grid-cols-4 md:grid-cols-2 gap-1 p-1'>
                            {
                                technology.map(tech=>
                                    <li className={isDarkMode ? 'text-xs bg-zinc-900/50 p-0.5 rounded-lg flex justify-center ' : 'text-xs bg-zinc-50 p-0.5 rounded-lg flex justify-center '}>{tech.name}</li>
                                    )
                            }
                            
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center p-5 rounded-b-xl md:rounded-b-none '>
                <a href={live} target='blank'>
                    <button className=" hover:text-blue-500  font-bold py-4 px-4 ">
                        Live
                    </button>
                </a>
                <a href={git} target='blank'>
                    <button className="hover:text-green-500 duration-300 border-l    border-gray-400 font-bold py-4 px-4 ">
                        Code
                    </button>
                </a>
                <a href={git_server} target='blank'>
                    <button className="hover:text-green-500 duration-300   border-r  border-gray-400 font-bold py-4 px-4 ">
                        Server
                    </button>
                </a>
                <button className=" hover:text-gray-500  font-bold py-4 px-4 ">
                    Details
                </button>
            </div>
        </div>
    );
};

export default ProjectsCard;