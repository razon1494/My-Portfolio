import React from 'react';
import {Link} from 'react-router-dom';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className='my-5 container'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://i.ibb.co/BzjBr6p/lol.jpg" alt="ami" />
                </div>
                <div className="col-md-6">
                    <h1>About My Life</h1>
                    <h4 className='text-start'>MERN Stack Developer</h4>
                    <h4 className='text-start'>CSE Graduate (Major in Database)</h4>
                    <h4 className='text-start'>3+ years corporate job experience</h4>
                    <h4 className='text-start'>Funny & Tour Lover</h4>
                    <p className='text-about'>
                        Self-motivated Web Developer with high level of experience developing consumer-focused web sites/applications. Committed to high standards of web design, user experience, usability and speed. Working with MERN stack development. That means I am very much expert on React, Node.JS, Express.JS, MongoDB. Looking for a good future with my web development career.
                    </p>

                <Link to='/aboutmedetails'>    <button className='button-80'>Know More About Me</button></Link>


                </div>
            </div>
        </div>
    );
};

export default AboutMe;