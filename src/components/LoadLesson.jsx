import { NavLink, useLoaderData } from "react-router-dom";



const LoadLesson = () => {
    const data = useLoaderData() || [];
    
    const getButtonColor = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case "easy":
                return "bg-green-400 hover:bg-green-500";
            case "medium":
                return "bg-yellow-400 hover:bg-yellow-500";
            case "hard":
                return "bg-red-400 hover:bg-red-500";
            default:
                return "bg-teal-400 hover:bg-gray-500"; 
        }
    };


    return (
        <div>
            <div className='p-5 md:container mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-5 mb-4 relative'>
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
                {
                        data.map(lesson => <NavLink  to={`/start_learning/${lesson.id}`} className={`btn border-none text-black ${getButtonColor(lesson.difficulty)}`} key={lesson.id}>{`Lesson: ${lesson.lesson_no}`}</NavLink>)  
                }
            </div>
        </div>
    );
};

export default LoadLesson;