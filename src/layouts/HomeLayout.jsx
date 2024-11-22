
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import PracticeSection from "../components/PracticeSection";
import Success from "../components/Success";
import User from "../components/User";



const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Success></Success>
            <User></User>
            <PracticeSection></PracticeSection>
        </div>
    );
};

export default HomeLayout;