import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='pb-2 pt-1 flex items-center justify-center gap-2 md:gap-5 sticky top-16 z-10 backdrop-blur-sm bg-blue-100 bg-opacity-50 text-black'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/start_learning">Start-Learning</NavLink>
            <NavLink to="/tutorials">Tutorials</NavLink>
            <NavLink to="/about_us">About-Us</NavLink>
            <NavLink to="/my_profile">Profile</NavLink>
        </div>
    );
};

export default Navbar;