
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Header = () => {
const {user, logOut} = useContext(AuthContext);
    return (
        <div className='sticky pt-2 top-0 z-10 backdrop-blur-sm bg-teal-50 bg-opacity-50'>
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <div><img className='w-14 h-14 rounded-full' src="https://i.ibb.co.com/TW7T3VQ/images.jpg" alt="Logo icon!" /></div>
                <div className="text-xl font-semibold flex justify-center items-center">{user && user?.displayName}</div>
                <div className='login flex gap-2 items-center'>
                    {
                        user && user?.email ? (<><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="User picture!" /><button onClick={logOut} className='btn btn-accent rounded-none ml-1'>Log-Out</button> </>) : (<Link to="/auth/login" className='btn btn-accent rounded-none'>Login</Link>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;