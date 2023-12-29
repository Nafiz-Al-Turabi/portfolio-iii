import React from 'react';
import notFound from '../../assets/notfound.gif'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex flex-col-reverse justify-center items-center'>
             <Link to='/' className='text-center bg-blue-500 p-2 font-bold rounded-lg text-white' >Back To Home</Link>
           <div>
             <img className='w-full md:w-[500px]' src={notFound} alt="" />
           </div>
           
        </div>
    );
};

export default NotFound;