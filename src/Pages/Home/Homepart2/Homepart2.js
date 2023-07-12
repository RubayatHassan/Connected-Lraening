import React from 'react';
import photo from '../../../images/home2.png'


const Homepart2 = () => {
    return (
        <div className="flex mt-12">
            <div className="w-1/2">
                <img src={photo} alt="Photo" className="h-auto max-w-full" />
            </div>
            <div className="w-1/2 p-4">
                <h1 className="text-sm font-bold mb-4 text-[#6278FF]" > About Us</h1>
                <h2 className="text-4xl font-bold mb-4">We are providing the best
                    online digital courses.</h2>
                <p className="text-gray-700">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo
                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri
                    chard McClintock, a Latin professor at Hampden-Sydney College in Virginia, l
                    ooked up one of the more obscure Latin words, consectetur, from a Lorem Ips
                    um passage, and going through the cites of the word in classical literature, di
                    scovered the undoubtable source. <br></br>

                    .Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonoru
                    et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on.
                </p>
            </div>
        </div>
    );
};

export default Homepart2;