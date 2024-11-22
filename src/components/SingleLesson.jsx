
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleLesson = () => {
    const data = useLoaderData() || [];
    console.log(data.length);
    const {
        id, meaning, pronunciation, word, part_of_speech, difficulty, lesson_no, example, when_to_say,
    } = data[0];

    const [showModal, setShowModal] = useState(false);
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div>
            <div className='w-80 mx-auto py-10'>
                <div className="card bg-base-100 shadow-xl border-2">
                    <div className="card-body text-center">
                        <h2 className="card-title flex justify-center items-center">Word: {word}</h2>
                        <h2 onClick={() => pronounceWord(pronunciation)} className="card-title flex justify-center items-center">Prounciation: {pronunciation}</h2>
                        <p>Meaning: {meaning}</p>
                        <p>Parts of Spech: {part_of_speech}</p>
                        <div className="card-actions justify-center">
                            <button onClick={() => setShowModal(true)} className="btn btn-info">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/start_learning" className="btn w-8/12 mx-auto flex justify-center items-center btn-info my-10">Back To Lesson</Link>

            {showModal && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg max-w-md mx-auto text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>{word}</h1>
                        <p className='text-[#09080F99] font-medium'>{meaning}</p>
                        <p className='text-[#09080F99] font-medium'>When to say: {when_to_say}</p>
                        <p className='text-[#09080F99] font-medium'>Example: {example}</p>
                        <button  onClick={() => setShowModal(false)} className='btn w-full mt-4  bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600'>Close</button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default SingleLesson;