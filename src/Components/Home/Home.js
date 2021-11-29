import React from 'react';
import Bannar from '../Bannar/Bannar';
import NavBar from '../NavBar/NavBar';
import './Home.css'
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
        </div>
    );
};

export default Home;