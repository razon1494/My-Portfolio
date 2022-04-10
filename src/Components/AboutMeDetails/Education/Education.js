import React from 'react';
import './Education.css'
const Education = () => {
    return (
        <div className='mt-4'>
            <h1 className='projects-title'>My Educational Background</h1>
            <div className="d-flex justify-content-center align-items-center mt-5">
            <div className='educational-part row container my-6'>
            <img className='img-fluid col-md-5' src="https://i.ibb.co/VtFnnj8/Untitled-1.png" alt="" />
            <div className="alleducation container col-md-5">
                <div className="undergraduation edu text-start">
                    <h2 className='fw-bold education-title'>Graduation</h2>
                    <h4 className=' ms-5'><span> University: </span>North South University</h4>
                    <h4 className='ms-5'> <span>Subject: Computer Science Engineering</span> </h4>
                            <h4 className='ms-5'> <span>Duration: 2015 - 2020</span> </h4>
                            <hr />
                </div>
                <div className="hsc edu text-start">
                    <h2 className='fw-bold education-title'>Higher Secondary</h2>
                    <h4 className=' ms-5'><span> College: </span>Amtali Degree College</h4>
                    <h4 className='ms-5'> <span>Subject: Science</span> </h4>
                            <h4 className='ms-5'> <span>Duration: 2012-2014</span> </h4>
                            <hr />
                </div>
                <div className="ssc edu text-start">
                    <h2 className='fw-bold education-title'>Secondary School</h2>
                    <h4 className=' ms-5'><span> College: </span>Amtali A.K Pilot High School</h4>
                    <h4 className='ms-5'> <span>Subject: Science</span> </h4>
                    <h4 className='ms-5'> <span>Year: 2011</span> </h4>
                </div>

            </div></div></div>
        </div>
    );
};

export default Education;