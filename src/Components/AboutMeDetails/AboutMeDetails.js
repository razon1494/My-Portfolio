import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Education from './Education/Education';
import Skills from './Skills/Skills';


const AboutMeDetails = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Education></Education>
            <Skills></Skills>
            <Footer></Footer>

        </div>
    );
};

export default AboutMeDetails;