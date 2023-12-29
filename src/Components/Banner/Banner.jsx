import nafiz from '../../assets/nafiz.png'
import { Link } from 'react-router-dom';
import './Banner.css'
import { useTheme } from '../../Provider/ThemeContext';
import BannerProjectCard from '../Cards/BannerProjectCard/BannerProjectCard';
import { useEffect, useState } from 'react';



const Banner = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const { isDarkMode } = useTheme();

    return (
        <div className='p-2 pb-10'>
            <div className={isDarkMode ? 'lg:flex justify-between py-10 lg:py-0 lg:pb-0 bg-zinc-900/80 items-center w-full lg:h-96 lg:pr-10' : 'lg:flex justify-between py-10 lg:py-0 lg:pb-0  bg-[#fcfcc3] items-center w-full lg:h-96 lg:pr-10'}>
                <div className='flex justify-center '>
                    <img src={nafiz} className='h-96 hidden lg:block' alt="" />
                </div>
                <div className='text-center lg:text-right'>
                    <h1 className=' text-5xl lg:w-[550px] font-extrabold'>Discover my Amazing Art Space!</h1>
                    <p className=' text-2xlfont-bold md:font-extrabold mt-6 mb-10'>I'm <span className='animated-text text-base font-bold'>Jonior Full Stack Web Developer</span></p>
                    <button className='w-44 p-3 font-semibold  tracking-wider bg-yellow-500 sha hover:tracking-widest duration-300 '>
                        <Link to='/projects'>Explore Now</Link>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>
                <div className={isDarkMode ? 'bg-zinc-900/80 p-5 rounded-lg shadow-lg shadow-white/5' : 'bg-zinc-100 p-5 rounded-lg shadow-lg'}>
                    <p className=' text-lg text-justify'>Hello! I’m Nafiz Al Turabi. Web Developer with over 1.5 years of learning experience and 3 months working experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                </div>

                <div className={isDarkMode ? 'flex-auto lg:flex justify-between bg-zinc-900/80 p-5 rounded-lg shadow-lg shadow-white/5' : 'flex-auto lg:flex justify-between bg-zinc-100 p-5 rounded-lg shadow-lg'}>
                    <p className=' font-extrabold text-2xl flex items-center'>1 +
                        <span className='text-base font-semibold  ml-3'>Years Exprience</span>
                    </p>
                    <p className=' font-extrabold text-2xl flex items-center'>5
                        <span className='text-base font-semibold  ml-3'>Completed Projects</span>
                    </p>
                </div>
            </div>

            <div className='flex justify-between items-center mt-14 mb-10'>
                <hr className='w-1/4 md:w-2/5 border border-zinc-300' />
                <h1 className='text-lg md:text-2xl font-bold'>My latest Projects</h1>
                <hr className='w-1/4 md:w-2/5 border border-zinc-300' />
            </div>


            {/* projects */}
            <div className='mt-10 '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        projects.slice(0, 3).map(project => <BannerProjectCard
                            key={project.id}
                            project={project}
                        ></BannerProjectCard>)
                    }
                </div>
            </div>

            <div className='float-right mt-6'>
                <button className={isDarkMode ? 'bg-zinc-900/80 text-lg font-semibold px-10 py-3 rounded-lg hover:bg-zinc-900 duration-300' : 'bg-[#f9fc2f] text-lg font-semibold px-10 py-3 rounded-lg hover:bg-yellow-500 duration-300 text-white'}>
                    <Link to='/projects'>More</Link>
                </button>
            </div>

        </div>
    );
};

export default Banner;