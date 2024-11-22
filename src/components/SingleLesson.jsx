
import { Link, useLoaderData } from 'react-router-dom';

const SingleLesson = () => {
    const data = useLoaderData() || [];
    console.log(data.length);
    const {
        id, meaning, pronunciation, word, part_of_speech, difficulty, lesson_no, when_to_say,
    } = data[0];

    
};

export default SingleLesson;