import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const UpdatedProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex flex-col space-y-5 py-5 bg-teal-50 border rounded-2xl shadow-lg'> 
        <h1 className="text-5xl font-bold my-10 flex justify-center items-center">Updated Profile</h1>
           <img className='w-40 h-40 mx-auto rounded-full flex justify-center items-center' src={user && user?.photoURL} alt="" />
           <div className="text-xl font-semibold flex justify-center items-center">{user && user?.displayName}</div>
           <Link to="/my_profile" className="btn btn-info w-4/12 mx-auto">Update Information</Link>
        </div>
    );
};

export default UpdatedProfile;