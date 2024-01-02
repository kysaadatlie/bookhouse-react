import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/img13.jpg'; 
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpeg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.webp';
import img12 from '../images/img14.jpg';
import img13 from '../images/img12.jpg';
import img14 from '../images/img15.jpg';
import img15 from '../images/img16.jpg';
import img16 from '../images/img17.jpg';
import img17 from '../images/img18.jpeg';
import img18 from '../images/img19.jpg';


const Services = () => {

    return (
        <div id="books" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Available Books</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        {/* <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2> */}
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='375px' src={img1} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">The Idiot</h2>
                                    <p className="text-md font-medium">
                                        Fyodor Dostoyevsky
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='375px' src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Three Comrades</h2>
                                    <p className="text-md font-medium">
                                        Erich Maria Remarque
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='375px' src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Game of Thrones</h2>
                                    <p className="text-md font-medium">
                                        George RR Martin
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='375px' src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Gone with the wind</h2>
                                    <p className="text-md font-medium">
                                        Margaret Mitchell
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>   

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='375px' src={img6} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Kite Runner</h2>
                                    <p className="text-md font-medium">
                                        Khaled Hosseini
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img7} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Pride and Prejudice</h2>
                                    <p className="text-md font-medium">
                                        Jane Austen
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img5} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">The brothers Karamazov</h2>
                                    <p className="text-md font-medium">
                                        Fyodor Dostoyevsky
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img8} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">The day lasts more than a hundred years</h2>
                                    <p className="text-md font-medium">
                                        Chingiz Aitmatov
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>    

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img9} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Staten</h2>
                                    <p className="text-md font-medium">
                                        Platon
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img10} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Anna Karenina</h2>
                                    <p className="text-md font-medium">
                                        Leo Tolstoy
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img11} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Little Women</h2>
                                    <p className="text-md font-medium">
                                        Louisa M. Alcott
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img12} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Martin Eden</h2>
                                    <p className="text-md font-medium">
                                        Jack London
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img13} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Clockwork Orange</h2>
                                    <p className="text-md font-medium">
                                        Anthony Burgess
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img14} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Frankenstein</h2>
                                    <p className="text-md font-medium">
                                        Mary Shelley
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img15} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Lord of the Flies</h2>
                                    <p className="text-md font-medium">
                                        William Golding
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img16} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">The Count of Mote Cristo</h2>
                                    <p className="text-md font-medium">
                                        Alexandre Dumas
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img17} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Dracula</h2>
                                    <p className="text-md font-medium">
                                        Bram Stoker
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" width='375px' length='400px' src={img18} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Memoirs of a Geisha</h2>
                                    <p className="text-md font-medium">
                                        Arthur Golden
                                    </p>
                                    <a href="#" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-1 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">Add</a>
                                </div>
                            </div>     

                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;