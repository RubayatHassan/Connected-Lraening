import React from 'react';
import logo1 from '../../../images/BoxLogo/logo1.png';
import logo2 from '../../../images/BoxLogo/logo2.png';
import logo3 from '../../../images/BoxLogo/logo4.png';
import logo4 from '../../../images/BoxLogo/logo4.png';
import logo5 from '../../../images/BoxLogo/logo5.png';
import logo6 from '../../../images/BoxLogo/logo6.png';
import logo7 from '../../../images/BoxLogo/logo7.png';
import logo8 from '../../../images/BoxLogo/logo8.png';


const Homepart4 = () => {
  return (
    <div className="mt-12">
      <div className="justify-start font-bold mb-8">
        <h4 className='text-[#6278FF]'>Service</h4>
        <h1 className='text-4xl mb-4'>Top<br></br>
          Categories</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* Box 1 */}
        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center border rounded">
          <img src={logo1} alt="Logo 1" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">Development</h2>
        </div>

        {/* Box 2 */}
        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img src={logo2} alt="Logo 2" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">Business</h2>
        </div>

        {/* Box 3 */}
        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img src={logo3} alt="Logo 3" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">IT and Software</h2>
        </div>

        {/* Box 4 */}
        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img src={logo4} alt="Logo 4" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">UI Design</h2>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img src={logo5} alt="Logo 4" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">UX Design</h2>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img src={logo6} alt="Logo 4" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">Marketing</h2>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img src={logo7} alt="Logo 4" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">Photography</h2>
        </div>

        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img src={logo8} alt="Logo 4" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold text-center">Graphics Design</h2>
        </div>

        {/* Add more boxes here */}
      </div>
    </div>
  );
};

export default Homepart4;