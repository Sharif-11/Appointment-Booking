import React from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <div className='mt-16'>
            <div className="carousel w-full bg-gray-900">
                <div id="slide1" className="carousel-item relative w-full opacity-40">
                    <img src="/public/images/Banner-1.jpg" className="h-[650px] w-full " />
                    <h1 className='-ml-[60%] mt-[20%] text-bold text-stone-950'>Hello, I'm Dr. X</h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full opacity-40">
                    <img src="/public/images/Banner-2.jpg" className="h-[650px] w-full" />
                    <h1 className='-ml-[60%] mt-[20%] text-bold text-stone-950'>Hello, I'm Dr. X</h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full opacity-40">
                    <img src="/public/images/Banner-3.jpg" className="h-[650px] w-full" />
                    <h1 className='-ml-[60%] mt-[20%] text-bold text-stone-950'>Hello, I'm Dr. X</h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;