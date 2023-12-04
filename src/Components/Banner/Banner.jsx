import nafiz from '../../assets/nafiz.png'
import { Link } from 'react-router-dom';
import './Banner.css'
import { useTheme } from '../../Provider/ThemeContext';



const Banner = () => {
    // const [projects, setProjects] = useState([]);
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, [])
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className='p-2' id='scroll'>
            <div className={isDarkMode ? 'lg:flex justify-between py-10 lg:py-0 lg:pb-0 bg-gray-900/80 items-center w-full lg:h-96 lg:px-10' : 'lg:flex justify-between py-10 lg:py-0 lg:pb-0  bg-[#f9fc2f] items-center w-full lg:h-96 lg:px-10'}>
                <div className='flex justify-center '>
                    <img src={nafiz} className='h-96 hidden lg:block' alt="" />
                </div>
                <div className='text-center lg:text-right'>
                    <h1 className=' text-5xl lg:w-[550px] font-extrabold'>Discover my Amazing Art Space!</h1>
                    <p className=' text-2xlfont-bold md:font-extrabold mt-6 mb-10'>I'm <span className='animated-text text-base font-bold'>Jonior Full Stack Web Developer</span></p>
                    <Link className='py-2 px-4 md:py-3 md:px-8 font-semibold tracking-widest bg-yellow-500  '>Explore more</Link>
                </div>
            </div>
            {/* <div>
                <p className=' text-lg text-justify'>Hello! I’m Nafiz Al Turabi. Web Developer with over 1.5 years of learning experience and 3 months working experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                <p>lorem500</p>
            </div> */}
            
            <div className='flex-auto lg:flex justify-between mt-5'>
                <p className='text-[#f9fc2f] font-extrabold text-2xl flex items-center'>1 +
                    <span className='text-base font-semibold text-gray-600 ml-3'>Years Exprience</span>
                </p>
                <p className='text-[#f9fc2f] font-extrabold text-2xl flex items-center'>5
                    <span className='text-base font-semibold text-gray-600 ml-3'>Completed Projects</span>
                </p>
                <p className='text-[#f9fc2f] font-extrabold text-2xl flex items-center'>1 +
                    <span className='text-base font-semibold text-gray-600 ml-3'>Years Exprience</span>
                </p>
                <p className='text-[#f9fc2f] font-extrabold text-2xl flex items-center'>5
                    <span className='text-base font-semibold text-gray-600 ml-3'>Completed Projects</span>
                </p>
            </div>
            {/* projects */}
            {/* <div className='mt-10'>
                <h1 className='text-xl font-bold  mb-10'>My Recent Projects</h1>
                <div className='grid grid-cols-1 gap-5'>
                    {
                    projects.map(project=><ProjectCard
                    key={project.id}
                    project={project}
                    ></ProjectCard>)
                    }
                </div>
            </div> */}
            {/* <div className="flex justify-between text-gray-600 bg-gray-950/80 mt-10 p-5">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                <p>Email: nafizalturabi@gmail.com</p>
            </div> */}
        </div>
    );
};

export default Banner;