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
    const { isDarkMode } = useTheme();

    return (
        <div className='p-2 pb-10' id='scroll'>
            <div className={isDarkMode ? 'lg:flex justify-between py-10 lg:py-0 lg:pb-0 bg-zinc-900/80 items-center w-full lg:h-96 lg:pr-10' : 'lg:flex justify-between py-10 lg:py-0 lg:pb-0  bg-[#fcfcc3] items-center w-full lg:h-96 lg:pr-10'}>
                <div className='flex justify-center '>
                    <img src={nafiz} className='h-96 hidden lg:block' alt="" />
                </div>
                <div className='text-center lg:text-right'>
                    <h1 className=' text-5xl lg:w-[550px] font-extrabold'>Discover my Amazing Art Space!</h1>
                    <p className=' text-2xlfont-bold md:font-extrabold mt-6 mb-10'>I'm <span className='animated-text text-base font-bold'>Jonior Full Stack Web Developer</span></p>
                    <button className='w-44 p-3 font-semibold  tracking-wider bg-yellow-500 hover:tracking-widest duration-300 '>
                        <Link to='/'>Explore more</Link>
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
                <hr className='w-2/5 border border-zinc-300'/>
                <h1 className=' text-2xl font-bold'>My Latest Projects</h1>
                <hr className='w-2/5 border border-zinc-300'/>
            </div>

            <div className={isDarkMode ? "w-full lg:w-80 rounded-3xl bg-zinc-900/50 overflow-hidden   shadow-lg shadow-white/5 relative" : "w-full lg:w-80 rounded-3xl bg-zinc-100 overflow-hidden shadow-lg  relative"}>
                <img className="w-full rounded-tl-[70px] hover:scale-[110%] duration-300" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt='' />
                <div className={isDarkMode ? 'absolute top-0 left-0 h-16 w-48 bg-zinc-900 rounded-br-[50px] flex justify-center items-center text-lg font-extrabold' : 'absolute top-0 left-0 h-16 w-48 bg-zinc-100 rounded-br-[50px] flex justify-center items-center text-lg font-extrabold'}>React.js</div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center"> UNIVERSE OF UI </div>
                </div>
                <div className={isDarkMode ? "flex bg-zinc-900/50 justify-around p-4" : "flex bg-zinc-300 justify-around p-4"}>
                    <button className=" hover:text-blue-500  font-bold py-4 px-4 ">
                        Live
                    </button>
                    <button className="hover:text-green-500 duration-300 border-l  border-r  border-gray-400 font-bold py-4 px-4 ">
                        Code
                    </button>
                    <button className=" hover:text-gray-500  font-bold py-4 px-4 ">
                        Details
                    </button>
                </div>
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

        </div>
    );
};

export default Banner;