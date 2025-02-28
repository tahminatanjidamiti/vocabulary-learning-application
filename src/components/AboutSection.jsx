import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="hero bg-base-200 min-h-screen relative">
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
            <div className="hero-content md:w-8/12 gap-10 flex-col lg:flex-row relative">
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
                <img
                    src="https://i.ibb.co.com/1s4xbvz/images-1.jpg"
                    className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black from-10% via-sky-500 to-teal">Dive Into Learning Language</h1>
                    <p className="py-2">
                        Our mission is to provide you with everything you need to master Japanese words, enabling you to hold basic conversations and speak Japanese with confidence.
                    </p>
                    <Link to="/start_learning" className="btn btn-info">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;