
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import Success from "../components/Success";
import User from "../components/User";



const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Success></Success>
            <User></User>
        </div>
    );
};

export default HomeLayout;