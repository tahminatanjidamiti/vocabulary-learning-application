import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="text-xl font-semibold">{user && user?.displayName}</div>
            <div className='flex justify-between items-center'>
            <div><img className='' src="https://i.ibb.co.com/TW7T3VQ/images.jpg" alt="Logo icon!" /></div>
            
            <div className='login flex gap-2 items-center'>
                {
                    user && user?.email ? ( <><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="User picture!" /><button onClick={logOut} className='btn btn-neutral rounded-none ml-1'>Log-Out</button> </>) : (<Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>)
                }
                
            </div>
        </div>
        </div>
    );
};

export default Header;