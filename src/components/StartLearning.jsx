import React from 'react';
import { Outlet } from 'react-router-dom';
import LoadSingleLesson from './LoadSingleLesson';

const StartLearning = () => {
    
    return (
        <div>
            <div className='text-center items-center py-5'>
                <h1 className="text-5xl font-bold">Start Learning</h1>
            </div>
            
            <p className="py-5 w-10/12 mx-auto">
                Knowing these 100 essential Japanese words is a great way to start communicating with Japanese speakers all over the world and to learn Japanese fast. These words can be employed for a wide range of everyday topics. You’ll also find them when reading in Japanese. By mastering these words, you’ll be able to hold basic conversations and speak.
            </p>
            <LoadSingleLesson></LoadSingleLesson>
            <Outlet></Outlet>
        </div>
    );
};

export default StartLearning;