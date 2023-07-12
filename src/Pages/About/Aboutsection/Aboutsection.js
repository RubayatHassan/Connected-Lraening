import React from 'react';
import pic from '../../../images/Rectangle 38.png'

const Aboutsection = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-10">
        <div className='mt-20'>
          <h1 className="text-sm font-bold mb-4 text-[#6278FF]" > About Us</h1>
          <h2 className="text-4xl font-bold mb-4">Build Better For Best
            Economy.</h2>
          <p className="text-gray-700">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri
            chard McClintock, a Lati.Contrary to popular belief, Lorem Ipsum is not simply
            piece of classical Latin

            literature from 45 BC, making it over 2000 years old. Ri
            chard McClintock, a Latin professor at Hampden-Sydney College in Virginia, l
            ooked up one of the more obscure Latin words, consectetur, from a Lorem Ips
            um passage, and going through the cites of the word in classical literature, di
            scovered the undoubtable source <br></br>

            .Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonoru
            et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on.
          </p>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join our team
        </button>
      </div>
      <div className="w-120 ml-48 h-96 mt-20">
        <img className="object-cover h-full w-full" src={pic} alt="Team Photo" />
      </div>
    </div>
  );
};

export default Aboutsection;