import React from 'react';

const Contactform = () => {
    return (
        <div className="w-full mx-auto mt-8">
  <form className="space-y-6">
    <div className="flex flex-row">
      <div className="flex flex-col flex-1 mr-4">
        <label htmlFor="name" className="font-medium">Your Name</label>
        <input id="name" type="text" placeholder="Type your name here" className="border border-gray-300 px-3 py-2 rounded-md" />
      </div>
      <div className="flex flex-col flex-1 mr-4">
        <label htmlFor="email" className="font-medium">Email Address</label>
        <input id="email" type="email" placeholder="Type your email here" className="border border-gray-300 px-3 py-2 rounded-md" />
      </div>
    </div>
  
    <div className="flex flex-row">
      <div className="flex flex-col flex-1 mr-4">
        <label htmlFor="subject" className="font-medium text-bold">Subject</label>
        <input id="subject" type="text" placeholder="Type your subject here" className="border border-gray-300 px-3 py-2 rounded-md" />
      </div>
      <div className="flex flex-col flex-1">
        <label htmlFor="phone" className="font-medium">Phone Number</label>
        <input id="phone" type="text" placeholder="Type your phone number here" className="border border-gray-300 px-3 py-2 rounded-md" />
      </div>
    </div>
  
    <div className="flex flex-col">
      <label htmlFor="message" className="font-medium">Message</label>
      <textarea id="message" placeholder="Type your message here ..." rows="4" className="border border-gray-300 px-3 py-2 rounded-md" />
    </div>
  
    <div className="flex items-center">
      <input id="terms" type="checkbox" className="mr-2" />
      <label htmlFor="terms" className="text-sm">Accept terms and privacy policy</label>
    </div>
  
    <div className="flex justify-start">
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit Message</button>
    </div>
  </form>
</div>          
    );
};

export default Contactform;