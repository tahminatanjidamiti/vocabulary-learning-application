import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex flex-col space-y-5 py-5 pl-8 bg-teal-50 border rounded-2xl shadow-lg text-center'>
            <h1 className="text-5xl font-bold my-10 flex justify-center items-center">About Us</h1>
            <p className='font-bold w-8/12 mx-auto'>I am Tahmina Tanjida Miti, a passionate newly graduated student with a strong commitment to acquiring knowledge. My goal is to embrace new experiences and insights that contribute to my growth and success.</p>
            <p className='font-bold text-2xl'>Some of my projects are: </p>
            <a className='font-bold text-xl' href="https://fumbling-women.surge.sh/">Woofy-Pet Adaptation Project.</a>
            <a className='font-bold text-xl' href="https://eager-fact.surge.sh/">BPL Fantasy Squad-Players Section Project.</a>
            <a className='font-bold text-xl' href="https://tahminatanjidamiti.github.io/my-third-assignment/">Rinterio-House Design Project.</a>
            <a className='font-bold text-xl' href="https://tahminatanjidamiti.github.io/my-fifth-assignment/index.html">Donation-Donate Support Project.</a>

            <p className='font-bold'><span className='font-bold text-2xl'>My skills are:</span> <br />HTML <br />CSS <br /> JavaScript<br /> Basic React </p>
        </div>
    );
};

export default AboutUs;