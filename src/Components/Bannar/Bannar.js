import React from 'react';
import './Bannar.css'
const Bannar=() => {
    const bannar = 'https://i.ibb.co/4ZztXNn/bannar2.png'
    return (
        <div>
            <div className="main-bannar row ">
            <div className="d-md-flex my-5 order-md-first justify-content-center col-md-7 col-12 ">
        <div className="writing-part">
        <p className='small-title'>Design & Develop Your Dream Website</p>
        <h1 className='main-title'>Hi, This is <span className='arifur' >Arifur Rahman</span></h1>
        <div className="wrapper">
            {/* <div className="static-text fs-1">I'm a</div> */}
            <ul className="dynamic-texts fs-1">
                  <li><span className='fs-1'>Web Developer</span></li>
                  <li><span className='fs-1'>Front-End Developer</span></li>
                  <li><span className='fs-1'>MERN Stack Developer</span></li>
                  <li><span className='fs-1'>React Developer</span></li>
            </ul>
                        </div>
                        <br />

        <button class="my-3 button1 button-801">Hire Me</button>
       <a href="https://drive.google.com/file/d/1pUr717Hxw3qbDjNpFdbUJZkhVnaZk3yj/view?usp=sharing" target="blank" download><button class="button-80 mx-3 my-3"> My Resume</button></a></div></div>
                <div className="img-part col-md-5 col-12 order-first ">
                    <img className='img-fluid rounded-circle my-img' src={bannar} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Bannar;