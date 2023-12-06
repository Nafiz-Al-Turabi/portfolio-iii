import React, { useEffect, useState } from 'react';
import ProjectsCard from '../../Components/Cards/ProjectsCard/ProjectsCard';

const Projects = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(result=>setProjects(result) )
    },[])
    return (
        <div className='m-2 '>
            <div className='flex justify-between items-center mt-14 mb-10'>
                <hr className='w-1/4 md:w-2/5 border border-zinc-300' />
                <h1 className=' text-2xl font-bold'>My Projects</h1>
                <hr className='w-1/4 md:w-2/5 border border-zinc-300' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    projects.map(project=>
                        <ProjectsCard
                        key={project.id}
                        project={project}
                        ></ProjectsCard>)
                }
            </div>

        </div>
    );
};

export default Projects;