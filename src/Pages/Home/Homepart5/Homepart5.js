import React from 'react';
import Teacher1 from '../../../images/Teachers/Rectangle 21.png'
import Teacher2 from '../../../images/Teachers/Rectangle 22.png'
import Teacher3 from '../../../images/Teachers/T-13.png'
import Teacher4 from '../../../images/Teachers/T-14.png'

const Homepart5 = () => {
    return (
        <div>
            <div className="mt-12 flex flex-col items-center font-bold">
                <h4 className="text-[#6278FF]">Team Member</h4>
                <h1 className="text-4xl mb-4 text-center">
                    Popular Professional
                    <br />
                    Teachers
                </h1>
            </div>

            <div className="flex flex-row mt-4">
                <div className="card w-96 glass">
                    <figure><img src={Teacher1} alt="teacher" /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Pushpa Kanon</h2>
                        <p>CEO, derhab</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={Teacher2} alt='teacher' /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Lolona khan</h2>
                        <p>UI Designer</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={Teacher3} alt="teacher" /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Jahangiri khan</h2>
                        <p>UX Designer</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={Teacher4} alt="teacher" /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Mukayemi sha</h2>
                        <p>Developer</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homepart5;