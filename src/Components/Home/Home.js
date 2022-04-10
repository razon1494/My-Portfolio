import React from 'react';
import Bannar from '../Bannar/Bannar';
import ContactMe from '../ContactMe/ContactMe';
import NavBar from '../NavBar/NavBar';
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../AboutMeDetails/Skills/Skills';
// ..
AOS.init();
const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bodi">
            <section className='pattern'>
                <div className="geeks">
                    <Bannar></Bannar>
                    </div>
                </section></div>

            <div data-aos="zoom-out"><Skills></Skills></div>
            <br />
<div data-aos="zoom-in"><AboutMe></AboutMe></div>

        <div data-aos="fade-down"><ContactMe></ContactMe></div>
        <div data-aos="fade-up"><Projects></Projects></div>


            <Footer/>

        </div>
    );
};

export default Home;