import React from 'react';
import pic1 from '../../../images/Contact/Group 105.png'
import pic2 from '../../../images/Contact/Contact us-rafiki 1.png'
import pic3 from '../../../images/Contact/Group 128.png'
import pic4 from '../../../images/Contact/Group 126.png'


const Contactaddress = () => {
    return (
        <div className='mt-8'>
             <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        <img src={pic1} alt="Centered Image" className="w-64 h-48" />
      </div>
      <div className="flex items-center ml-20">
      <div className="flex w-1/2">
        <img src={pic3} alt="Image 1" className="w-full h-auto" />
        <img src={pic2} alt="Image 2" className="w-full h-auto ml-48" />
      </div>
    </div>
      <div className="flex items-center justify-center mt-4">
        <img src={pic4} alt="Centered Image 2" className="w-64 h-48" />
      </div>
    </div>
        </div>
    );
};

export default Contactaddress;