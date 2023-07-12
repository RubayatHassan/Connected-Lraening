import React from 'react';
import photo from '../../../images/Rectangle 28.png'
import starIcon from '../../../images/card/star.png';

const Homepart6 = () => {
    return (
        <div className="mt-12">

            <div className="flex">
                <div className="w-1/2 p-8">
                    <div className="justify-start mb-8">
                        <h4 className='text-[#6278FF]'>Testimonial</h4>
                        <h1 className="text-4xl mb-4 font-bold">What They Say?</h1>
                    </div>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                        smod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in repreh<br></br>

                        enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum."
                    </p>
                    <div className='flex'>
                        <input
                            type="text"
                            placeholder="Write your Assessment"
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
                        />

                        <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded-lg">
                            <span className="mr-2">&#8594;</span> {/* HTML entity for right arrow */}

                        </button>

                    </div>

                </div>
                <div className="w-1/2 relative">
                    <img src={photo} alt="Photo" className="w-96 h-96" />
                    <div className="absolute bg-[#EDEEF3] top-50  left-30 right-30 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                        {/* <h3 className="text-white text-2xl ml-48 mr-48 font-bold mb-4"> </h3> */}
                        {/* Add your comment components here */}
                        <p className='ml-48 mr-48 text-black bg-[#EDEEF3]'>Lorem ipsum dolor sit amet, consectetur adip
                            iscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commo
                            do consequat. Duis aute irure dolor in repreh</p>
                        <div className="absolute bottom-0 right-0 m-4 flex items-center justify-end">
                            <img src={starIcon} alt="Star Icon" className="w-4 h-4 mr-1" />
                            <img src={starIcon} alt="Star Icon" className="w-4 h-4 mr-1" />
                            <img src={starIcon} alt="Star Icon" className="w-4 h-4 mr-1" />
                            <img src={starIcon} alt="Star Icon" className="w-4 h-4 mr-1" />
                            <img src={starIcon} alt="Star Icon" className="w-4 h-4" />
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Homepart6;