import React from 'react';
import group6 from '../../../images/Group 6.png'
import logo1 from '../../../images/google logo/image 28.png'
import logo2 from '../../../images/google logo/image 29.png'
import logo3 from '../../../images/google logo/image 30.png'
import logo4 from '../../../images/google logo/image 31.png'


const HomePart1 = () => {

    return (
        <div>
            <div>
                <div>
                    <div className="hero bg-base-200 mt-2">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={group6} className="max-w-sm rounded-lg bg-base-200" alt='' />
                            <div>
                                <p className="font-roboto text-6xl font-extrabold leading-tight tracking-normal text-left text-[#161E49] hover:underline hover:border-b-2">For Every Student<br></br>
                                    Every Classroom.<br></br>
                                </p>
                                <p className="font-roboto text-6xl font-extrabold leading-tight tracking-normal text-left text-[#6278FF] hover:underline hover:border-b-2">Real Results.</p>
                                <p>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                    was born and I will give you a completeLorem ipsum dolor sit amet, consectetur adipi
                                    scing elit, sed do eiusm
                                </p>

                                <button style={{
                                    width: '185px',
                                    height: '50px',
                                    top: '731px',
                                    left: '240px',
                                    borderRadius: '25px'
                                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
                                {/* <button className="text-black btn-xs sm:btn-sm md:btn-md lg:btn-lg">{ style={{ borderLeft: '3px solid blue', borderRadius: '100%', color: 'blue', padding: '10px', height: '10px' }}  />}  Watch Video</button> */}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div style={{ marginLeft: '0px' }} className="bg-base-200 grid grid-cols-4 gap-4">
                    <div className="p-4">
                    <img src={logo4} alt="Logo 4" className="w-40 h-16" />
                    </div>
                    <div className="p-4">
                    <img src={logo1} alt="Logo 1" className="w-40 h-16" />
                    </div>
                    <div className="p-4">
                    <img src={logo3} alt="Logo 3" className="w-40 h-16" />
                    </div>
                    <div className="p-4 mr-10">
                    <img src={logo2} alt="Logo 2" className="w-40 h-16" />
                    </div>
                </div>
        </div>
    );
};


export default HomePart1;