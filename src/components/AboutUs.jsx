import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex flex-col space-y-5 py-5 pl-8 bg-teal-50 border rounded-2xl shadow-lg'>
            <h1 className="text-5xl font-bold my-10 flex justify-center items-center">About Us</h1>
            <p className='font-bold'>Obtaining first class, I am newly graduate students.Love to dive into knowledge.</p>
            <p>Some of my projects are: </p>
            <a href="">https://fumbling-women.surge.sh/</a>
            <a href="">https://eager-fact.surge.sh/</a>

            <p>My skills are: <br />HTML <br />CSS <br /> JavaScript<br /> Basic React </p>
        </div>
    );
};

export default AboutUs;