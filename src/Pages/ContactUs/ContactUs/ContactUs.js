import React from 'react';
import Contactbanner from '../Contactbanner/Contactbanner';

import Contactform from '../Contactform/Contactform';
import Contactaddress from '../Contactaddress/Contactaddress';


  const ContactUs = () => {
    return (
        <div>
            <Contactbanner></Contactbanner>

            <Contactaddress></Contactaddress>
            
            <Contactform></Contactform>
        </div>
    );
  };
  
  export default ContactUs;