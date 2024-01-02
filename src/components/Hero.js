import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/book house.png';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                Welcome to the Book House! <br />
                                Dive into a world of stories, knowledge, and imagination
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500"><p>At Book Haven, we celebrate the magic of literature. <br />Explore our shelves brimming with tales that transport you to new realms, insightful non-fiction that broadens horizons, and timeless classics that resonate across generations. <br />

Whether you seek a thrilling adventure, a moment of introspection, or a journey through history, our collection curated by passionate bibliophiles awaits you.

Begin your next chapter with us at Book House - where every page brings new discoveries.</p></div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            {/* <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} /> */}
                            <img alt='card img' className='rounded-t float-right duration-1000 w-full' src={heroImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;