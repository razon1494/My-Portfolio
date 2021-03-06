import React from 'react';
import {Link} from 'react-router-dom';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className="aboutmecontainer">
        <div className='my-5 container'>
            <div className="row">
                <div className="col-md-6  my-hand">
                    <img className='img-fluid rounded-3' src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="ami" />
                </div>
                <div className="col-md-6 about-text">
                    <h1 className='aboutmetitle' >ABOUT ME</h1> <br />
                    <h4 className='text-start mt-5'>MERN Stack Developer</h4>
                    <h4 className='text-start'>CSE Graduate (Major in Database)</h4>
                    <h4 className='text-start'>3+ years corporate job experience</h4>
                    <h4 className='text-start'>Funny & Tour Lover</h4>
                    <p className='text-about'>
                        Self-motivated Web Developer with high level of experience developing consumer-focused web sites/applications. Committed to high standards of web design, user experience, usability and speed. Working with MERN stack development. That means I am very much expert on React, Node.JS, Express.JS, MongoDB. Looking for a good future with my web development career.
                    </p>

                <Link to='/aboutmedetails'>    <button className='button-80'>Know More About Me</button></Link>


                </div>
            </div>
        </div></div>
    );
};

export default AboutMe;