
import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingleLesson = () => {
    const { id } = useParams();
    const data = useLoaderData() || [];
    


    const [showModal, setShowModal] = useState(false);
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };
    const [selectedLesson, setSelectedLesson] = useState(null);

    const filterById = (id) => {
        return data.find((lesson) => lesson.id === id);
    };


    useEffect(() => {
        const lesson = filterById(id); 
        setSelectedLesson(lesson); 
    }, [id, data]);

    return (
        <div>
            <div className='w-80 mx-auto py-10'>
                <div className="card bg-base-100 shadow-xl border-2">
                    <div className="card-body text-center">
                        <h2 className="card-title flex justify-center items-center">Word: {selectedLesson?.word}</h2>
                        <h2 onClick={() => pronounceWord(selectedLesson?.pronunciation)} className="card-title flex justify-center items-center cursor-pointer text-blue-500">Prounciation: {selectedLesson?.pronunciation}</h2>
                        <p>Meaning: {selectedLesson?.meaning}</p>
                        <p>Parts of Speech: {selectedLesson?.part_of_speech}</p>
                        <div className="card-actions justify-center">
                            <button onClick={() => setShowModal(true) } className="btn btn-info">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


            <Link to="/start_learning" className="btn w-8/12 mx-auto flex justify-center items-center btn-info my-10">Back To Lesson</Link>

            {showModal && selectedLesson && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg max-w-md mx-auto text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>{selectedLesson?.word}</h1>
                        <p className='text-[#09080F99] font-medium'>{selectedLesson?.meaning}</p>
                        <p className='text-[#09080F99] font-medium'>When to say: {selectedLesson?.when_to_say}</p>
                        <p className='text-[#09080F99] font-medium'>Example: {selectedLesson?.example}</p>
                        <button onClick={() => setShowModal(false)} className='btn w-full mt-4  bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600'>Close</button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default SingleLesson;