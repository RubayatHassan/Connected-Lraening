import React from 'react';
import Teacher1 from '../../../images/Teachers/Rectangle 21.png'
import Teacher2 from '../../../images/Teachers/Rectangle 22.png'
import Teacher3 from '../../../images/Teachers/T-13.png'
import Teacher4 from '../../../images/Teachers/T-14.png'
import Teacher5 from '../../../images/Teachers/T-1.png'
import Teacher6 from '../../../images/Teachers/T-2.png'
import Teacher7 from '../../../images/Teachers/T-3.png'
import Teacher8 from '../../../images/Teachers/T-4.png'


const AboutTeam = () => {
    return (
        <div>
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

            <div className="flex flex-row mt-4">
                <div className="card w-96 glass">
                    <figure><img src={Teacher5} alt="teacher" /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Pushpa Kanon</h2>
                        <p>CEO, derhab</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={Teacher6} alt='teacher' /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Lolona khan</h2>
                        <p>UI Designer</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={Teacher7} alt="teacher" /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Jahangiri khan</h2>
                        <p>UX Designer</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={Teacher8} alt="teacher" /></figure>
                    <div className="card-body flex flex-col items-center mr-4 text-white bg-[#6278FF] rounded">
                        <h2 className="card-title">Mukayemi sha</h2>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;