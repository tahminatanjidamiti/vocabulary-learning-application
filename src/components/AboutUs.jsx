import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex flex-col space-y-5 py-5 pl-8 bg-teal-50 border rounded-2xl shadow-lg'>
            <h1 className="text-5xl font-bold my-10 flex justify-center items-center">About Us</h1>
            <p className='font-bold'>Obtaining first class, I am newly graduate students.Love to dive into knowledge.</p>
            <p className='font-bold text-2xl'>Some of my projects are: </p>
            <a className='font-bold' href="https://fumbling-women.surge.sh/">Woofy-Pet Adaptation Project.</a>
            <a className='font-bold' href="https://eager-fact.surge.sh/">BPL Fantasy Squad-Players Section Project.</a>
            <a className='font-bold' href="https://tahminatanjidamiti.github.io/my-third-assignment/">Rinterio-House Design Project.</a>
            <a className='font-bold' href="https://tahminatanjidamiti.github.io/my-fifth-assignment/index.html">Donation-Donate Support Project.</a>

            <p className='font-bold text-2xl'>My skills are: <br />HTML <br />CSS <br /> JavaScript<br /> Basic React </p>
        </div>
    );
};

export default AboutUs;