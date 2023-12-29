import React, { useEffect, useState } from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { isDarkMode } = useTheme();
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const D = data.find(detail => detail.id == id)
                if (D) {
                    setDetails(D)
                }
            })
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const { title, image, technology, category, platform, features, live, git, git_server } = details;
    return (
        <div className='m-2'>
            <div>
                <h1 className={isDarkMode ? 'text-3xl md:text-5xl font-bold bg-zinc-900/80 p-5 mb-5' : 'text-3xl md:text-5xl font-bold bg-zinc-300 p-5 mb-5  '}>{title}</h1>
                {/* Image and other */}
                <div className='md:flex flex-row-reverse justify-between gap-5'>
                    <div>
                        <img className={isDarkMode ? '' : 'border-[3px] p-2 border-dashed'} src={image} alt="" />
                    </div>
                    <div className={isDarkMode ? 'mt-5 md:mt-0 md:w-3/4 bg-zinc-900/80 p-4' : 'mt-5 md:mt-0 md:w-3/4 bg-zinc-300 p-4'}>
                        <div className='flex justify-between '>
                            <div className={isDarkMode ? 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-600 w-1/2' : 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-200 w-1/2'}>
                                <h1 className='font-bold'>X-Platform:</h1>
                                <h1 className='font-extrabold text-green-500'>{platform}</h1>
                            </div>

                            <div className={isDarkMode ? 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-500 w-1/2 ' : 'flex space-x-2 justify-center items-center px-1 py-5 bg-zinc-100 w-1/2 '}>
                                <h1 className='font-bold'>Category:</h1>
                                <h1 className='text-sm font-extrabold text-green-500'>{category}</h1>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='flex justify-between items-center'>
                                <hr className='w-1/4 border border-zinc-400' />
                                <h1 className=' font-bold uppercase text-center'>Used Technology</h1>
                                <hr className='w-1/4 border border-zinc-400' />
                            </div>
                            <ul className='grid grid-cols-4 gap-2 mt-5'>
                                {Array.isArray(technology) &&
                                    technology.map((tech, index) => (
                                        <li
                                            key={index}
                                            className={
                                                isDarkMode
                                                    ? 'bg-zinc-700 flex justify-center p-1'
                                                    : 'bg-zinc-100 flex justify-center p-1'
                                            }
                                        >
                                            {tech.name}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold'>Features</h1>
                    <div className='mt-5'>
                        {/* <p className={isDarkMode ? 'text-xl bg-zinc-900/80 p-5 text-justify' : 'text-xl bg-zinc-300 p-5 text-justify'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea similique vel provident id esse laborum quis corrupti dolor modi sunt.</p> */}
                        {/* Accordion */}
                        <div className="w-full">
                            {Array.isArray(features) &&
                                features.map((feature, index) => (
                                    <div key={index} className="mb-2">
                                        <div
                                            className={`select-none flex justify-between p-4 cursor-pointer bg-zinc-500/80 ${activeIndex === index ? 'text-xl ' : ''
                                                }`}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span className="font-semibold text-white">{feature.title}</span>
                                            <svg
                                                className={`w-4 h-4 text-white transition-transform transform ${activeIndex === index ? 'rotate-180' : ''
                                                    }`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="p-4 ">
                                                <p className="select-none">{feature.content}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div className='flex space-x-5 mt-10'>
                    <a href={live} target='blank'>
                        <button className=" border border-blue-500 hover:bg-blue-500 duration-300 font-bold py-4 px-10 ">
                            Live
                        </button>
                    </a>
                    <a href={git} target='blank'>
                        <button className="border border-green-500 hover:bg-green-500 duration-300   font-bold py-4 px-10 ">
                            Code
                        </button>
                    </a>
                    <a href={git_server} target='blank'>
                        <button className="border border-green-400 hover:bg-green-400 duration-300 font-bold py-4 px-10 ">
                            Server
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;