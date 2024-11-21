import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className=' min-w-screen min-h-screen flex justify-center items-center bg-gradient-to-t from-sky-500 via-green-500 via-40% to-teal-500'>
            <div className='text-center space-y-10'>
            <h2 className='text-4xl font-bold text-center'>404 Page not  found!</h2>
            <Link className='btn py-1 px-3 bg-transparent border-4 rounded-lg hover:bg-green-500' to="/">Back to Home</Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;