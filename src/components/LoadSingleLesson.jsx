import React from 'react';
import { NavLink } from 'react-router-dom';

const LoadSingleLesson = () => {
    const lessonNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <div>
            <div className=" py-10 px-5 md:container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-5">
                {lessonNumbers.map((lessonNo) => (
                    <NavLink
                        to="/start_learning/lessons"
                        key={lessonNo}
                        className="btn btn-accent border-none hover:bg-teal-700 text-white flex justify-center items-center p-5"
                    >
                        {`Lesson ${lessonNo}`} 
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LoadSingleLesson;