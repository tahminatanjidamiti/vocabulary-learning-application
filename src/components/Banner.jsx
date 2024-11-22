import React from 'react';

const Banner = () => {
    return (
        <div className='w-8/12 mx-auto py-10'> 
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full min-h-5">
                <img
                    src="https://i.ibb.co.com/W3YctZj/katakana-japanese-alphabet-chart-with-romanized-vector-53126558.jpg"
                    className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle btn-info">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-info">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/5Lk2HGM/teen-girl-speaking-japanese-cartoon-vector-41688802.jpg"
                    className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle btn-info">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-info">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/LJbqZzh/man-studying-japanese-young-guy-communicates-vector-54350845.jpg"
                    className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle btn-info">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-info">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/Ksm8zMN/learn-japanese-template-vector-42946937.webp"
                    className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle btn-info">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-info">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;