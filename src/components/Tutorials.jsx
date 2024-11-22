import React from 'react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
    return (
        <div className='my-10'>
            <h1 className="text-5xl font-bold my-10 flex justify-center items-center">Tutorials</h1>
            <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/sISIVKJh_EA?si=-9Zho7jxJQ8Ki6rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/gmxmWbJyapg?si=C9JHbLnnfnUDnC6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/z1zdzd8ff4U?si=fbBXy2GOvKF_Frn2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/z4qh8BVrb3w?si=ABScSVo3oAt7n5mV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/yyEBWJMf584?si=ZDGCy3TpDG0EIkkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/ANGdAXTpZog?si=7s-GXQCw1bE-_ctG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <Link to="/start_learning" className="btn w-8/12 mx-auto flex justify-center items-center btn-info my-10">Learn Vocabularies</Link>
        </div>
    );
};

export default Tutorials;