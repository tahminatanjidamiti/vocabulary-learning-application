
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Header = ({ handleThemeToggle, isDark }) => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='sticky pt-2 top-0 z-10 backdrop-blur-sm bg-blue-100 bg-opacity-50 text-black'>
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <div><img className='w-14 h-14 rounded-full' src="https://i.ibb.co.com/TW7T3VQ/images.jpg" alt="Logo icon!" /></div>
                <div className="text-xl font-semibold flex justify-center items-center">{user && user?.displayName}</div>
                <div className='flex justify-between items-center gap-2'>
                    <div>
                    <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        {/* Theme Toggle */}
                        <input
                            type="checkbox"
                            value="synthwave"
                            className="toggle theme-controller"
                            checked={isDark}
                            onChange={handleThemeToggle}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
                <div className='login flex gap-2 items-center'>
                    {
                        user && user?.email ? (<><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="User picture!" /><button onClick={logOut} className='btn btn-accent rounded-none ml-1'>Log-Out</button> </>) : (<Link to="/auth/login" className='btn btn-accent rounded-none'>Login</Link>)
                    }

                </div></div>
                
            </div>
        </div>
    );
};

export default Header;