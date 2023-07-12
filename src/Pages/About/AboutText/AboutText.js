import React from 'react';
import logo1 from '../../../images/about logo/experience (3) 1.png'
import logo2 from '../../../images/about logo/united 1.png'
import logo3 from '../../../images/about logo/tag 1.png'

const AboutText = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <div className="text-center ml-80 mr-80 mb-12">
                <h1 className="text-2xl font-bold">Why Us?</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo
                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri
                    chard McClintock, a Latin profes</p>
            </div>
            <div className="flex justify-center mt-4">
                <div className="mx-4">
                <div className="flex flex-col mb-4 items-center justify-center">
                        <img src={logo1} alt="Logo" className="w-6 h-6 mr-2" />
                        <h2 className="text-lg font-bold">Great Experience</h2>
                    </div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roopiece of classical Latin liter
                        ature from 45 BC, making it over 2000 years old. Ri
                        chard McClintock, a Latin profes</p>
                </div>
                <div className="mx-4">
                    <div className="flex flex-col mb-4 items-center justify-center">
                        <img src={logo2} alt="Logo" className="w-6 h-6 mr-2" />
                        <h2 className="text-lg font-bold">Dedicated Team</h2>
                    </div>

                    <p>Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roopiece of classical Latin liter
                        ature from 45 BC, making it over 2000 years old. Ri
                        chard McClintock, a Latin profes</p>
                </div>
                <div className="mx-4">
                <div className="flex flex-col mb-4 items-center justify-center">
                        <img src={logo3} alt="Logo" className="w-6 h-6 mr-2" />
                        <h2 className="text-lg font-bold">Flexible Pricing</h2>
                    </div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roopiece of classical Latin liter
                        ature from 45 BC, making it over 2000 years old. Ri
                        chard McClintock, a Latin profes</p>
                </div>
            </div>
        </div>
    );
};

export default AboutText;