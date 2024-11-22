import React from 'react';
import { Link,  Outlet } from 'react-router-dom';

const StartLearning = () => {
    
    return (
        <div>
            <div className='text-center items-center py-5'>
                <h1 className="text-5xl font-bold">Start Learning</h1>
            </div>
            <p className="py-5 w-10/12 mx-auto">
                Knowing these 100 essential Japanese words is a great way to start communicating with Japanese speakers all over the world and to learn Japanese fast. These words can be employed for a wide range of everyday topics. You’ll also find them when reading in Japanese. By mastering these words, you’ll be able to hold basic conversations and speak...<Link to="/start_learning/lessons" className="text-blue-500 font-medium cursor-pointer">
                Read More
              </Link>
            </p>
            <Outlet></Outlet>
        </div>
    );
};

export default StartLearning;