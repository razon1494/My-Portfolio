import React from 'react';
import NavBar from '../NavBar/NavBar';
import Education from './Education/Education';
import Skills from './Skills/Skills';


const AboutMeDetails = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Education></Education>
            <Skills></Skills>

        </div>
    );
};

export default AboutMeDetails;