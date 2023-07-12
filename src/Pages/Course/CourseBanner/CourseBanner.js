import React from 'react';
import banner from '../../../images/banner/course banner.png'

const CourseBanner = () => {
    return (
        <div>
           <img src={banner} className="w-screen mt-2" alt='' />
           <div className="text-center mt-8">
      <h2 className="text-sm font-bold">Course List</h2>
      <p className="text-3xl font-bold">Our Online <br></br> Course</p>
      {/* Rest of the course list content */}
    </div>
        </div>
    );
};

export default CourseBanner;