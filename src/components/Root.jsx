import { matchPath, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";


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
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-348px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;