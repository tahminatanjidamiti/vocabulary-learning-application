import { matchPath, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";


const Root = () => {
    const location = useLocation();
    useEffect(() => {
        const pathSelect = {
            '/start_learning': 'Start-Learning',
            '/start_learning/lessons': 'Start-Learning | Lesson',
            '/tutorials': 'Tutorials',
            '/about_us': 'About-Us',
            '/my_profile': 'Profile',
        };
    
        const match = matchPath('/start_learning/:id', location.pathname);
        const pageTitle = pathSelect[location.pathname] || 
                          (match ? `Start-Learning | ${match.params.id}` : 'Home');
    
        document.title = `Lingo Bongo | ${pageTitle}`;
    }, [location]);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDark(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    // Toggle the theme//
    const handleThemeToggle = () => {
        setIsDark((prev) => {
            const newTheme = !prev ? 'dark' : 'light';
            // Update the theme in localStorage//
            localStorage.setItem('theme', newTheme);
            // Set the theme to the root element (html or body)//
            document.documentElement.setAttribute('data-theme', newTheme);
            return !prev;
        });
    };
    return (
        <div>
            <Header handleThemeToggle={handleThemeToggle} isDark={isDark}></Header>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-348px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;