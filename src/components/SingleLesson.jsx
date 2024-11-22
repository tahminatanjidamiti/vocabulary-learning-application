
import { Link, useLoaderData } from 'react-router-dom';

const SingleLesson = () => {
    const data = useLoaderData() || [];
    console.log(data.length);
    const {
        id, meaning, pronunciation, word, part_of_speech, difficulty, lesson_no, when_to_say,
    } = data[0];

    

    return (
        <div>
            <div className='w-80 mx-auto py-10'> 
            <div className="card bg-base-100 shadow-xl border-2">
                <div className="card-body text-center">
                    <h2 className="card-title flex justify-center items-center">{word}</h2>
                    <h2 className="card-title flex justify-center items-center">{pronunciation}</h2>
                    <p>{meaning}</p>
                    <p>{part_of_speech}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-info">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <Link to="/start_learning" className="btn w-8/12 mx-auto flex justify-center items-center btn-info my-10">Back To Lesson</Link>
        </div>
    );
};

export default SingleLesson;